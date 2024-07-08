import { Project } from "@/app/(lib)/schema";
import { ActionButton, CaseBg, CaseImage, CasePrototype, CaseTool, CaseTools, CaseVideo, CaseVideoOptional, H1, H2, H3, P } from "../projectComponents";

import cover from "./csrc/cover.svg";
import splash from "./csrc/splash.png";

// DATA: Header & hover-able details
export const projectInfo: Project = {
    path: 'accountable-brands',
    href: 'accountable-brands',
    coverImage: cover,
    splashImage: splash,
    isSplashImageLight: true,
    title: 'Accountable Brands',
    subtitle: 'A crowd-sourced accountability platform.',
    link: 'https://accountablebrand.org/',
    tags: ['UI/UX', 'Frontend + Backend'],
    tools: ['Figma', 'Google Cloud'],
    languages: ['TypeScript'],
    resources: ['React + Next.js', 'Tailwind CSS'],
    icons: ["M635.74-172.782q-20.585 0-34.51-14.246-13.925-14.246-13.925-34.683 0-20.436 13.925-34.471 13.925-14.036 34.51-14.036h10.694q18.126 0 30.737-12.625 12.611-12.625 12.611-31.288v-55.043q0-41.859 27.783-72.06T787.478-477v-4q-42.13-8.565-69.913-38.266-27.783-29.701-27.783-71.56v-55.608q0-18.126-12.611-30.737-12.611-12.611-30.737-12.611H635.74q-20.585 0-34.51-14.246-13.925-14.247-13.925-34.683 0-20.437 13.925-34.472t34.51-14.035h29.347q50.888 0 86.51 36.022 35.621 36.022 35.621 86.674v55.043q0 20.363 16.776 32.138 16.775 11.775 39.638 11.775 16.137 0 27.862 12.725 11.724 12.725 11.724 29.362v86.958q0 16.637-11.525 29.362-11.524 12.725-28.561 12.725-22.363 0-39.138 11.761-16.776 11.761-16.776 31.587v55.608q0 50.652-35.621 86.674-35.622 36.022-86.51 36.022H635.74Zm-340.827 0q-50.888 0-86.51-36.022-35.621-36.022-35.621-86.674v-55.608q0-19.826-16.761-31.587t-39.088-11.761q-16.377 0-28.264-11.687-11.887-11.688-11.887-28.965v-89.828q0-17.277 11.687-28.965 11.687-11.687 28.964-11.687 21.827 0 38.588-11.775t16.761-32.138v-55.043q0-50.652 35.621-86.674 35.622-36.022 86.51-36.022h28.781q20.585 0 34.511 14.246 13.925 14.246 13.925 34.683 0 20.436-13.925 34.471-13.926 14.036-34.511 14.036h-9.563q-18.663 0-31.288 12.611t-12.625 30.737v55.608q0 42.95-27.811 73.226-27.811 30.275-69.32 35.6v4.415q42.509 4.099 69.82 34.69 27.311 30.591 27.311 73.721v55.043q0 18.663 12.625 31.288t31.288 12.625h9.563q20.585 0 34.511 14.246 13.925 14.247 13.925 34.683 0 20.437-13.925 34.472-13.926 14.035-34.511 14.035h-28.781Z"]
};

// MEDIA
const tour_vid = "/" + projectInfo.path + "/tour.mp4";
const className = '';

import headline1 from "./csrc/Headline-1.png";
import headline2 from "./csrc/Headline-2.png";
import headline3 from "./csrc/Headline-3.png";
import headline4 from "./csrc/Headline-4.png";

import flowBefore from "./csrc/flow-before.png";
import flowAfter from "./csrc/flow-after.png";

import activism from "./csrc/activism.png";
import branding from "./csrc/branding.png";

import architectureSimple from "./csrc/architecture-simple.png";
import architecture from "./csrc/architecture.png";

import social1 from "./csrc/social-ACT.png";
import social2 from "./csrc/social-PLP.png";
import social3 from "./csrc/social-HRA.png";

