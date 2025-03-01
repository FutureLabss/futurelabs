import Nav from "../headcomponents/Nav";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "../Footer";
import TalentTabComponent from "./TalentTabComponent";
import SponsorsList from "@/app/ui/SponsorLists";
// md:bg-[url(/talent-pool.png)] bg-contain bg-no-repeat bg-right h-[80dvh]

export default function TalentPool() {
  return (
    <div>
      <header className="pb-5 lg:pb-0 pt-10 bg-background px-4 md:px-12 xl:px-20 font-poppins">
        <div className="flex justify-between items-center">
          <Nav />

          <Link
            href=""
            className="text-primary text-sm sm:text-lg px-2 py-1 bg-secondary-default/20 md:px-5 md:py-2 rounded text-secondary-default md:text-2xl font-semibold"
          >
            For Recruiters
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row pt-20 md:pt-40 ">
          <div className="flex w-full flex-col  border-primary rounded-lg gap-5 lg:bg-[url(/talent-pool.png)] bg-[800px_auto] xl:bg-[auto_600px] bg-no-repeat bg-[top_right] h-full lg:min-h-[600px] py-5 lg:py-0">
            <div className="flex flex-col items-center md:items-start">
              <Link
                href=""
                className="flex items-center w-fit text-sm gap-2 rounded-3xl text-secondary-default py-1 pl-2 pr-4 bg-[#FDDEC7]"
              >
                <button className="bg-secondary-default text-white py-1 px-2 rounded-3xl text-xs">
                  New
                </button>
                <p className="grow text-xs md:text-[1rem]">
                  Click here for more information
                </p>
                <FaAngleRight />
              </Link>
              <h2 className="text-3xl lg:text-[3.375rem] xl:text-[4.375rem] font-bold text-primary py-4 leading-tight">
                Match. Connect.{" "}
                <span className="md:block text-secondary-default">Hire.</span>
              </h2>
            </div>
            <div className="mx-auto  md:mx-0 space-y-4">
              <p className="lg:text-[1.25rem] xl:text-[1.5rem] lg:max-w-sm xl:max-w-lg text-center md:text-start">
                Connecting skilled professionals from our training to global
                roles.
              </p>
              <Link
                href=""
                className="block mx-auto md:mx-0 text-primary bg-secondary-default/20 px-5 py-2 rounded text-secondary-default text-2xl font-semibold w-fit"
              >
                Hire Talent
              </Link>
            </div>
          </div>
          <div className="w-full border flex lg:hidden">
            <Image
              src="/talent-pool.png"
              width={1000}
              height={500}
              priority
              alt="talent pool"
              className="w-full h-auto mx-auto object-[center_center]"
            />
          </div>
        </div>
      </header>

      <section className="px-4 md:px-12 xl:px-20 py-12">
        {/* <div className="flex items-center"> */}
        <h2 className="text-3xl lg:text-[3.375rem] xl:text-[4.375rem] font-bold text-primary py-4 md:leading-snug flex flex-col">
          Why Choose
          <span className="flex items-center gap-4 xl:gap-12 text-secondary-default ">
            Us ?
            <span className="text-sm md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.875rem] max-w-xl leading-9 bock font-normal text-neutral-800 border self-end">
              We connect talent with the right opportunities for career success.
            </span>
          </span>
        </h2>
        <div className="">
          <TalentTabComponent />
        </div>

        <div className="py-12 flex items-center flex-col gap-4">
          <h3 className="text-xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3.125rem] font-semibold">
            Our talents were{" "}
            <span className="text-secondary-default">hired</span> by
          </h3>
          <div>
            <SponsorsList />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 xl:px-20 py-12">
        {/* sm:bg-[url(/talentpool/globaltalent.png)] bg-contain bg-no-repeat bg-[top_right] */}
        <div className="flex justify-between border bg ">
          <div className="flex flex-col md:max-w-2xl gap-12">
            <h2 className="md:text-[4.375rem] font-bold ">
              <span className="text-secondary-default ">
                Global Talent, Local Expertise —{" "}
              </span>
              Connecting You Worldwide
            </h2>

            <Link
              href=""
              className="text-primary block bg-secondary-default/20 md:px-5 md:py-2 w-fit rounded text-secondary-default text-2xl font-semibold"
            >
              Explore Our Global Network
            </Link>
          </div>

          <div className="grow w-full border">
            <Image
              src="/talentpool/globaltalent.png"
              width={1400}
              height={500}
              priority
              alt="talent pool"
              className="w-screen h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
