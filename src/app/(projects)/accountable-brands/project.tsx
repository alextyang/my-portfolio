import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseSplit, CaseVideo } from "../projectComponents";

import cover from "./src/cover.svg";

export const projectInfo: Project = {
    path: 'accountable-brands',
    coverImage: cover,
    title: 'Accountable Brands',
    subtitle: 'A crowd-sourced accountability platform.',
    link: 'https://accountablebrand.org/',
    tags: ['UI/UX', 'Frontend + Backend'],
    tools: ['Figma', 'Google Cloud'],
    languages: ['TypeScript'],
    resources: ['React + Next.js', 'Tailwind CSS'],
};

import brand from "./src/brand.png";
import mw_brand from "./src/mw_brand.png";
import report from "./src/report.png";
import mw_report from "./src/mw_report.png";
const brand_vid = "/" + projectInfo.path + "/brand.mp4";
const search_vid = "/" + projectInfo.path + "/search.mp4";
const className = '';

export function CaseStudy() {
    return (
        <>
            <CaseVideo className={className} src={search_vid} />
            <CaseVideo className={className} src={brand_vid} />
            <CaseSplit className={className + " bg-[#d8c1ac]"} src1={brand} alt1="" src2={mw_brand} alt2="" priority={true} />
            <CaseSplit className={className + " bg-[#83746a]"} src1={report} alt1="" src2={mw_report} alt2="" priority={true} />

        </>
    );
}