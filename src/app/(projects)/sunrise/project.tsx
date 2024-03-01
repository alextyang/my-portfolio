import { Project } from "@/app/(lib)/schema";
import { CaseImage } from "../projectComponents";

import cover from "./src/cover.svg";
import case1 from "./src/1-case.svg";
import case2 from "./src/2-case.svg";
import case3 from "./src/3-case.svg";
import case4 from "./src/4-case.svg";
import case5 from "./src/5-case.svg";

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

const className = '';

export function CaseStudy() {
    return (
        <>
            <CaseImage className={className} src={case1} alt="" priority={true} />
            <CaseImage className={className} src={case2} alt="" />
            <CaseImage className={className} src={case3} alt="" />
            <CaseImage className={className} src={case4} alt="" />
            <CaseImage className={className} src={case5} alt="" />
        </>
    );
}