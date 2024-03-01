import { Project } from "@/app/(lib)/schema";
import { CaseImage } from "../projectComponents";

import cover from "./src/cover.svg";
import splash from "./src/splash.png";
import explainer from "./src/explainer.png";
import search from "./src/search.png";
import brand from "./src/brand.png";

export const projectInfo: Project = {
    path: 'accountable-brands',
    coverImage: cover,
    title: 'Accountable Brands',
    subtitle: 'A crowd-sourced accountability platform.',
    link: 'https://accountablebrands.org/',
    tags: ['UI/UX', 'Frontend + Backend'],
    tools: ['Figma', 'Google Cloud'],
    languages: ['TypeScript'],
    resources: ['React + Next.js', 'Tailwind CSS'],
};

const className = '';

export function CaseStudy() {
    return (
        <>
            <CaseImage className={className} src={splash} alt="" priority={true} />
            <CaseImage className={className} src={explainer} alt="" priority={true} />
            <CaseImage className={className} src={search} alt="" priority={true} />
            <CaseImage className={className} src={brand} alt="" priority={true} />

        </>
    );
}