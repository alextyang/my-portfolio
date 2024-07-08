import Link from "next/link";
import { Project } from "../(lib)/schema";
import Image from "next/image";


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
        <div className="flex flex-col items-center w-auto max-w-3xl px-12 pb-6 mx-auto mb-24 -mt-32 tracking-wide text-center bg-black md:-mt-32 rounded-2xl bg-opacity-60 backdrop-blur-lg xl:scale-125 ">
            {/* <svg className="fixed -mt-24 -rotate-90 bottom-12" xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.15rem" viewBox="0 -960 960 960"><path fill="currentColor" d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg> */}
            <ProjectHeaderTags projectInfo={projectInfo} className="-mt-2" />
            <ProjectHeaderTitle projectInfo={projectInfo} className="mt-4 !font-semibold !tracking-normal" />
            <ProjectHeaderSubtitle projectInfo={projectInfo} className="mt-2" />
            <ProjectHeaderTools projectInfo={projectInfo} className="justify-center mt-4 " />
        </div>
    );
}


// COMPONENT: Background image / hero
export function SplashImage({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    if (!projectInfo.splashImage)
        return '';

    return (
        <div className={" min-h-[33vh] " + className}>
            <Image alt="" src={projectInfo.splashImage} priority className="absolute top-0 left-0 right-0 -z-50" placeholder="blur" sizes="100vw"></Image>
            <Image alt="" src={projectInfo.splashImage} className="relative w-full -mb-8 opacity-0" placeholder="blur" ></Image>
        </div>
    );
}


// COMPONENT: Name of project
function ProjectHeaderTitle({ projectInfo, className = "mr-3.5" }: { projectInfo: Project, className?: string }) {
    return (
        <h1 className={"text-5xl font-medium inline-block  " + className}>{projectInfo.title}</h1>
    );
}

// COMPONENT: List of disciplinary tags
function ProjectHeaderTags({ projectInfo, className = "mt-2.5" }: { projectInfo: Project, className?: string }) {
    return (projectInfo.tags.length > 0 ? (
        <div className={"whitespace-nowrap h-min  bg-white opacity-90 relative bottom-0.5 rounded-md inline  px-1.5 " + className}>
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
    },
    integrations: {
        path: "M480-392.35 392.35-480 480-567.65 567.65-480 480-392.35Zm-85-248.63L289.98-746 480-936.02 670.02-746 565-640.98l-85-85-85 85Zm-181 351L23.98-480 214-670.02 319.02-565l-85 85 85 85L214-289.98Zm532 0L640.98-395l85-85-85-85L746-670.02 936.02-480 746-289.98Zm-266 266L289.98-214 395-319.02l85 85 85-85L670.02-214 480-23.98Z",
        className: "relative inline w-7 h-7 top-[1.5px] fill-white"
    }
};


// COMPONENT: List of tools used
function ProjectHeaderTools({ projectInfo, className = "" }: { projectInfo: Project, className?: string }) {
    return (
        <div className={"mt-3.5 text-xl font-medium tracking-wider flex flex-row flex-wrap gap-y-2.5 gap-x-8 " + className}>
            <ProjectHeaderToolCategory tools={projectInfo.tools} icon={toolIcons.tools} />
            <ProjectHeaderToolCategory tools={projectInfo.languages} icon={toolIcons.languages} />
            <ProjectHeaderToolCategory tools={projectInfo.resources} icon={toolIcons.resources} />
            <ProjectHeaderToolCategory tools={projectInfo.integrations} icon={toolIcons.integrations} />

        </div>
    );
}

// COMPONENT: Generates tool item with icon, based on 'toolIcons' mapping
function ProjectHeaderToolCategory({ tools, icon, className = "" }: { tools?: string[], icon: { path: string, className: string }, className?: string }) {
    if (!tools) return;
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