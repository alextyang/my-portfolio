import { Project } from "@/app/(lib)/schema";
import { ActionButton, CaseBg, CaseImage, CasePrototype, CaseTool, CaseTools, CaseVideo, CaseVideoOptional, H1, H2, H3, P } from "../projectComponents";
import Image from "next/image";



// DATA: Header & hover-able details
import cover from "./csrc/cover.png";
import splash from "./csrc/splash.png";
export const projectInfo: Project = {
    path: 'sunrise',
    href: 'sunrise',
    coverImage: cover,
    splashImage: splash,
    title: 'Sunrise',
    subtitle: 'Re-thinking the smart home experience.',
    tags: ['UX/UI', 'Product Design'],
    tools: ['Figma', 'Balsamiq', 'Illustrator'],
    languages: [],
    resources: [],
    icons: ["m348.26-525.696 84.913-84.913-42.13-42.565-21.13 20.565Q357.782-620.478 343-621.043q-14.783-.566-26.348-12.131t-11.565-26.63q0-15.066 11.565-26.631l21.13-21.13-50.347-48.783-84.348 84.913L348.26-525.696ZM672-202.522l84.348-84.348-48.913-49.912-21.131 21.13q-11.565 11.565-26.63 11.283-15.065-.283-26.631-11.848-11.565-11.565-11.565-26.913t11.565-26.913l21.131-20.566-44.13-43.695-85.478 85.478L672-202.522ZM627.869-682.26l51.565 52.695 61.175-61.174-51-51.565-61.74 60.044ZM173.782-124.782q-20.087 0-34.544-14.456-14.456-14.457-14.456-34.544v-109.914q0-10.826 3.847-18.804 3.848-7.979 10.544-14.674L285.39-463.391 128.913-619.869Q106.695-642.087 106.695-672t22.218-52.131l106.391-106.391q22.217-22.218 52.131-22.5 29.913-.283 52.131 21.935l156.477 157.042 137.478-137.912q12.131-12.131 26.261-17.696 14.131-5.565 29.261-5.565 15.131 0 29.261 5.282 14.131 5.283 26.261 17.413l67.392 66.827q12.131 12.131 17.696 26.544 5.565 14.413 5.565 29.543 0 15.131-5.565 29.544t-17.696 26.544L673.479-497.174l157.608 157.608q22.218 22.218 22.218 52.131 0 29.914-22.218 52.131L724.696-128.913q-22.217 22.218-52.131 22.218-29.913 0-52.131-22.218L462.261-286.521 316.044-139.738q-6.696 6.695-14.674 10.826-7.979 4.13-18.805 4.13H173.782Z"],
};

// MEDIA
import sunrises from "./csrc/sunrises.png";
import morning from "./csrc/sunrise.png";

import terms from "./csrc/terms.png";

import profile1 from "./csrc/profile1.png";
import profile2 from "./csrc/profile2.png";
import profile3 from "./csrc/profile3.png";
import profile4 from "./csrc/profile4.png";
import competitive from "./csrc/competitive.png";

import ad from "./csrc/ad.png";

import heuristic from "./csrc/heuristics.png";
import alexaComp from "./csrc/alexa-comp.png";
import googleComp from "./csrc/google-comp.png";
import appleComp from "./csrc/apple-comp.png";

import complexFlow from "./csrc/complex-flow.png";
import simpleFlow from "./csrc/simple-flow.png";
import editFlow from "./csrc/edit-flow.png";
import flowBg from "./csrc/flow-bg.png";
import flowBgXl from "./csrc/flow-bg-xl.png";

import lofi from "./csrc/lofi.png";
import lofiAction from "./csrc/lofi-action.png";
import lofiLive from "./csrc/lofi-live.png";
import lofiSummary from "./csrc/lofi-summary.png";
import lofiBg from "./csrc/lofi-bg.png";

import designSystem from "./csrc/design-system.png";
import designSystemMobile from "./csrc/design-system-mobile.png";
import designSystemBg from "./csrc/design-system-bg.png";

