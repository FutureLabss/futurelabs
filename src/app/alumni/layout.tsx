import Footer from "../components/Footer";
// import Nav from "../components/headcomponents/Nav";
// import Link from "next/link";
import Navigation from "../components/Navigation";

export default function AlumniForumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background">
      <div className="">
        <Navigation />
        {/* <div className="px-[20px] xl:px-[5rem] pt-[1.25rem] flex justify-between gap-6 items-center">
          <Nav />
          <div className="flex flex-row gap-5   ">
            <Link
              href={""}
              className=" text-secondary-default font-medium text-[14px] sm:text-[20px] font-manrope
         border border-secondary-default px-5 py-1 rounded"
            >
              <button>Alumni</button>
            </Link>
            <div
              className=" text-white font-medium text-[14px] sm:text-[20px] font-manrope
         bg-secondary-default px-3 py-1 rounded"
            >
              <Link href="https://studio.futurelabs.ng" target="_blank">
                Studios
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
