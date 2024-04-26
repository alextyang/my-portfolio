
// PAGE: My Resume
export default function Page() {

    return (
        <main className=" pt-10 text-left h-[1250px] font-nhgd ">
            <embed className="mx-auto  w-" src="/AlexanderYang-Resume.pdf" type="application/pdf" width="850px" height="1100px">
                {/* <p>Loading failed: <a href="/AlexanderYang-Resume.pdf">Click here to open PDF.</a></p> */}
            </embed>
        </main>
    );
}