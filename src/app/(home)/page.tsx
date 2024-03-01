import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/(lib)/schema";

import { projectInfo as AB } from "../(projects)/accountable-brands/project";
import { projectInfo as SR } from "../(projects)/sunrise/project";

const featuredProjects: Project[] = [AB, SR];


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen px-[5vw] pt-10 text-left font-nhgd">
      <div className="flex flex-col items-center justify-start max-w-5xl min-h-screen gap-10">
        <p className="w-full text-4xl sm:text-5xl !leading-tight tracking-wider font-base">Hi! My name is Alex and I&apos;m a Full-stack developer and Creative Technologist located in New York City.</p>

        <div className="flex flex-col justify-between w-full mt-10 mb-12 drop-shadow-md h-min sm:mt-auto sm:flex-row sm:flex-wrap">
          {featuredProjects.map(proj => {
            return (
              <Link key={proj.title} href={proj.path} className="relative rounded-[5%] overflow-hidden sm:w-[48%] mb-[6%] sm:mb-[4%] aspect-3/2">
                <Image className="object-cover" src={proj.coverImage} alt={proj.title} fill={true} />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
