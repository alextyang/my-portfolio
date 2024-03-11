import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseSplit, CaseVideo } from "../projectComponents";

import cover from "./src/cover.png";
import { SyncedVideos } from "../videoUtils";

export const projectInfo: Project = {
    path: 'animal-worlds',
    href: 'animal-worlds',
    coverImage: cover,
    title: 'Animal Worlds',
    subtitle: 'An immersive experience exploring animal language & society.',
    tags: ['Installation Art'],
    tools: ['After Effects'],
    languages: ['TouchDesigner'],
    resources: [],
    icons: ["M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80ZM260-440q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"]
};


import ae from "./src/ae.png";
import cite from "./src/citations.jpeg";
import floor from "./src/floor.jpeg";
import mindMap from "./src/mind-map.png";
import patchWhale from "./src/patch-whale.png";
import patchMain from "./src/patch-main.png";
import setup from "./src/setup.jpeg";

const main_vid = "https://www.youtube.com/watch?v=5f5ZJpSIDpM";
const floor_vid = "https://www.youtube.com/watch?v=gcjaJmUmA78";
const install_vid = "https://www.youtube.com/watch?v=r5HGKNGL9Ro";
const caption_vid = "/" + projectInfo.path + "/captions.mp4";
const citation_vid = "/" + projectInfo.path + "/citations.mp4";
const wall_vid = "/" + projectInfo.path + "/wall.mp4";
const className = '';

export function CaseStudy() {
    return (
        <>
            <SyncedVideos videoSrcs={[main_vid, floor_vid, caption_vid, citation_vid, install_vid]} classNames={["h-full w-full relative pt-[56.0319%] rounded-[1.25vw] overflow-hidden mb-[3.5%] drop-shadow-md", "min-h-[calc(100vh+5.25rem)] min-w-[100vw] aspect-video pt-[56.25%] fixed -top-20 left-[50%] -translate-x-1/2 fixed -z-20", "h-full w-3/4 relative pt-[13.125%] mx-auto rounded-[1.25vw] overflow-hidden mb-[3.5%] drop-shadow-md bg-black", "h-full w-1/2 relative pt-[6.75%] rounded-[1.25vw] overflow-hidden mb-[56%] mx-auto drop-shadow-md bg-black", "h-full w-full relative pt-[56.0319%] rounded-[1.25vw] overflow-hidden mb-[56%] drop-shadow-md",]} videoClassNames={['', 'object-fit-cover pointer-events-none', '', '', '']}></SyncedVideos>

            {/* <CaseImage className={className + ' bg-black px-6 py-4'} src={mindMap} alt="" /> */}
            <CaseImage className={className} src={patchWhale} alt="" />
            <CaseImage className={className} src={ae} alt="" />
            <CaseImage className={className} src={patchMain} alt="" />
            <CaseSplit className={className + " "} src1={cite} src2={floor} alt1="" alt2="" />
            <CaseVideo className={className + " h-[52vw]"} src={wall_vid} />
            <CaseImage className={className + " "} src={setup} alt="" />


        </>
    ); // className=" aspect-video"
}