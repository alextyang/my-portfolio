import { LegacyRef, ReactNode } from "react";
import { Project } from "../(lib)/schema";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ProjectHeaderCentered, ProjectHeaderInline, SplashImage } from "./projectHeader";
import { projectOrder } from "../(lib)/links";
import Balancer, { Provider } from 'react-wrap-balancer'


// COMPONENT: Template page generated based on projectInfo
export function ProjectPage({ projectInfo, CaseStudy: ProjectStory, maxWidth = "7xl" }: { projectInfo: Project, CaseStudy: (props: any) => ReactNode, maxWidth?: string }) {
    return (
        <div className="w-full mx-auto">
            <SplashImage projectInfo={projectInfo} />
            <div className="flex flex-col items-center justify-start w-full min-h-screen px-[5vw] text-left font-nhgd mx-auto">
                <div className={"flex flex-col items-center justify-start w-full min-h-screen mx-auto mb-12 max-w-" + maxWidth}>
                    <head>
                        <title>{projectInfo.title + ' - Alex Yang'}</title>
                    </head>
                    {projectInfo.splashImage ?
                        <ProjectHeaderCentered projectInfo={projectInfo} /> :
                        <ProjectHeaderInline projectInfo={projectInfo} />}

                    <Provider>
                        <ProjectStory />
                    </Provider>

                    <ProjectFooter projectInfo={projectInfo} />
                </div>
            </div>
        </div>
    );
}

// COMPONENT: Rounded image for use in project body
export function CaseImage({ className = "mb-[3.5%]", src, alt, priority = false, bgSrc }: { className?: string, src: string | StaticImport, alt: string, priority?: boolean, bgSrc?: string | StaticImport }) {
    return (
        <div className={"rounded-[1.25vw] overflow-hidden mx-auto relative " + className + (bgSrc ? ' !overflow-visible' : '')} title={alt}>
            {bgSrc ? (
                <div className="absolute -top-4 -bottom-4 w-[100vw] left-1/2 right-1/2 -mr-[50vw] -ml-[50vw] -z-10">
                    <Image src={bgSrc} alt={''} priority={priority} fill={true} className=" object-cover" sizes="100vw" placeholder="blur" />
                </div>
            ) : ''}
            <Image src={src} alt={alt} priority={priority} placeholder="blur" />
        </div>
    );
}

// COMPONENT: Feature video with paired text for UI prototypes 
export function CasePrototype({ className = "", src, alt, title, subtitle, children }: { className?: string, src: string, alt: string, title: string, subtitle?: string, children: React.ReactNode }) {
    return (

        <div className={" flex flex-col w-auto items-center gap-12 mx-auto " + className}>
            <CaseVideo className=" w-[50vw] max-w-72 mx-auto " src={src as string} ></CaseVideo>
            <div className="w-full flex flex-col -mt-9 ">
                <H1 className="-mb-2 !font-semibold !tracking-normal">{title}</H1>
                {children}
            </div>

        </div>

    );
}

// COMPONENT: Background image that fills its container
export function CaseBg({ className = "top-0 bottom-0", src, priority = false }: { className?: string, src: string | StaticImport, priority?: boolean }) {
    return (

        <div className={"absolute w-[100vw] left-1/2 right-1/2 -mr-[50vw] -ml-[50vw] -z-10 " + className}>
            <Image src={src} alt={''} priority={priority} fill={true} placeholder="blur" className=" object-cover" sizes="100vw" />
        </div>

    );
}

// COMPONENT: Internal video embed for use in project body
export function CaseVideo({ className = "mb-[3.5%]", src, videoClassName }: { className?: string, src: string, videoClassName?: string }) {
    return (
        <div className={"rounded-[1.25vw] overflow-hidden " + className}>
            <video autoPlay loop disablePictureInPicture playsInline muted preload={'auto'} poster={src.substring(0, src.length - '.mp4'.length) + ".png"} className={videoClassName} >
                <source src={src} type="video/mp4" />
                {/* <Image src={src.substring(0, src.length - 3) + 'png'} fill alt="" /> */}
            </video>
        </div>
    );
}

