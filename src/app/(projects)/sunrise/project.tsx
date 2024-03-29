import { Project } from "@/app/(lib)/schema";
import { CaseImage, CaseVideo } from "../projectComponents";

import cover from "./src/cover.svg";
export const projectInfo: Project = {
    path: 'sunrise',
    href: 'sunrise',
    coverImage: cover,
    title: 'Sunrise',
    subtitle: 'Re-thinking the smart home automation experience.',
    tags: ['UX/UI'],
    tools: ['Figma', 'Illustrator'],
    languages: [],
    resources: [],
    icons: ["m348.26-525.696 84.913-84.913-42.13-42.565-21.13 20.565Q357.782-620.478 343-621.043q-14.783-.566-26.348-12.131t-11.565-26.63q0-15.066 11.565-26.631l21.13-21.13-50.347-48.783-84.348 84.913L348.26-525.696ZM672-202.522l84.348-84.348-48.913-49.912-21.131 21.13q-11.565 11.565-26.63 11.283-15.065-.283-26.631-11.848-11.565-11.565-11.565-26.913t11.565-26.913l21.131-20.566-44.13-43.695-85.478 85.478L672-202.522ZM627.869-682.26l51.565 52.695 61.175-61.174-51-51.565-61.74 60.044ZM173.782-124.782q-20.087 0-34.544-14.456-14.456-14.457-14.456-34.544v-109.914q0-10.826 3.847-18.804 3.848-7.979 10.544-14.674L285.39-463.391 128.913-619.869Q106.695-642.087 106.695-672t22.218-52.131l106.391-106.391q22.217-22.218 52.131-22.5 29.913-.283 52.131 21.935l156.477 157.042 137.478-137.912q12.131-12.131 26.261-17.696 14.131-5.565 29.261-5.565 15.131 0 29.261 5.282 14.131 5.283 26.261 17.413l67.392 66.827q12.131 12.131 17.696 26.544 5.565 14.413 5.565 29.543 0 15.131-5.565 29.544t-17.696 26.544L673.479-497.174l157.608 157.608q22.218 22.218 22.218 52.131 0 29.914-22.218 52.131L724.696-128.913q-22.217 22.218-52.131 22.218-29.913 0-52.131-22.218L462.261-286.521 316.044-139.738q-6.696 6.695-14.674 10.826-7.979 4.13-18.805 4.13H173.782Z"],
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