import { LegacyRef, ReactNode } from "react";
import { Project } from "../(lib)/schema";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";



export function ProjectPage({ projectInfo, CaseStudy, maxWidth = "7xl" }: { projectInfo: Project, CaseStudy: (props: any) => ReactNode, maxWidth?: string }) {
    return (
        <div className="flex flex-col items-center justify-start w-full min-h-screen px-[5vw] pt-10 text-left font-nhgd">
            <div className={"flex flex-col items-center justify-start w-full min-h-screen mb-12 max-w-" + maxWidth}>
                <ProjectHeader projectInfo={projectInfo} />
                <CaseStudy />
                <ProjectFooter projectInfo={projectInfo} />
            </div>
        </div>
    );
}

export function CaseImage({ className = "", src, alt, priority = false }: { className?: string, src: string | StaticImport, alt: string, priority?: boolean }) {
    return (
        <div className={className + " rounded-[1.25vw] overflow-hidden mb-[3.5%] drop-shadow-md"}>
            <Image src={src} alt={alt} />
        </div>
    );
}

export function CaseVideo({ className = "", src, videoClassName }: { className?: string, src: string, videoClassName?: string }) {
    return (
        <div className={className + " rounded-[1.25vw] overflow-hidden mb-[3.5%] drop-shadow-md"}>
            <video autoPlay loop disablePictureInPicture playsInline muted preload="auto" poster={src.substring(0, src.length - '.mp4'.length) + ".png"} className={videoClassName} >
                <source src={src} type="video/mp4" />
                {/* <Image src={src.substring(0, src.length - 3) + 'png'} fill alt="" /> */}
            </video>
        </div>
    );
}

export function CaseSplit({ className = "", divClassName = "", src1, alt1, src2, alt2, priority = false }: { className?: string, divClassName?: string, src1: string | StaticImport, alt1: string, src2: string | StaticImport, alt2: string, priority?: boolean }) {
    return (
        <div className={"grid grid-cols-2 mb-[4%] gap-[4%] " + divClassName}>
            <CaseImage className={className + " col-start-1 col-end-1  !mb-0"} src={src1} alt={alt1} priority={priority} />
            <CaseImage className={className + " col-span-1 col-start-2 col-end-2 !mb-0"} src={src2} alt={alt2} priority={priority} />
        </div>
    );
}

export function ProjectFooter({ projectInfo }: { projectInfo: Project }) {
    return (
        <div className="w-full rounded-[1.25vw] overflow-hidden bg-zinc-900 p-6 text-lg tracking-wide font-semibold text-zinc-100 drop-shadow-md">
            <Link href={'/'} className="rounded-[8px] border-[3px] w-56 border-white flex flex-row justify-center items-center p-3.5 gap-2 float-left  text-white">
                <svg className="relative block w-6 h-6 -ml-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                <p className="hidden sm:inline">Back to portfolio</p>
            </Link>
            {projectInfo.link ? (
                <Link href={projectInfo.link} className="rounded-[8px] font-bold border-[3px] border-white flex flex-row justify-center items-center w-[152px] p-3.5 gap-1.5 float-right  text-white ">
                    <p className="">Visit site</p>
                    <svg className="relative block w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M218.87-135.869q-34.483 0-58.742-24.259t-24.259-58.742v-522.26q0-34.483 24.259-58.742t58.742-24.259H480v83.001H218.87v522.26h522.26V-480h83.001v261.13q0 34.483-24.259 58.742t-58.742 24.259H218.87ZM394.413-336 336-394.413 682.717-741.13H576v-83.001h248.131V-576H741.13v-106.717L394.413-336Z" /></svg>
                </Link>
            ) : ''}
        </div>
    );
}

export function ProjectHeader({ projectInfo }: { projectInfo: Project }) {
    return (
        <div className="w-full tracking-wide text-left mb-14">
            <Link href={'/'} className="inline mr-3.5 text-2xl font-medium ">Alex Yang</Link>
            <Link href={'/'} className="inline text-2xl font-medium text-left opacity-60">Full-Stack <span className="hidden sm:inline">Developer</span> & Creative Technologist<br /></Link>

            <div className="flex flex-row flex-wrap-reverse  pt-10 pb-1.5 gap-y-2.5">
                <h1 className="inline-block mr-3.5 text-5xl font-medium">{projectInfo.title}</h1>

                {projectInfo.tags.length > 0 ? (
                    <div className="inline whitespace-nowrap  mt-2.5 px-1.5 h-min  bg-white opacity-90 relative bottom-0.5 rounded-md">
                        {/* <svg className="inline ml-3 mr-0.5 -top-[5px] relative fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg> */}
                        <div className="relative inline top-[1px] text-xl font-semibold tracking-tight text-black">
                            {projectInfo.tags.map(tag => {
                                return (
                                    <>
                                        <p className="inline mr-0.5 first:hidden">, </p>
                                        <p className="inline">{tag}</p>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                ) : ''}
            </div>


            <p className="block ml-0.5 first:hidden text-3xl font-light tracking-wider">{projectInfo.subtitle}</p>
            <div className="mt-3.5 text-xl font-medium tracking-wider">
                {projectInfo.tools.length > 0 ? (
                    <>
                        <svg className="inline ml-0.5 mr-[1px] top-[0.5px] relative fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-640h240v-80H360v80ZM80-160v-200h160v40h80v-40h320v40h80v-40h160v200H80Zm0-240v-160q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v160H720v-80h-80v80H320v-80h-80v80H80Z" /></svg>
                        <div className="relative inline ml-2 top-[4.5px]">
                            {projectInfo.tools.map(tool => {
                                return (
                                    <>
                                        <p className="inline mr-0.5 first:hidden">, </p>
                                        <p className="inline">{tool}</p>
                                    </>
                                );
                            })}
                        </div>
                    </>
                ) : ''}
                {projectInfo.languages.length > 0 ? (
                    <>
                        <svg className="relative inline w-7 h-7 top-[1.5px] ml-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" /></svg>
                        <div className="relative inline ml-2 top-[4.5px]">
                            {projectInfo.languages.map(language => {
                                return (
                                    <>
                                        <p className="inline mr-0.5 first:hidden">, </p>
                                        <p className="inline">{language}</p>
                                    </>
                                );
                            })}
                        </div>
                    </>
                ) : ''}
                {projectInfo.resources.length > 0 ? (
                    <>
                        <svg className="relative inline w-6 h-6 top-[1px] ml-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm20-280h80v-440h-80v440Zm-20 200h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" /></svg>
                        <div className="relative inline ml-2 top-[4.5px]">
                            {projectInfo.resources.map(tool => {
                                return (
                                    <>
                                        <p className="inline mr-0.5 first:hidden">, </p>
                                        <p className="inline">{tool}</p>
                                    </>
                                );
                            })}
                        </div>
                    </>
                ) : ''}
            </div>
        </div>
    );
}