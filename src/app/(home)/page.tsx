import Image from "next/image";

import { projectInfo as AB } from "../(projects)/accountable-brands/page";
import { projectInfo as SR } from "../(projects)/sunrise/page";

export const featuredProjects: Project[] = [AB, SR];


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen px-[6vw] py-10 text-left font-nhgd">
      <div className="flex flex-col items-center justify-start max-w-5xl min-h-screen gap-10">
        <p className="w-full text-5xl leading-tight tracking-wider font-base">Hi! My name is Alex and I&apos;m a Full-stack developer and Creative Technologist located in New York City.</p>

        <div className="flex flex-col w-full h-min mt-auto mb-12 justify-between sm:flex-row sm:flex-wrap ">
          {featuredProjects.map(proj => {
            return (
              <div key={proj.title} className="relative rounded-[5%] overflow-hidden sm:w-[48%] mb-[6%] sm:mb-[4%] aspect-3/2">
                <Image className="object-cover" src={proj.coverImage.src} alt={proj.coverImage.alt} fill={true} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
