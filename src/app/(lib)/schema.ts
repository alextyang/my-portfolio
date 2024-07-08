import { StaticImageData } from "next/image";

// Schema for each project's header section & hover-able details
export type Project = {
    path: string,
    href: string,
    coverImage: string | StaticImageData,
    splashImage?: string | StaticImageData,
    isSplashImageLight?: boolean,
    title: string,
    subtitle: string,
    link?: string,
    tags: string[],
    tools: string[],
    languages: string[],
    resources: string[],
    integrations?: string[],
    icons: string[],
};