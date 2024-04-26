import { projectInfo, ProjectStory } from "./project";
import { ProjectPage } from "../projectComponents";

// PAGE: project.tsx details -> projectComponents.tsx template
export default function Page() {
    return (
        <ProjectPage projectInfo={projectInfo} CaseStudy={ProjectStory} />
    );
}