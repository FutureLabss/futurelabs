import Links from "./components/links";
import Image from "next/image"
import Talent from "@/app/assets/images/talent-image.png"
import Nav from "../components/headcomponents/Nav";



export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-between min-h-screen ">
      <div className="flex flex-col grow gap-[50px] w-full px-[5rem] pb-[80px]">
        <div className="mt-[32px]">
          <Nav />
        </div>
        <div className="flex gap-8 flex-col">
          <Links />
          {children}
        </div>
      </div>
      <div className=" max-w-[543px] w-full">
        <Image
          src={Talent}
          alt="future talent"
          width={543}
          height={1024}
          quality={100}
          priority
        // className="h-fit w-auto"
        />
      </div>
    </div>
  )
}
