import FAQsection from "./components/FAQsection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="bg-background w-full max-w-[1440px]">
      <Header />
      <Gallery />
      <Services />
      <Stories />
      <FAQsection />
      <Footer />
    </div>

  );
}
