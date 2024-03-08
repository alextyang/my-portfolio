import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseVideo } from "../projectComponents";

import cover from "./src/cover.svg";
export const projectInfo: Project = {
    path: 'sunrise',
    coverImage: cover,
    title: 'Sunrise',
    subtitle: 'Re-thinking the smart home automation experience.',
    tags: ['UX/UI'],
    tools: ['Figma', 'Illustrator'],
    languages: [],
    resources: [],
};

import competition from "./src/competitive.svg";
import case1 from "./src/1-case.svg";
import case2 from "./src/2-case.svg";
import case3 from "./src/3-case.svg";
import case4 from "./src/4-case.svg";
import case5 from "./src/5-case.svg";
const proto_vid = "/" + projectInfo.path + "/prototype.mp4";

const className = '';

export function CaseStudy() {
    return (
        <>
            <CaseImage className={className} src={competition} alt="" priority={true} />
            <CaseVideo className={className} src={proto_vid} />
            <CaseImage className={className} src={case1} alt="" priority={true} />
            <CaseImage className={className} src={case2} alt="" />
            <CaseImage className={className} src={case3} alt="" />
            <CaseImage className={className} src={case4} alt="" />
            <CaseImage className={className} src={case5} alt="" />
        </>
    );
}