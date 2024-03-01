import Image from "next/image";
import { projectInfo, CaseStudy } from "./project";
import { ProjectPage } from "../projectComponents";

export default function Page() {
    return (
        <ProjectPage projectInfo={projectInfo} CaseStudy={CaseStudy} />
    );
}