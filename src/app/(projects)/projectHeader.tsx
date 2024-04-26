import Link from "next/link";
import { Project } from "../(lib)/schema";
import { SiteHeader } from "../siteComponents";


// COMPONENT: Project title/details for projects without a hero screen
export function ProjectHeaderInline({ projectInfo }: { projectInfo: Project }) {
    return (
        <div className="w-full tracking-wide text-left mb-14">
            <div className="flex flex-row flex-wrap-reverse  pt-10 pb-1.5 gap-y-2.5">
                <ProjectHeaderTitle projectInfo={projectInfo} />
                <ProjectHeaderTags projectInfo={projectInfo} />
            </div>
            <ProjectHeaderSubtitle projectInfo={projectInfo} />
            <ProjectHeaderTools projectInfo={projectInfo} />

        </div>
    );
}

// COMPONENT: Project title/details for projects with a hero screen
export function ProjectHeaderCentered({ projectInfo }: { projectInfo: Project }) {
    return (
        <div></div>
    );
}



// COMPONENT: Name of project
function ProjectHeaderTitle({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    return (
        <h1 className={"text-5xl font-medium inline-block mr-3.5 " + className}>{projectInfo.title}</h1>
    );
}

// COMPONENT: List of disciplinary tags
function ProjectHeaderTags({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    return (projectInfo.tags.length > 0 ? (
        <div className={"whitespace-nowrap h-min  bg-white opacity-90 relative bottom-0.5 rounded-md inline mt-2.5 px-1.5 " + className}>
            <div className="relative inline top-[1px] text-xl font-semibold tracking-tight text-black">
                {projectInfo.tags.map((tag, index) => {

                    let comma = undefined;
                    if (index != 0)
                        comma = (<p className="inline mr-0.5">, </p>);

                    return (
                        <div key={tag} className="inline">
                            {comma}
                            <p className="inline">{tag}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    ) : '');
}

// COMPONENT: One line description of project
function ProjectHeaderSubtitle({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    return (
        <p className={"block ml-0.5 first:hidden text-3xl font-light tracking-wider " + className}>{projectInfo.subtitle}</p>
    );
}

// DATA: Types of tools, mapped to icons
const toolIcons = {
    tools: {
        path: "M360-640h240v-80H360v80ZM80-160v-200h160v40h80v-40h320v40h80v-40h160v200H80Zm0-240v-160q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v160H720v-80h-80v80H320v-80h-80v80H80Z",
        className: "inline ml-0.5 mr-[1px] top-[0.5px] relative fill-white w-7 h-7"
    },
    languages: {
        path: "M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z",
        className: "relative inline w-7 h-7 top-[1.5px] fill-white"
    },
    resources: {
        path: "M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm20-280h80v-440h-80v440Zm-20 200h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z",
        className: "relative inline w-6 h-6 top-[1px] fill-white"
    }
};

// COMPONENT: List of tools used
function ProjectHeaderTools({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    return (
        <div className={"mt-3.5 text-xl font-medium tracking-wider flex flex-row flex-wrap gap-y-2.5 gap-x-8 " + className}>
            <ProjectHeaderToolCategory tools={projectInfo.tools} icon={toolIcons.tools} />
            <ProjectHeaderToolCategory tools={projectInfo.languages} icon={toolIcons.languages} />
            <ProjectHeaderToolCategory tools={projectInfo.resources} icon={toolIcons.resources} />

        </div>
    );
}

// COMPONENT: Generates tool item with icon, based on 'toolIcons' mapping
function ProjectHeaderToolCategory({ tools, icon, className = "" }: { tools: string[], icon: { path: string, className: string }, className?: string }) {
    return (
        tools.length > 0 ? (
            <div className={"inline whitespace-nowrap " + className}>
                <svg className={icon.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d={icon.path} /></svg>
                <div className="relative inline ml-2 top-[4.5px]">
                    {tools.map((tool, index) => {

                        let comma = undefined;
                        if (index != 0)
                            comma = (<p className="inline mr-0.5">, </p>);

                        return (
                            <div className="inline" key={tool}>
                                {comma}
                                <p className="inline">{tool}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        ) : ''
    );
}