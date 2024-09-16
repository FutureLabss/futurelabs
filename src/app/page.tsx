import FAQsection from "./components/FAQsection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-background w-full max-w-[1440px]">
      <Header />
      <FAQsection />
      <Footer />
    </div>

  );
}
