import FAQsection from "./components/FAQsection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import SlickSwiper from "./components/SlickSwiper";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="bg-background w-full max-w-[1440px]">
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