// COMPONENT: Body content / project story
export function ProjectStory() {
    return (
        <div className="story">

            <div className="center !-mt-6">
                <H3>Headlines aren&apos;t enough. </H3>
            </div>

            <div className="flex flex-row gap-4 mt-12 -mx-36">
                <CaseImage className="max-w-4xl  mb-0" src={headline1} alt='New York Times: 23andMe data breach targeted Jewish customers.'></CaseImage>
                <CaseImage className="max-w-4xl  mb-0" src={headline2} alt='The Guardian: Subway bread is too sweet to be bread, according to Irish court.'></CaseImage>
                <CaseImage className="max-w-4xl  mb-0" src={headline3} alt='Naked juice admits it&apos;s health claims were false.'></CaseImage>
                <CaseImage className="max-w-4xl  mb-0" src={headline4} alt='Amnesty International: Shell complicit in activist executions.'></CaseImage>
            </div>

            <div className="center mt-0">
                <H3>Businesses do not face long-term consequences.</H3>
            </div>
            <div className="center mt-16">
                <P>
                    Attention spans fade, the news cycle churns, and PR firms expertly craft a superficial conclusion: leaving no meaningful change in the wake.
                    <br />
                    <br />
                    By design, current channels of information encourage shallow, short-term responses, not true accountability. The internet quickly buries backlash behind new narratives and clever marketing.
                    <br />
                    <br />
                    <br />
                    How do we craft an alternative?
                </P>
            </div>

            <CaseImage className="max-w-5xl mb-0 mt-16" src={activism} alt=""></CaseImage>


            <div className="center mt-6">
                <P>
                    The passion and comprehensiveness of 2020 online activism was outstanding. Notably, there was no central authority or organization behind the flood of educational content, making it a powerful testament to many&apos;s desire to learn, share, and do the right thing.
                    <br />
                    <br />
                    While not a departure from the short-term format, it made clear that a community response to a crisis has the potential to create high-quality, enduring resources.
                </P>
            </div>
            <div className="center mt-8">
                <H1>The Idea.</H1>
                <P>

                    Inspired by the decentralized nature of this educational activism, <b>I propose a permanent record for corporate misconduct.</b>
                </P>
            </div>

            <CaseImage className="max-w-5xl mb-0 mt-8" src={flowBefore} alt=""></CaseImage>
            <div className="center mt-0">
                <P>
                    We need a space to aggregate and document misbehavior. A community-powered living archive to promote long-term culpability, facilitate transparency, and monitor change.
                </P>
            </div>
            <CaseImage className="max-w-5xl mb-0 mt-12" src={flowAfter} alt=""></CaseImage>

            <div className="center mt-16">
                <H1>An architecture for change.</H1>
                <P>
                    Visually, I drew from the visual language of social media activism, fact sheets / nutrition facts, and NGOs to create a sharp, concise, engaging visual identity.
                    <br />
                    <br />
                    Structurally, there are two main components:
                    <ul><b>A brand</b> - The consumer-facing identity of an organization.</ul>
                    <ul><b>A report</b> - A distinct event or pattern of misconduct.</ul>
                    <br />
                    <br />
                    <br />
                    This raises the question of scope. What counts as misconduct? What scale of misbehavior is relevant? What about words without action?
                    <br />
                    <br />
                    I surveyed headlines and activist resources to try to find the common qualities of misconduct and found three themes: <b>human rights abuse, political abuse, and anti-consumer practices</b>. I liked these themes because they are emotionally resonant and issue-encompassing by consequence.
                    <br />
                    <br />
                    <span className="opacity-60">Example: Oil company lies about climate change. Instead of taking a political stance, the category system emphasizes the measurable consequences of this action: misinformed consumers.</span>
                    <br />
                    <br />
                    This structure intentionally excludes: individual people, controversial statements / marketing, and all &apos;socially-conscious&apos; PR strategies (e.g. donations, pledges, mission statements).
                </P>
            </div>


            <CaseImage className="max-w-5xl mb-0 mt-24" src={branding} alt=""></CaseImage>

            <div className="center -mt-6">
                <P className="opacity-60">
                    Example: Visual identity adapted for social media presence.
                </P>
            </div>

            <div className="flex flex-row gap-8 mt-6">
                <CaseImage className="max-w-4xl mb-0" src={social1} alt=''></CaseImage>
                <CaseImage className="max-w-4xl mb-0" src={social2} alt=''></CaseImage>
                <CaseImage className="max-w-4xl mb-0" src={social3} alt=''></CaseImage>
            </div>

            <div className="center mt-6">
                <P>
                    A platform that relies so much user content needs an extremely scalable and feature-rich backend that can support abuse detection, moderation, version-control, user authorization, and complex parsing functions. Luckily, MediaWiki (the software that powers Wikipedia) is open-source, well-documented, and can do all this and more.
                    <br />
                    <br />
                    However, building an adapted front-end inside of MediaWiki would be unnecessarily complicated. Instead, I decided to learn React + Next.js to build a front-end server specifically to support the Accountable Brand structure, pulling content from the MediaWiki network and (potentially) beyond.
                </P>
            </div>

            <CaseImage className="max-w-2xl mb-0 mt-16" src={architectureSimple} alt=""></CaseImage>
            <CaseImage className="max-w-7xl mb-0 mt-4" src={architecture} alt=""></CaseImage>

            <div className="center mt-6">
                <H1>The current product.</H1>
                <P>
                    I&apos;ve built a complete MVP of Accountable Brands: a full-stack web application with the complete, working architecture as mapped above, published between Google Cloud Run and a Digital Ocean VM.
                    <br />
                    <br />
                </P>
                <H3>
                    Current features:
                </H3>
                <P>
                    <li>Open-source brand pages</li>
                    <li>Open-source report pages</li>
                    <li>Search-by-brand</li>
                    <li>Public editing/creation (through mirror)</li>
                    <li>Mandatory peer-review</li>
                    <li>Citation generation and mirroring</li>
                    <li>Page-specific discussions (through mirror)</li>
                    <li>Wikipedia excerpting</li>
                    <li>Dynamically-generated icons</li>
                </P>
            </div>

            <CaseVideoOptional className="mt-16" src={tour_vid} />

            <div className="center mt-32">
                <H1>
                    Tools Used
                </H1>
            </div>

            <CaseTools className="mt-6">
                <CaseTool logoName="Figma" desc={"Designing the brand identity and HiFI prototypes."} />
                <CaseTool logoName="Illustrator" desc={"Creating custom material-style icons."} />
                <CaseTool logoName="Git" desc={"Version control of both submodules of the project."} />
                <CaseTool logoName="Docker" desc={"Cluster and image management for MediaWiki servers."} />

                <CaseTool logoName="REST-API" desc={"Communication in JSON and HTML between servers."} />
                <CaseTool logoName="TypeScript" desc={"Primary language for the custom frontend server."} />
                <CaseTool logoName="React.js" desc={"The component-based interface library."} />
                <CaseTool logoName="Next.js" desc={"Framework for the dynamically-generated interface."} />

                <CaseTool logoName="Tailwind-CSS" desc={"Rapid styling/theming library in conjunction with CSS."} />

                <CaseTool logoName="MediaWiki" desc={"Robust and extendible full-stack wiki server, used for backend."} />
                <CaseTool logoName="ElasticSearch" desc={"Scalable search software that handles both servers."} />
                <CaseTool logoName="Zotero" desc={"Citation management tool, hosted in a dedicated server. "} />

                <CaseTool logoName="Google-Cloud" desc={"Automatic Build and Run routines used for the Next.js instance."} />
                <CaseTool logoName="Digital-Ocean" desc={"Hosting a VM with the MediaWiki cluster."} />
            </CaseTools>


            <div className="center mt-16">
                <H1>
                    The next steps:
                </H1>
                <P>
                    <li>Get the platform up to date with brands and reports from Wikipedia and ProPublica in order to provide a solid foundation for a community to build upon.</li>
                    <li>To seed the growth of the community, begin mission-aligned social media educational campaigns.</li>
                    <li>
                        Currently, editing and moderation is restricted to the native MediaWiki interface, because of it&apos;s rich and documented feature-set.

                        For accessibility, I plan to mirror common editing features and align the MediaWiki theme with Accountable Brands.</li>
                    <li>Integrate public datasets, like executive pay, lobbying spending, and industry-specific numbers.</li>
                    <li>Migrate the servers to a Kubernetes cluster.</li>
                </P>
            </div>

            <div className="center mt-8">
                <H1>Lessons Learned</H1>
                <P>
                    This project has taken me from idea to design, to prototype, to service. It took around 3 months to complete, and in that time I was completely immersed in the interdisciplinary process of building digital solutions.
                    <br />
                    <br />
                    <li>
                        I made strategic product decisions based on social-impact goals, user needs, and technical constraints.
                    </li>
                    <li>
                        I deeply and rapidly developed my front-end skill set, learning React + Next.js and component-based interfaces.
                    </li>
                    <li>
                        I honed my visual design capability, crafting a cohesive and adaptable brand identity.
                    </li>
                    <li>
                        I learned how to manage a complex, multi-component project, from design to deployment over a tight timeline.
                    </li>
                    <br />
                    <br />
                    I put this project on pause to search for a job, but I can&apos;t wait to continue fleshing out the platform as soon as I can support it. Thanks for reading!
                </P>
            </div>
            <ActionButton href="https://github.com/alextyang/Accountable-Brands" className="w-56 mx-auto mt-16 mb-8">
                Open on GitHub
            </ActionButton>
        </div>
    );
}