import Image from "next/image";
import { projectInfo } from "./project";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-start w-full min-h-screen px-[6vw] py-10 text-left font-nhgd">
            <div className="flex flex-col items-center justify-start max-w-5xl min-h-screen gap-10">
                <Image src={projectInfo.coverImage} alt="" width={500} />
            </div>
        </main>
    );
}