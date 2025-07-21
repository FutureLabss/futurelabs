import dynamic from "next/dynamic";
import Services from "./components/Services";

const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
const SlickSwiper = dynamic(() => import("./components/SlickSwiper"), {
  ssr: false,
});
const Stories = dynamic(() => import("./components/Stories"), { ssr: false });
const FAQsection = dynamic(() => import("./components/FAQsection"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

const Header = dynamic(() => import("./components/Header"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-background max-w-[100%]">
      {/* header */}
      <Header />
      <div className="w-full hidden sm:block">
        <Gallery />
      </div>
      <div className="w-full block sm:hidden">
        <SlickSwiper />
      </div>
      <Services />
      <Stories />
      <FAQsection />
      <Footer />
    </div>
  );
}