const protoVid = "/" + projectInfo.path + "/prototype.mp4";
const protoAdjust = "/" + projectInfo.path + "/adjust.mp4";
const protoCreate = "/" + projectInfo.path + "/create.mp4";
const protoTrigger = "/" + projectInfo.path + "/trigger.mp4";
const protoLive = "/" + projectInfo.path + "/live.mp4";
const protoDevices = "/" + projectInfo.path + "/setup.mp4";
const protoSummary = "/" + projectInfo.path + "/summary.mp4";

// VAR: Common styles
const className = '';

// COMPONENT: Body content / project story
export function ProjectStory() {
    return (
        <div className="story">
            {/* <H1>What makes a morning person?</H1> */}
            {/* <H1>Piles of menus and toggles</H1> */}
            {/* <H1>Web-builder preset examples</H1> */}
            <div className="center !-mt-6">
                <H3>The smart home market has growing pains. </H3>
                <P>
                    Despite the thousands of home-control apps on the Apple and Google Play stores, each one is practically identical.
                    <br /> <br />

                    Instead of competing directly, companies have developed tons of small, incompatible ecosystems. This has left little incentive to develop meaningful or unique experiences, just convincing marketing.

                    <br /> <br />

                    Sunrise is a vision for experiences that supplant the ecosystem; a 3-month UX design project, culminating in an interactive prototype and presentation.

                    <br /> <br />

                    Designed to prove that, by refocusing on a user&apos;s story and not the underlying hardware, smart systems can elegantly embody complex user goals.
                </P>
            </div>


            <CaseImage className="max-w-5xl mt-32 scale-[140%] sm:scale-125 md:scale-100" src={terms} alt=''></CaseImage>


            <div className="mt-32 center">
                <H1>Piles of menus and toggles.</H1>
                <P>
                    Usability issues have led the majority of smart device owners I surveyed to avoid creating home automations entirely, despite the fact that most highly valued the convenience of automation.
                    <br /> <br />
                    Convenience through automation is one of the primary selling points for smart home products. Yet, software is often limited to the most basic automations, with even the richest tech companies unable to provide basic automation approachably.
                    <br /> <br />
                    <br />
                    Some critical heuristic issues I identified in the largest three apps, in collaboration with those surveyed:
                    <br />
                    <br />
                    <ul>
                        <li>Menus are visually-isolated, forcing users to individually recall previous device and automation decisions.</li>
                        <li>Automation flows are inefficient due to the amount of single-purpose menus.</li>
                        <li>The match between system and real world is limited to iconography.</li>
                    </ul>
                </P>
            </div>

            <CaseImage className="max-w-4xl mt-24" src={heuristic} alt='Problematic heuristics for the industry.'></CaseImage>
            <div className="flex flex-col gap-12 mt-12">
                <CaseImage className="max-w-4xl" src={alexaComp} alt=''></CaseImage>
                <CaseImage className="max-w-4xl" src={googleComp} alt=''></CaseImage>
                <CaseImage className="max-w-4xl" src={appleComp} alt=''></CaseImage>
            </div>



            {/* <small className="inline-block mt-12">I got an ad when I tried to use my humidifier. <br />Something needs to change!</small> */}
            {/* <CaseImage className="mt-8 max-w-44" src={ad} alt=''></CaseImage> */}

            <div className="w-full mt-24 center">
                <H2>Currently, there appears to be a trade-off between compatibility, power, and usability. This is not an inherent limitation, though. Open-source libraries can easily bridge those gaps when implemented. The trade-off is the failure of a hardware-only market structure.</H2>
            </div>



            {/* <div className="pt-12 center">
                <H1>Where can we go from here?</H1>
            </div> */}
            <CaseImage className="mt-24 max-w-7xl" src={competitive} alt=''></CaseImage>
            <div className="mt-24 center">
                <H1>Where can we go from here?</H1>

                <P>
                    There&apos;s more room than ever to challenge the preoccupation with hardware. Instead of building from the infrastructure up, <i>let&apos;s start with a key experience and build top-down.</i>
                    <br /> <br />
                    Since it&apos;s the most powerful, worst implemented aspect of smart home software, I decided to tackle the crux of the problem, automation. Automation is not an actionable user goal, though. An actionable goal would be, for example, falling asleep easier or staying focused throughout the day.
                    For this project, I wanted to enable users to create the perfect morning.
                </P>
            </div >

            <br />

            <div className="mt-16 rounded-[1.25vw] overflow-hidden">
                <CaseImage className="max-w-3xl" src={morning} alt='Sunrise in Joshua Tree'></CaseImage>
            </div >


            <div className="mt-16 center">
                <P>
                    Morning routines can be difficult. Over time, I&apos;ve found that sunrise alarms, a good playlist, and transit reminders make a big difference for me. However, setting these things can be a huge chore. <b>If my schedule changes at all, that means adjusting each step individually</b>. No one I surveyed had the patience to do so.
                    <br />
                    <br />
                    Especially for people with limited space, light, or time, every convenience and spark of joy counts in the morning. That&apos;s why morning routines are a perfect environment to illustrate automation&apos;s benefits and maximize return on usability investment.

                </P>

            </div>
            <div className="mt-16 center">
                <H1>The aspiring morning person.</H1>
                <P >
                    I sketched out a few personas of potential users, based on my conversations with smart device owners and review of outspoken users on online smart home communities.
                    <br />
                    <br />
                    These archetypes helped pinpoint the potential cornerstones of a minimum viable solution. While they start in very different places, the current home-control software landscape is failing each persona similarly.
                    <br />

                </P>
                <H2>The unifier was a need for approachability; software whose complete value is widely accessible, requires minimal investment, and is self-evident.</H2>
            </div>

            <div className="flex flex-col w-auto gap-y-6 mt-16 md:mt-8 xxl:-mx-[20vw] xxl:mt-16 xxl:flex-row">
                <div className="flex flex-col gap-y-6 gap-x-2 mx-auto md:flex-row ">
                    <CaseImage className="max-w-xl !-mx-4" src={profile1} alt=''></CaseImage>
                    <CaseImage className="max-w-xl !-mx-4" src={profile2} alt=''></CaseImage>
                </div>
                <div className="flex flex-col gap-y-6 gap-x-2 mx-auto md:flex-row">
                    <CaseImage className="max-w-xl !-mx-4" src={profile3} alt=''></CaseImage>
                    <CaseImage className="max-w-xl !-mx-4" src={profile4} alt=''></CaseImage>
                </div>
            </div>

            <div className="mt-16 center">
                <P >
                    Creating the personas, I had already arrived at one strategy for approachability- presets. The majority of people I talked to did not want to start with a blank page. They reported a unanimous preference for pre-made configurations. Not only attributed to the convenience, but also for the credibility of potential professional advice.
                    <br />
                    <br />
                    In Sunrise, presets would be pre-made, multi-step actions for a device category, like simulated sunrises, that users can just plug-and-play.
                    Preset designers can easily target a variety of demographics (family-oriented, health-focused, etc), and drastically reduce the user work needed for personalization.
                </P>
            </div>

            <CaseImage className="max-w-2xl mt-24" src={sunrises} alt=''></CaseImage>
            <small className="!mt-6">Some sunrise preset inspiration.</small>





            <div className="mt-24 center">

                <H1>The context problem.</H1>
                <P >
                    As pointed out in the heuristic evaluation, the current UI visually isolates users during decision-making. Taking a top-down approach, we can see why this is a critical usability problem.
                    <br />
                    <br />
                    When creating a routine that unfolds naturally, a user must place actions relative to others over time. However, mainstream interfaces treat time as a data point, not as a linear experience. Without human-oriented visual feedback, scheduling a routine requires exponentially more cognitive load with each new action.
                    <br />
                    <br />
                    Imagine trying to schedule a whole day in a calendar app that doesn&apos;t have a calendar view! Bare menus and toggles are just as incomplete of a solution here. To give users the needed context for decision-making, we need a persistent visual timeline.
                    <br />
                    <br />
                    A timeline helps us solve the menu-bloat problem, as well, allowing us to unify action creation and editing into a single, dynamic timeline editor.
                </P>
            </div>

            <div className="relative mt-24">
                <CaseBg className="-top-8 -bottom-8 xxl:hidden" src={flowBg} />
                <CaseBg className="-top-8 -bottom-8 hidden xxl:block" src={flowBgXl} />
                <div className="flex flex-col gap-8 lg:flex-row xxl:gap-16 xxl:-mx-[10vw] w-auto max-w-2xl lg:max-w-none mx-auto">
                    <CaseImage className=" " src={simpleFlow} alt=''></CaseImage>
                    <CaseImage className=" " src={editFlow} alt=''></CaseImage>
                    <CaseImage className=" hidden xxl:block" src={complexFlow} alt=''></CaseImage>
                </div>
                <CaseImage className="-mt-36 max-w-2xl lg:max-w-7xl w-full lg:w-1/2 lg:mt-8 xxl:hidden mx-auto" src={complexFlow} alt=''></CaseImage>
            </div>

            <div className="flex flex-row gap-8 mt-36 mx-auto" title="Selected wireframes">
                <CaseImage className=" max-w-64 !mx-0" src={lofiAction} alt=''></CaseImage>
                <CaseImage className=" max-w-64 !mx-0" src={lofiLive} alt=''></CaseImage>
                <CaseImage className=" max-w-64 !mx-0" src={lofiSummary} alt=''></CaseImage>
            </div>
            <small className="!mt-8">Some screens from the first round of wireframes.</small>

            <div className="mt-24 center">
                <H1>Usability Testing</H1>
                <P>
                    Over the course of the design process, I performed a number of tests with peers to check-in on my design decisions. They were asked to complete specific goals on both a working prototype of Sunrise and a mainstream app. I observed without interfering then asked them to reflect on preferences, issues, and suggestions.
                    <br />
                    <br />
                </P>
                <H2>
                    <b>75%</b> (12/16) reported a preference for the Sunrise interface in accomplishing relevant goals, and <b>94%</b> (15/16) reported a preference for a timeline-based interface for all automation goals.</H2>

                <P>
                    <br />
                    <br />
                    The testing and reflections gave me a few key insights which informed the product&apos;s evolution.
                    <br />
                    <br />
                    <ul>
                        <li>
                            Users didn&apos;t recognize tactile interfaces as tactile when they were visually noisy with irrelevant information →
                            <i> Removed all text from timeline; only showing times while altering them.</i>
                        </li>
                        <li>
                            Each type of tactile interaction needs to be visually communicated →
                            <i> Added drag and stretch indicators to timeline.</i>
                        </li>
                        <li>
                            Users were slowed down by technical terminology →
                            <i> Created and approximated terminology when useful.</i>
                        </li>
                        <li>
                            Users had a hard time recalling the specifics of previously selected actions →
                            <i> Represented change over time and current velocity through background graphics.</i>
                        </li>
                        <li>
                            Users suggested adding additional explainers / info buttons wherever possible →
                            <i> Added help buttons and planned to add info modals for each page, preset, and device.</i>
                        </li>
                    </ul>
                </P>
            </div>

            <div className="mt-36 center">
                <H1>Balancing beauty and simplicity.</H1>
                <P>
                    Sunrise is a morning routine designer. It celebrates the natural beauty of the sun, sky, home, and routine. Everyone should feel welcome and encouraged to discover, experiment, and play.
                    <br />
                    <br />
                    Here, aesthetic consideration is not a secondary concern. It conveys the aesthetic value of routines and is an instant differentiator from the competition.
                    <br />
                    <br />
                    And without the bloat of the &apos;one-stop shop&apos; mindset, there is plenty of room to make bold visual choices while upholding a minimalist standard.
                </P>
            </div>


            <CaseImage className="py-2 mt-12 -mx-[6vw] xl:-mx-[10vw] sm:py-4 md:py-8 lg:py-12 hidden lg:block" src={designSystem} alt='' bgSrc={designSystemBg}></CaseImage>
            <CaseImage className="py-2 mt-12 -mx-[6vw] xl:-mx-[10vw] sm:py-4 md:py-8 lg:py-12 block lg:hidden" src={designSystemMobile} alt='' bgSrc={designSystemBg}></CaseImage>


            <div className=" grid grid-cols-1 items-start gap-36 mt-24 relative">
                <CasePrototype className="" src={protoDevices} alt='' title={"Setup"}>
                    <P>
                        Ecosystems are automatically merged into a unified home, inheriting names and groups for a plug-and-play setup.
                    </P>
                </CasePrototype>

                <CasePrototype src={protoTrigger} alt='' title={"Start"}>
                    <P>
                        The wake-up trigger is the centerpoint that a routine is built around. Picking it first allows routines to be rescheduled in an instant.
                        <br />
                        <br />
                        With opt-in smart triggers, routines can adapt in the background to changes in your alarms, calendar, etc.
                    </P>
                </CasePrototype>

                <CasePrototype src={protoCreate} alt='' title={"Select"}>
                    <P>
                        No learning curves. Focus on creating a morning you&apos;ll love. Select from a number of illustrated, hand-crafted presets that automatically adjust to your setup.
                        <br />
                        <br />
                        Select multiple to rotate between options, especially useful with music integrations.
                    </P>
                </CasePrototype>

                <CasePrototype src={protoAdjust} alt='' title={"Arrange"}>
                    <P>
                        Instead of doing data-entry, the timeline let&apos;s you seamlessly choreograph your routine. It&apos;s a tactile, intuitive way to interact with time: just tap, stretch, and drag.
                    </P>
                </CasePrototype>

                <CasePrototype src={protoSummary} alt='' title={"Review"}>
                    <P>
                        For the first time, complicated automations are legible in a glance.
                    </P>
                </CasePrototype>

                <CasePrototype src={protoLive} alt='' title={"Respond"}>
                    <P>
                        When something comes up, you don&apos;t need to compromise your routine. Jump to the end or scrub backward. Skip a song, switch the playlist, or blast the heat.
                    </P>
                </CasePrototype>
            </div>

            <small className="!mt-36">Full Walkthrough</small>
            <CaseVideoOptional src={protoVid} className="mt-4" />

            <div className="mt-24 center">
                {/* <H3 className="!-mb-5 opacity-60">Note</H3> */}
                <H1 className="">(Technical Feasibility)</H1>
                <P>
                    For all but the ecosystem API integration, the app would be very straightforward to put together with Swift or React Native, plus a remote server to run the automations.
                    <br /><br />
                    With current technology, broad and reliable compatibility would require the use or adaptation of an open-source server like HomeAssistant or HomeBridge. For a minimum viable product, the big three ecosystems (Amazon, Google, Apple) could be unified reliably through the cloud: no additional hub or setup required.
                </P>
            </div>

            <CaseTools className="mt-36">
                <CaseTool logoName="Balsamiq" desc={"First round of wireframing and visual prototyping."}>
                </CaseTool>
                <CaseTool logoName="Figma" desc={"Designing the HiFi interfaces and creating interactive prototype."}>
                </CaseTool>
                <CaseTool logoName="Illustrator" desc={"Creating material-style icons and performing icon alterations."}>
                </CaseTool>
            </CaseTools>


            <div className="mt-24 center">
                <H1>Lessons Learned</H1>
                <P>
                    Going from idea to interface, I&apos;ve learned how to put usability goals, business objectives, and visual identity into conversation. I developed a more holistic understanding of UI/UX design, and ultimately gained an enthusiasm for a product that I truly believe can bring meaningful accessibility to a market that is lacking it.
                    <br />
                    <br />
                    <ul>
                        <li>
                            I enriched my research skills and methodology, corroborating user stories and experience data.
                        </li>
                        <li>
                            I made strategic product decisions based on usability research and in-depth market evaluation.
                        </li>
                        <li>
                            I defended convention-breaking design decisions, here and in a class presentation to UX and business professionals.
                        </li>
                    </ul>
                </P>
            </div>

            <br />
            <br />
            <ActionButton href="/sunrise/Sunrise_Smart-Mornings_Alex-Yang.fig" className="w-52 mx-auto">
                Download .fig
            </ActionButton>
            <br />
        </div>
    );
}