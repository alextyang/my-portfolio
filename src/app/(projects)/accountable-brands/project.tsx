import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseSplit, CaseVideo } from "../projectComponents";

import cover from "./csrc/cover.svg";

// DATA: Header & hover-able details
export const projectInfo: Project = {
    path: 'accountable-brands',
    href: 'accountable-brands',
    coverImage: cover,
    title: 'Accountable Brands',
    subtitle: 'A crowd-sourced accountability platform.',
    link: 'https://accountablebrand.org/',
    tags: ['UI/UX', 'Frontend + Backend'],
    tools: ['Figma', 'Google Cloud'],
    languages: ['TypeScript'],
    resources: ['React + Next.js', 'Tailwind CSS'],
    icons: ["M635.74-172.782q-20.585 0-34.51-14.246-13.925-14.246-13.925-34.683 0-20.436 13.925-34.471 13.925-14.036 34.51-14.036h10.694q18.126 0 30.737-12.625 12.611-12.625 12.611-31.288v-55.043q0-41.859 27.783-72.06T787.478-477v-4q-42.13-8.565-69.913-38.266-27.783-29.701-27.783-71.56v-55.608q0-18.126-12.611-30.737-12.611-12.611-30.737-12.611H635.74q-20.585 0-34.51-14.246-13.925-14.247-13.925-34.683 0-20.437 13.925-34.472t34.51-14.035h29.347q50.888 0 86.51 36.022 35.621 36.022 35.621 86.674v55.043q0 20.363 16.776 32.138 16.775 11.775 39.638 11.775 16.137 0 27.862 12.725 11.724 12.725 11.724 29.362v86.958q0 16.637-11.525 29.362-11.524 12.725-28.561 12.725-22.363 0-39.138 11.761-16.776 11.761-16.776 31.587v55.608q0 50.652-35.621 86.674-35.622 36.022-86.51 36.022H635.74Zm-340.827 0q-50.888 0-86.51-36.022-35.621-36.022-35.621-86.674v-55.608q0-19.826-16.761-31.587t-39.088-11.761q-16.377 0-28.264-11.687-11.887-11.688-11.887-28.965v-89.828q0-17.277 11.687-28.965 11.687-11.687 28.964-11.687 21.827 0 38.588-11.775t16.761-32.138v-55.043q0-50.652 35.621-86.674 35.622-36.022 86.51-36.022h28.781q20.585 0 34.511 14.246 13.925 14.246 13.925 34.683 0 20.436-13.925 34.471-13.926 14.036-34.511 14.036h-9.563q-18.663 0-31.288 12.611t-12.625 30.737v55.608q0 42.95-27.811 73.226-27.811 30.275-69.32 35.6v4.415q42.509 4.099 69.82 34.69 27.311 30.591 27.311 73.721v55.043q0 18.663 12.625 31.288t31.288 12.625h9.563q20.585 0 34.511 14.246 13.925 14.247 13.925 34.683 0 20.437-13.925 34.472-13.926 14.035-34.511 14.035h-28.781Z"]
};

// MEDIA
import tech from "./csrc/techsplain.svg";
const tour_vid = "/" + projectInfo.path + "/tour.mp4";
const className = '';

// COMPONENT: Body content / project story
export function ProjectStory() {
    return (
        <>
            <CaseVideo className={className} src={tour_vid} />
            <CaseImage className={className} src={tech} alt="" />
        </>
    );
}