// COMPONENT: Internal video embed for use in project body
export function CaseVideoOptional({ className = "mb-[3.5%]", src, videoClassName }: { className?: string, src: string, videoClassName?: string, preload?: string }) {
    return (
        <div className={"rounded-[1.25vw] overflow-hidden " + className}>
            <video loop controls preload={'none'} poster={src.substring(0, src.length - '.mp4'.length) + ".png"} className={videoClassName} >
                <source src={src} type="video/mp4" />
                {/* <Image src={src.substring(0, src.length - 3) + 'png'} fill alt="" /> */}
            </video>
        </div>
    );
}

// COMPONENT: Two image comparison
export function CaseSplit({ className = "", divClassName = "", src1, alt1, src2, alt2, priority = false }: { className?: string, divClassName?: string, src1: string | StaticImport, alt1: string, src2: string | StaticImport, alt2: string, priority?: boolean }) {
    return (
        <div className={"grid grid-cols-2 mb-[4%] gap-[4%] " + divClassName}>
            <CaseImage className={className + " col-start-1 col-end-1  !mb-0"} src={src1} alt={alt1} priority={priority} />
            <CaseImage className={className + " col-span-1 col-start-2 col-end-2 !mb-0"} src={src2} alt={alt2} priority={priority} />
        </div>
    );
}

// COMPONENT: Action links at the end, back & open external project if applicable
function ProjectFooter({ projectInfo }: { projectInfo: Project }) {

    return (
        <div className="w-full rounded-[1.25vw] px-[5vw] max-w-5xl overflow-hidden py-6 text-lg tracking-wide font-semibold text-white flex flex-row justify-between">
            <ActionButton href={'/'} className="">
                <svg className="relative block w-6 h-6 -ml-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                <p className="hidden sm:inline">Back to portfolio</p>
            </ActionButton>
            {projectInfo.link ? (
                <ActionButton href={projectInfo.link} className="">
                    <p className="">Visit site</p>
                    <svg className="relative block w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M218.87-135.869q-34.483 0-58.742-24.259t-24.259-58.742v-522.26q0-34.483 24.259-58.742t58.742-24.259H480v83.001H218.87v522.26h522.26V-480h83.001v261.13q0 34.483-24.259 58.742t-58.742 24.259H218.87ZM394.413-336 336-394.413 682.717-741.13H576v-83.001h248.131V-576H741.13v-106.717L394.413-336Z" /></svg>
                </ActionButton>
            ) : ''}
        </div>
    );
}

// COMPONENT: CTA button for external links
export function ActionButton({
    children, href, className
}: {
    children: React.ReactNode;
    href: string;
    className: string;
}) {
    return (
        <Link href={href} className={"rounded-[8px] font-bold border-[3px] border-white flex flex-row justify-center items-center py-3.5 px-3.5 sm:px-7 gap-1.5 text-white text-base sm:text-lg " + className}>
            {children}
        </Link>
    );
}

// COMPONENT: Tool-use description card
export function CaseTool({
    logoName, className = "max-w-72", desc
}: {
    logoName: string;
    desc: string;
    className?: string;
}) {
    return (
        <div className={"rounded-[12px] border-[3px] border-white text-white px-7 pt-7 pb-3.5 " + className}>
            <div className="relative aspect-square mx-auto h-24">
                <Image src={'/logos/' + logoName + ".png"} alt={logoName + " Logo"} width={250} height={250} />
            </div>
            <p><b>{logoName}</b></p>
            <div className="-mx-1.5">
                <p className="!mt-0 inline-block !text-sm">{desc}</p>
            </div>
        </div>
    );
}

// COMPONENT: Tool-use description
export function CaseTools({
    children, className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={"flex flex-col lg:flex-row gap-12 w-auto mx-auto " + className}>
            {children}
        </div>
    );
}

// COMPONENT: Text node with wrap balancer
export function H1({
    children, className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h1 className={" " + className}>
            <Balancer>
                {children}
            </Balancer>
        </h1>
    );
}

// COMPONENT: Text node with wrap balancer
export function H2({
    children, className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h2 className={" " + className}>
            <Balancer>
                {children}
            </Balancer>
        </h2>
    );
}

// COMPONENT: Text node with wrap balancer
export function H3({
    children, className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h3 className={" " + className}>
            <Balancer>
                {children}
            </Balancer>
        </h3>
    );
}

// COMPONENT: Text node with wrap balancer
export function P({
    children, className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={" " + className}>
            <Balancer>
                {children}
            </Balancer>
        </p>
    );
}