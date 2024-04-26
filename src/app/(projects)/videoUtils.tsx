"use client";

import { MutableRefObject, createRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { OnProgressProps } from "react-player/base";

const DEBUG = false;


// COMPONENT: External video embed for project body
export function CaseVideoStream({ className = "", src, videoClassName }: { className?: string, src: string, videoClassName?: string }) {
    return (
        <div className={className + " rounded-[1.25vw] overflow-hidden mb-[3.5%] drop-shadow-md"}>
            <ReactPlayer key={src + 'player'} className={"absolute top-0 left-0 " + videoClassName} playsinline url={src} controls={false} width='100%' height='100%' playing={true} loop pip={false} volume={0} muted={true} preload="auto" poster={src.replace('.mp4', '.png')} />
        </div>
    );
}

// COMPONENT: External video embeds that play in sync. All sync to first video.
export function SyncedVideos({ videoSrcs, classNames, videoClassNames }: { videoSrcs: string[], classNames: string[], videoClassNames: string[] }) {
    const [videos, setVideos] = useState<MutableRefObject<ReactPlayer>[]>([]);
    const [readyCounter, setReadyCounter] = useState<number>(0);
    // const [bufferCounter, setBufferCounter] = useState<number>(0);
    const [playing, setPlaying] = useState(false);
    const arrLength = videoSrcs.length;

    useEffect(() => {
        setVideos(
            Array(arrLength)
                .fill(null)
                .map((_, i) => videos[i] || createRef()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrLength]);

    useEffect(() => {
        const onProgress = () => {
            if (!playing) {

            }
            else {
                var currentTime = videos[0].current.getCurrentTime();
                videos.map((video, index) => {
                    if (video.current.getDuration() - video.current.getCurrentTime() < 0.5)
                        return video.current.seekTo(video.current.getDuration() - 0.5);
                    const diff = video.current.getCurrentTime() - currentTime;
                    if (Math.abs(diff) > 0.1) {
                        video.current.seekTo(currentTime, "seconds");
                        // if (DEBUG) console.log("[Correction] " + index + " was off by " + diff);
                    }
                    // if (DEBUG) console.log("[Progress] " + index + " is off by " + diff);
                });
            }

        };

        const intervalId = setInterval(() => {
            onProgress();
        }, 200)
        return () => clearInterval(intervalId);
    }, [videos, playing]);


    // Unified control functions

    const checkIfReady = () => {
        var shouldStart = true;
        videos.map((video) => {
            shouldStart = shouldStart && (video.current.getSecondsLoaded() > 1);
        });
        if (DEBUG) console.log("[Check] All videos are: ", shouldStart);
        return shouldStart;
    }

    const startIfAllReady = () => {
        const shouldStart = checkIfReady();
        if (DEBUG) console.log("[Starting] ", shouldStart);
        if (shouldStart) // Autoplay on ready
            setPlaying(true);
        else
            setPlaying(false);
    }

    const pauseAll = () => {
        if (DEBUG) console.log("[Pausing]", videos);
        setPlaying(false);
    }

    const setTime = (seconds: number) => {
        videos.map((video) => {
            video.current.seekTo(seconds, "seconds");
        });
    }


    // Event handlers

    const onReady = (player: ReactPlayer) => {
        if (DEBUG && readyCounter <= videos.length) console.log("[Ready] Event #" + readyCounter);
        // if (!playing && readyCounter + 1 >= videoSrcs.length)
        // setPlaying(true);
        setReadyCounter(readyCounter + 1);
        // if (readyCounter < videos.length)
    };

    const onStart = (index: number) => {
        // pauseAll();
        if (DEBUG) console.log("[Start] Action fired.");
        if (!playing)
            setPlaying(true);

    };

    const onPause = (index: number) => {
        if (DEBUG) console.log("[Pause] Action fired.");
        // if (playing)
        // pauseAll();
    };

    const onBuffer = (index: number) => {
        // pauseAll();
        // if (DEBUG) console.log("[Buffer] " + bufferCounter + ' / ' + videos.length);
        // setBufferCounter(bufferCounter + 1);
    };

    const onBufferEnd = (index: number) => {
        // if (DEBUG) console.log("[Finish Buffer] " + bufferCounter + ' / ' + videos.length);
        // if (bufferCounter <= 1)
        //     setPlaying(true);
        // if (bufferCounter > 0)
        //     setBufferCounter(bufferCounter - 1);

    };


    return (<div className='w-full h-full'>
        {videoSrcs.map((videoSrc, index) => {
            return (
                <div key={videoSrc + 'div'} className={classNames[index]}>
                    <ReactPlayer
                        key={videoSrc + 'player'}
                        ref={videos[index]}
                        url={videoSrc}
                        className={"absolute top-0 left-0 " + videoClassNames[index]}
                        controls={index == 0 || (!playing && videoSrc.includes('http'))}
                        playing={playing}
                        muted={true}
                        onBuffer={() => onBuffer(index)}
                        onBufferEnd={() => onBufferEnd(index)}
                        onPause={() => onPause(index)}
                        onStart={() => onStart(index)}
                        onReady={onReady}
                        poster={videoSrc.replace('.mp4', '.png')}
                        width='100%' height='100%'
                        loop
                        pip={false}
                        volume={0}
                        preload="true"
                        playsinline />
                </div>
            );
        })}
    </div>);
}