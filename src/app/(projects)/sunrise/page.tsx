import Image from "next/image";
import cover from "./src/cover.svg";

export const projectInfo: Project = {
    path: 'sunrise',
    coverImage: {
        src: cover,
        alt: ''
    },
    title: 'Sunrise',
    subtitle: '',
    tags: [''],
    priority: 1,
};

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-start w-full min-h-screen px-[6vw] py-10 text-left font-nhgd">
            <div className="flex flex-col items-center justify-start max-w-5xl min-h-screen gap-10">
                <Image src={cover} alt="" width={500} />
            </div>
        </main>
    );
}