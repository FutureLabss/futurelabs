import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FAQsection from "./components/FAQsection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import SlickSwiper from "./components/SlickSwiper";
import Stories from "./components/Stories";

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
