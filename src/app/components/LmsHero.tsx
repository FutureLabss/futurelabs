import Link from "next/link";
export default function LmsHero() {
  return (
    <section className="">
      <div className="flex flex-col px-5 h-[600px]  items-start justify-start w-full relative lg:px-12">
        <video
          src="/hero-video.mp4"
          width="100%"
          height="100%"
          autoPlay={true}
          muted={true}
          loop={true}
          className="absolute top-0 left-0 z-[-2] object-cover h-full xl:max-h-[690px]"
        ></video>
        <div className="flex flex-col max-w-[1150px] mx-auto  mt-[20rem] mb-20 ">
          <h1 className="font-semibold text-[2rem] leading-8 w-full text-white">
            Where You Journey to <br />
            <span className="text-[#F57F20]">Infinite Possibilities</span>{" "}
            <br />
            Begins.
          </h1>
          <p className="font-medium mt-3 text-white text-[0.8rem]">
            Learn, Create, and Thrive with Future-Ready Tech Skills
          </p>
          <div className="mt-3">
            <button
              type="button"
              className="font-semibold rounded-md bg-[#F57f20] px-12 py-3 text-white text-[0.8rem] flex items-center justify-center "
            >
              <Link href="" passHref>
                Apply now
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <p>Where Your Journey to Infinite Possibilities Begins.</p>
      <p>Learn, Create, and Thrive with Future-Ready Tech Skills</p>
      <button>Apply now</button> */}
    </section>
  );
}
