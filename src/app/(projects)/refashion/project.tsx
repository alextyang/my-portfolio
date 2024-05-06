import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseSplit, CaseVideo } from "../projectComponents";

import cover from "./csrc/cover.png";
import { CaseVideoStream } from "../videoUtils";

// DATA: Header & hover-able details
export const projectInfo: Project = {
    path: 'refashion',
    href: 'refashion',
    coverImage: cover,
    title: 'Re:Fashion Show',
    subtitle: 'Live visual design for a climate-forward fashion show.',
    tags: ['Motion Design'],
    tools: ['After Effects', 'TouchDesigner', 'Illustrator'],
    languages: [],
    resources: [],
    icons: ["M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z"]
};


// MEDIA: Videos
const runway_vid = "https://www.youtube.com/watch?v=o5ODAwrdfQs";
const logo_vid = "/" + projectInfo.path + "/logo.mp4";
const title_vid = "/" + projectInfo.path + "/title.mp4";

// MEDIA: Images
import event1 from "./csrc/event1.jpg";
import event2 from "./csrc/event2.jpg";
import event3 from "./csrc/event3.jpg";
import event4 from "./csrc/event4.jpg";
import event5 from "./csrc/event5.jpg";

import slide1 from "./csrc/slide1.png";
import slide2 from "./csrc/slide2.png";

// VAR: Common styles
const className = '';

// COMPONENT: Body content / project story
export function ProjectStory() {
    return (
        <>
            <CaseVideoStream className={className + " min-h-[100vh] min-w-[100vw] aspect-video fixed top-0 left-[50%] pt-[56.25%] -translate-x-1/2 -z-20 "} videoClassName=" object-fit-cover pointer-events-none" src={runway_vid} />
            <CaseVideo className={className + " -mt-[7%] mix-blend-exclusion !drop-shadow-none"} src={title_vid} />
            <CaseVideo className={className + " !mb-[21%] mt-[3%]  mix-blend-exclusion !drop-shadow-none"} src={logo_vid} />
            <CaseSplit className={className + " h-[]"} divClassName={""} src1={slide1} src2={slide2} alt1="" alt2="" />
            <CaseSplit className={className + " "} divClassName={""} src1={event3} src2={event1} alt1="" alt2="" />
            <CaseSplit className={className + " -mt-[0%] "} divClassName={""} src1={event2} src2={event5} alt1="" alt2="" />

        </>
    );
}