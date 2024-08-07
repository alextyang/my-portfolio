import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/(lib)/schema";

import { projectInfo as AB } from "../(projects)/accountable-brands/project";
import { projectInfo as SR } from "../(projects)/sunrise/project";
import { projectInfo as AM } from "../(projects)/animal-worlds/project";
import { projectInfo as NA } from "../(projects)/name-the-age/project";
import { projectInfo as RF } from "../(projects)/refashion/project";
import { projectInfo as AL } from "../(projects)/active-listener/project";
import Balancer from "react-wrap-balancer";

const featuredProjects: Project[] = [AB, AL];
const otherProjects: Project[] = [SR, AM, RF];


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start w-full min-h-[90vh] px-[5vw] pt-10 text-left font-nhgd">
      <div className="flex flex-col items-center justify-start max-w-5xl min-h-[90vh] gap-10">
        <p className="w-full text-3xl xs:text-4xl md:text-5xl !leading-tight tracking-wider font-base">
          <span className="opacity-100">Hi!</span>
          <span className="opacity-100"> My name is Alex.</span>
          <span className="opacity-70"> I design, code, and study creative digital experiences. </span>
        </p>

        {/* TODO: Kaleidoscope background? https://editor.p5js.org/p5/sketches/Interaction:_kaleidoscope */}

        <div className="flex flex-col justify-between w-full mt-[6vh] mb-12  h-min md:mt-auto md:flex-row md:flex-wrap">
          {featuredProjects.map(proj => {
            return (
              <ProjectItem key={proj.title} proj={proj} className={"home-item relative md:w-[48%] mb-[6%] md:mb-[4.25%] aspect-3/2 hover:scale-[1.025] transition-all cursor-pointer"} imageClass={"rounded-[5%]"} titleClass={"text-xl sm:text-xl md:text-xl cursor-pointer"} />
            );
          })}
          {otherProjects.map(proj => {
            return (
              <ProjectItem key={proj.title} proj={proj} className={"home-item relative md:w-[30.66%] mb-[6%] md:mb-[4.25%] aspect-3/2 hover:scale-[1.1] transition-all cursor-pointer"} imageClass={"rounded-[7.5%]"} titleClass={"z-20 text-xl md:hidden lg:inline md:line-clamp-1 lg:text-lg xl:text-xl cursor-pointer"} />
            );
          })}
        </div>
      </div>
    </main>
  );
}

// COMPONENT: Rounded splash image of a project, with hover-menu for details
function ProjectItem({ proj, className, imageClass, titleClass }: { proj: Project, className: string, imageClass: string, titleClass: string }) {
  return (
    <Link key={proj.title} href={proj.href} target={proj.href.includes('https') ? '_blank' : '_self'} className={className}>
      <div key={proj.subtitle} className="absolute top-0 w-full transition-all item-info h-9 -z-10 drop-shadow-lg">
        <div className="w-[94%] mx-auto mt-1 bg-white h-9 rounded-[12px] transition-all flex flex-nowrap justify-between gap-2 px-12 py-1 items-center font-semibold text-sm relative">
          {proj.icons.length > 0 ? (
            <div className="rounded-[8px] px-1.5 py-1 bg-black flex items-center absolute left-1.5 top-1 h-7 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white"><path d={proj.icons[0]} /></svg>
            </div>
          ) : ''}
          <p className={"text-black z-10 left-0 right-0 text-center line-clamp-1 w-full " + titleClass}>
            {proj.title}
          </p>
          <div className="rounded-[8px] px-1 bg-black flex justify-center items-center absolute right-1.5 top-1 w-8 h-7 gap-1">
            {proj.link ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white"><path d="M222.783-124.782q-41.005 0-69.503-28.498-28.498-28.498-28.498-69.503v-514.434q0-41.005 28.498-69.503 28.498-28.498 69.503-28.498H480v98.001H222.783v514.434h514.434V-480h98.001v257.217q0 41.005-28.498 69.503-28.498 28.498-69.503 28.498H222.783ZM404.523-336 336-404.523l332.694-332.694H576v-98.001h259.218V-576h-98.001v-92.694L404.523-336Z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white"><path d="M598.911-430.999H172.782v-98.002h426.129L410.347-717.565 480-787.218 787.218-480 480-172.782l-69.653-69.653 188.564-188.564Z" /></svg>
            )}
          </div>
        </div>
      </div>
      <Image key={proj.title + 'img'} className={"object-cover overflow-hidden " + imageClass} src={proj.coverImage} alt={proj.title} fill={true} />
    </Link>
  );
}