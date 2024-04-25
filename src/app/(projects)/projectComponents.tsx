import { LegacyRef, ReactNode } from "react";
import { Project } from "../(lib)/schema";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ProjectHeaderInline } from "./projectHeader";
import { projectOrder } from "../(home)/page";



export function ProjectPage({ projectInfo, CaseStudy, maxWidth = "7xl" }: { projectInfo: Project, CaseStudy: (props: any) => ReactNode, maxWidth?: string }) {
    return (
        <div className="flex flex-col items-center justify-start w-full min-h-screen px-[5vw] text-left font-nhgd">
            <div className={"flex flex-col items-center justify-start w-full min-h-screen mb-12 max-w-" + maxWidth}>
                <ProjectHeaderInline projectInfo={projectInfo} />
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
        <div className="w-full rounded-[1.25vw] px-[5vw] max-w-5xl overflow-hidden py-6 text-lg tracking-wide font-semibold text-white flex flex-row justify-between">
            <Button href={'/'} className="">
                <svg className="relative block w-6 h-6 -ml-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                <p className="hidden sm:inline">Back to portfolio</p>
            </Button>
            {projectInfo.link ? (
                <Button href={projectInfo.link} className="">
                    <p className="">Visit site</p>
                    <svg className="relative block w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M218.87-135.869q-34.483 0-58.742-24.259t-24.259-58.742v-522.26q0-34.483 24.259-58.742t58.742-24.259H480v83.001H218.87v522.26h522.26V-480h83.001v261.13q0 34.483-24.259 58.742t-58.742 24.259H218.87ZM394.413-336 336-394.413 682.717-741.13H576v-83.001h248.131V-576H741.13v-106.717L394.413-336Z" /></svg>
                </Button>
            ) : ''}
        </div>
    );
}

export function Button({
    children, href, className
}: {
    children: React.ReactNode;
    href: string;
    className: string;
}) {
    return (
        <Link href={href} className={"rounded-[8px] font-bold border-[3px] border-white flex flex-row justify-center items-center py-3.5 px-3.5 sm:px-7 gap-1.5 float-right  text-white text-base sm:text-lg " + className}>
            {children}
        </Link>
    );
}

