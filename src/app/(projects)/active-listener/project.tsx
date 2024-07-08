import { Project } from "@/app/(lib)/schema";
import { ActionButton, CaseBg, CaseImage, CasePrototype, CaseTool, CaseTools, CaseVideo, CaseVideoOptional, H1, H2, H3, P } from "../projectComponents";

import cover from "./csrc/cover.png";
import splash from "./csrc/splash.png";

// DATA: Header & hover-able details
export const projectInfo: Project = {
    path: 'active-listener',
    href: 'active-listener',
    coverImage: cover,
    splashImage: splash,
    // isSplashImageLight: true,
    title: 'Active Listener',
    subtitle: 'Telling the stories behind songs.',
    link: 'https://activelistener.alexya.ng/',
    tags: ['Frontend', 'UI/UX'],
    tools: ['Figma', 'Vercel'],
    languages: ['TypeScript', 'CSS'],
    resources: ['React + Next.js', 'Vercel AI'],
    integrations: ['Spotify', 'Google Custom Search', 'GPT-3 Turbo'],
    icons: ["M635.74-172.782q-20.585 0-34.51-14.246-13.925-14.246-13.925-34.683 0-20.436 13.925-34.471 13.925-14.036 34.51-14.036h10.694q18.126 0 30.737-12.625 12.611-12.625 12.611-31.288v-55.043q0-41.859 27.783-72.06T787.478-477v-4q-42.13-8.565-69.913-38.266-27.783-29.701-27.783-71.56v-55.608q0-18.126-12.611-30.737-12.611-12.611-30.737-12.611H635.74q-20.585 0-34.51-14.246-13.925-14.247-13.925-34.683 0-20.437 13.925-34.472t34.51-14.035h29.347q50.888 0 86.51 36.022 35.621 36.022 35.621 86.674v55.043q0 20.363 16.776 32.138 16.775 11.775 39.638 11.775 16.137 0 27.862 12.725 11.724 12.725 11.724 29.362v86.958q0 16.637-11.525 29.362-11.524 12.725-28.561 12.725-22.363 0-39.138 11.761-16.776 11.761-16.776 31.587v55.608q0 50.652-35.621 86.674-35.622 36.022-86.51 36.022H635.74Zm-340.827 0q-50.888 0-86.51-36.022-35.621-36.022-35.621-86.674v-55.608q0-19.826-16.761-31.587t-39.088-11.761q-16.377 0-28.264-11.687-11.887-11.688-11.887-28.965v-89.828q0-17.277 11.687-28.965 11.687-11.687 28.964-11.687 21.827 0 38.588-11.775t16.761-32.138v-55.043q0-50.652 35.621-86.674 35.622-36.022 86.51-36.022h28.781q20.585 0 34.511 14.246 13.925 14.246 13.925 34.683 0 20.436-13.925 34.471-13.926 14.036-34.511 14.036h-9.563q-18.663 0-31.288 12.611t-12.625 30.737v55.608q0 42.95-27.811 73.226-27.811 30.275-69.32 35.6v4.415q42.509 4.099 69.82 34.69 27.311 30.591 27.311 73.721v55.043q0 18.663 12.625 31.288t31.288 12.625h9.563q20.585 0 34.511 14.246 13.925 14.247 13.925 34.683 0 20.437-13.925 34.472-13.926 14.035-34.511 14.035h-28.781Z"]
};

// MEDIA
const className = '';
const tooltipVid = "/" + projectInfo.path + "/tooltips.mp4";
const searchBarVid = "/" + projectInfo.path + "/search-bar.mp4";
const controlBarVid = "/" + projectInfo.path + "/control-bar.mp4";
const summaryVid1 = "/" + projectInfo.path + "/summary1.mp4";
const summaryVid2 = "/" + projectInfo.path + "/summary2.mp4";
const summaryVid3 = "/" + projectInfo.path + "/summary3.mp4";
const journalismVid = "/" + projectInfo.path + "/journalism.mp4";

import system from './csrc/system.png';
import spotify from './csrc/spotify.png';
import ideaH from './csrc/idea-h.png';
import ideaV from './csrc/idea-v.png';
import prototype from './csrc/prototype.png';
import summaryPrompt1 from './csrc/summary-prompt1.png';
import summaryPrompt2 from './csrc/summary-prompt2.png';
import summaryPrompt3 from './csrc/summary-prompt3.png';

