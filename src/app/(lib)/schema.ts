import { StaticImageData } from "next/image";

export type Project = {
    path: string,
    href: string,
    coverImage: string | StaticImageData,
    title: string,
    subtitle: string,
    link?: string,
    tags: string[],
    tools: string[],
    languages: string[],
    resources: string[],
    icons: string[],
};