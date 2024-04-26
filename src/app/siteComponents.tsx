"use client";

import Link from "next/dist/client/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Project } from "./(lib)/schema";
import { projectOrder } from "./(lib)/links";
import { useState } from "react";
import { LINKS } from "./(lib)/links";




// HEADER

// COMPONENT: Site title and menu
export function SiteHeader({ }: {}) {
    const path = usePathname();
    const query = useSearchParams();


    const [isOpen, setIsOpen] = useState(query.get('q') == 'menu');
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const projectIndex = path ? projectOrder.indexOf(path.substring(1)) : -1;

    if (path.length <= 2)
        return ('');



    return (
        <div className="px-[5vw] pt-10 w-full font-nhgd tracking-wide">
            <div className="flex flex-row w-full font-nhgd tracking-wide">
                <div className="flex flex-col sm:flex-row gap-y-0.5">
                    <Link href={'/'} className=" mr-3.5 text-2xl font-medium ">Alex Yang</Link>
                    <Link href={'/'} className=" text-2xl font-medium text-left opacity-60 pointer-events-none sm:pointer-events-auto ">Full-Stack <span className="hidden md:inline">Developer</span> & Creative Technologist<br /></Link>
                </div>
                <MenuButton toggleMenu={toggleMenu} />
            </div>
            <SiteMenu projectIndex={projectIndex} isOpen={isOpen} className="" />
        </div>
    );
}

// COMPONENT: Toggle-able navigation menu
function SiteMenu({ projectIndex, isOpen, className }: { projectIndex: number, isOpen: boolean, className?: string }) {

    return (
        <div className={"flex flex-row flex-wrap justify-right items-center transition-all tracking-wide text-2xl font-medium gap-8 h-8 mt-2 opacity-100 w-full " + (isOpen ? '' : ' !h-0 !opacity-0 !mt-0 pointer-events-none ') + className}>
            <NavLink href={'/'}>Work</NavLink>
            <NavLink href={'/resume'}>Resume</NavLink>
            <EmailCopyButton className="h-8 opacity-60 ml-2 hidden md:flex" />
            {projectIndex != -1 ? <div className="ml-auto flex flex-row gap-4 z-20">
                <PrevProjectButton projectIndex={projectIndex} />
                <p className="mt-[2.5px] hidden md:inline-block">Projects</p>
                <NextProjectButton projectIndex={projectIndex} />
            </div> : ''}

        </div>
    );
}


// COMPONENT: Toggling menu button
function MenuButton({ toggleMenu }: { toggleMenu: () => void }) {
    return (
        <div className="ml-auto text-2xl font-medium opacity-60 cursor-pointer relative -top-[2.5px]">
            <div className="absolute -top-2 -left-8 -right-8 -bottom-2" onClick={toggleMenu}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 -960 960 960"><path fill="currentColor" d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" /></svg>
        </div>
    );
}


// FOOTER

// DATA: Map of social icons and links, for footer
const footerSocialIcons = [{
    href: LINKS.GITHUB,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="2.15rem" height="2.15rem" viewBox="-1 -1 24 24"><path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>)
}, {
    href: LINKS.LINKEDIN,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>)
}, {
    href: LINKS.SPOTIFY,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>)
}];

// COMPONENT: Footer with socials and a navigation bar
export function SiteFooter() {
    return (
        <div className="flex flex-col px-[5vw] w-full max-w-5xl -mt-3.5 mb-10 gap-6 mx-auto">

            <div className="flex flex-row w-auto flex-nowrap justify-around sm:justify-center h-12 gap-5">
                {footerSocialIcons.map((social) => {
                    return (
                        <Link key={social.href} href={social.href} className="cursor-pointer">
                            {social.icon}
                        </Link>
                    );
                })}
            </div>


            <div className="flex flex-row w-full flex-nowrap justify-around sm:justify-center h-4 gap-8 self-start text-lg mt-3 sm:text-base sm:mt-1">
                <NavLink href={'/'} className="ml-2">Work</NavLink>
                <NavLink href={'/resume'}>Resume</NavLink>
                <EmailCopyButton className="h-6 opacity-60 !flex !ml-auto" iconClassName="mt-px sm:mt-0" />
            </div>
        </div>

    );
}



// SHARED NAVIGATION

// COMPONENT: Navigation link that disappears when redundant
function NavLink({ className = '', href, children }: { className?: string, href: string, children: React.ReactNode }) {
    const path = usePathname();
    if (path == href)
        return ('');
    return (<Link href={href} className={className}>{children}</Link>)
}

// COMPONENT: A next project arrow, if there's one in projectOrder
function NextProjectButton({ className = "", projectIndex }: { className?: string, projectIndex: number }) {
    let nextProj = undefined;

    if (projectIndex != -1 && projectIndex < projectOrder.length - 1)
        nextProj = projectOrder[projectIndex + 1]

    return (nextProj ? (
        <Link href={nextProj + '?q=menu'} title="Previous Project" className={className}>
            <svg className="inline rotate-180" xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.15rem" viewBox="0 -960 960 960"><path fill="currentColor" d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
        </Link>) : '')
}

// COMPONENT: A last project arrow, if there's one in projectOrder
function PrevProjectButton({ className = "", projectIndex }: { className?: string, projectIndex: number }) {
    let prevProj = undefined;

    if (projectIndex != -1 && projectIndex >= 1)
        prevProj = projectOrder[projectIndex - 1]

    return (prevProj ? (
        <Link href={prevProj + '?q=menu'} title="Previous Project" className={className}>
            <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.15rem" viewBox="0 -960 960 960"><path fill="currentColor" d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
        </Link>) : '')
}

// COMPONENT: A navigation-like button that copies my email. Gives feedback if successful!
function EmailCopyButton({ className = "", iconClassName = "mt-[2.5px]" }: { className?: string, iconClassName?: string }) {
    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className={"cursor-pointer flex-row items-center " + className} onClick={() => {
            navigator.clipboard.writeText(LINKS.EMAIL)
            if (isSecureContext)
                setIsCopied(true);
            setTimeout(() => { setIsCopied(false); }, 1000);
        }}>
            <p>{isCopied ? 'Copied to clipboard!' : LINKS.EMAIL}</p>
            {!isCopied ? (<div className={"relative  " + iconClassName}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.4rem" viewBox="0 -960 960 960" width="1.9rem" fill='currentColor'><path d="M368.37-237.37q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h378.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v474.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H368.37Zm0-83h378.26v-474.26H368.37v474.26Zm-155 238q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-557.26h83v557.26h461.26v83H213.37Zm155-238v-474.26 474.26Z" /></svg>
            </div>) : (<div className={"relative  " + iconClassName}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.4rem" viewBox="0 -960 960 960" width="1.9rem" fill='currentColor'><path d="M368.37-237.37q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h378.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v474.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H368.37Zm-155 155q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-557.26h83v557.26h461.26v83H213.37Z" /></svg>
            </div>)}
        </div>
    );
}