// COMPONENT: Body content / project story
export function ProjectStory() {
    return (
        <div className="story">
            <div className="center !-mt-6">
                <H3>Music is the predominant way we experience poetry, new art, and international voices.</H3>
                <H3>The tools we use to interact with music, however, rarely account for the cultural and contextual richness of each song.</H3>
            </div>
            <CaseImage className="mt-16 mb-0 scale-110 max-w-7xl" src={spotify} alt="" />
            <div className="center ">
                <H3>Streaming platforms are algorithm-driven file browsers, and little more.</H3>
                <P>
                    It&apos;s great for passive listening, encouraging us to &apos;set it and forget it.&apos; However, this design strategy is greatly limiting the diversity and depth of our engagement with music.
                    <br />
                    <br />
                    Spotify tracks how the entire world listens to music. Yet, it does not allow users to find new music from this data. Their algorithm overwhelmingly recommends things that you&apos;ve already heard.
                    <br />
                    <br />
                    In song-based radios, genre mixes, and even Spotify-curated playlists, the music that you can &apos;discover&apos; is becoming, more and more, variations of what you already know.
                    <br />
                    <br />
                    Not to mention that there&apos;s not a single way to see a song&apos;s genre, relative mood, relative audio qualities, or popular moments. Nor a way to find other songs through these qualities. Despite the fact that Spotify has all of this data.
                    <br />
                    <br />
                    While these are systematic issues, they are also design challenges that can be partially addressed by a third-party intervention.
                </P>
            </div>

            <div className="mt-16 center">
                <H1>Tooling for Music-turgy</H1>
                <H1 className="!mt-0 !text-3xl opacity-50">Creating an intelligent listening companion.</H1>
            </div>

            <div className="mt-4 center">
                <P>
                    Did you know the lyrics on streaming platforms are crowd-sourced? Thousands of hours of unpaid labor happen on the Musixmatch platform, where users transcribe, sync, and translate lyrics for free. Then, Musixmatch put this data behind a paywall and expensive API.
                    <br />
                    <br />
                    While I don&apos;t agree with this business model, it points to the enormous potential of existing community-driven data. There is an expansive ecosystem of consumer sites that use this data, but none that integrate it into the listening experience.
                    <br />
                    <br />
                    (Spotify has tried multiple times to integrate annotations, but without the wealth of community-driven data.)
                </P>
            </div>

            <div className="relative flex justify-center h-64 mb-0 mt-14">
                <CaseTools className="flex-nowrap absolute -mx-12 !w-auto gap-4 md:gap-8">
                    <CaseTool logoName="Hype-Machine" desc={"Journalism aggregation, music-blog-based charts."} />
                    <CaseTool logoName="Rate-Your-Music" desc={"Power user reviews of music, community tags and metadata."} />
                    <CaseTool logoName="Genius" desc={"Lyrics, annotations, and secondary artist tracking."} />
                </CaseTools>
            </div>

            <div className="mt-16 center">
                <H3>
                    Inspired to expand and deeply integrate what existing datasets can provide, I drafted a technical roadmap for the enhanced-listening experience.
                </H3>
            </div>

            <div className="hidden md:block">
                <CaseImage className="mb-0 -mt-0 max-w-7xl" src={ideaH} alt="" />
            </div>
            <div className="block md:hidden">
                <CaseImage className="max-w-sm mb-0 -mt-0" src={ideaV} alt="" />
            </div>

            <div className="mt-0 center">
                <H3>
                    Designing a prototype to support the first round of features, I decided to align playback and library features to the Spotify design system as much as possible, in order to make the expansive features feel like a natural extension of the platform.
                </H3>
            </div>

            <CaseImage className="max-w-5xl mt-16 mb-0" src={prototype} alt="" />

            <div className="mt-0 center">
                <H3>
                    Finally, I dove into the technical implementation of the prototype, using the familiar React + Next.js tech stack from Accountable Brands. The three v1 features: Spotify sync, journalism aggregation, and smart summarization.
                    <br />
                    <br />
                    Currently, the app makes direct requests to Spotify to enable continuous granular updates, reduce sync latency, and minimize security vulnerabilities, but this may change if I need to implement a rate limiter.
                    <br />
                    <br />
                    For the corresponding data collection, requests are mediated by the server by API necessity. However, these progressive requests had to be broken up into chunks: search, article previews, and summarization, to prevent a timeout and give as much feedback as possible during lengthy fetch times.
                </H3>
            </div>

            <CaseImage className="mt-8 mb-0 max-w-7xl" src={system} alt="" />

            <div className="-mt-8 center">
                <H3>
                    An unexpectedly large challenge is continuously parsing the summarization as it&apos;s streamed in, especially as I wanted to identify contextually important items like other albums, sibling songs, etc.
                    <br />
                    <br />
                    After grabbing crucial track metadata, the app beings to fetch these larger contextual clues from Spotify in the background. When the summary begins to stream, I normalize the writing style, identify these phrases, and wrap them in type-based tooltip elements that contain built-in actions.
                </H3>
            </div>
            <CaseVideo src={tooltipVid} className="mt-16 !mb-0 max-w-4xl mx-auto" ></CaseVideo>
            <div className="mt-12 center">
                <H3>

                    The result is a smarter summary, in a way that prompting couldn&apos;t achieve alone. As the app slowly expands its knowledge base on a song, the summary is retroactively enhanced to reflect these new insights.
                </H3>
            </div>

            <div className="mt-16 center">
                <H1>Version 0.1.0</H1>
                <H1 className="!mt-0 !text-3xl opacity-50">The baseline application.</H1>
                <P>
                    Published now is a fully-functional proof of concept: Spotify sync (once approved), journalism aggregation, and smart summarization.
                </P>
                <br />
                <H1>Playback</H1>
                <P>
                    Controls, inspired by Spotify UI, are only possible once Spotify approves the app. For demonstration purposes, I substituted them for a search bar that uses Spotify&apos;s user-less API.
                    <br />
                    <br />
                    To keep up with external playback changes, it re-syncs whenever the page loses and re-gains focus. I found that a manual refresh button, in conjunction with this intelligent refreshing, was a viable alternative to constant background syncing.
                </P>
            </div>
            <CaseVideo src={controlBarVid} className="mt-16 !mb-0 max-w-4xl mx-auto !rounded-sm" ></CaseVideo>
            <CaseVideo src={searchBarVid} className="mt-16 !mb-0 max-w-4xl mx-auto !rounded-sm" ></CaseVideo>
            <div className="mt-16 center">
                <H1>Summarization</H1>
                <P>
                    The star of the show: dynamic summaries try to capture the context, musicology, and critical response of the song. The prompt and format is a continual work in progress, as I improve accuracy and depth.
                </P>
                <CaseImage className="max-w-64 !mb-0 mt-8" src={summaryPrompt1} alt="" />
                <CaseVideo src={summaryVid1} className="mt-6 !mb-0 max-w-4xl mx-auto !rounded-sm" loop={false} autoPlay={false} />
                <CaseImage className="max-w-xs !mb-0 mt-16" src={summaryPrompt2} alt="" />
                <CaseVideo src={summaryVid2} className="mt-6 !mb-0 max-w-4xl mx-auto !rounded-sm" loop={false} autoPlay={false} />
                <CaseImage className="max-w-60 !mb-0 mt-16" src={summaryPrompt3} alt="" />
                <CaseVideo src={summaryVid3} className="mt-6 !mb-0 max-w-4xl mx-auto !rounded-sm" loop={false} autoPlay={false} />
            </div>
            <div className="mt-16 center">
                <H1>Journalism</H1>
                <P>
                    The app uses a custom search engine to find music journalism about the song. Then, articles are sorted by level of relevance to the track and word count (converted to estimated reading time).
                    <br />
                    <br />
                    I restricted the use of external material to what I believe are exclusively transformative and referential purposes. While case law is still developing around this, I used Google&apos;s AI search summaries as a guideline for what is appropriate.
                    <br />
                    <br />
                    The current design is a significant departure from the prototype. I decided to emphasize the headlines as a distinction between original and external content. Ultimately, the intention of the summary is to refer users to the original content, not to replace it.
                </P>
            </div>
            <CaseVideo src={journalismVid} className="mt-12 !mb-0 max-w-4xl mx-auto !rounded-none" ></CaseVideo>

            <div className="mt-16 center">
                <H1>...More to come, once I get a day job.</H1>
                <H1 className="!mt-0 !text-3xl opacity-50">Feel free to try it out at the link below ↓</H1>

            </div>
        </div>
    );
}