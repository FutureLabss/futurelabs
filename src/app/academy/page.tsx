import Footer from "@/app/components/Footer";
import LmsHeader from "@/app/components/LmsHeader";
import LmsHero from "../components/LmsHero";
import LmsMain from "../components/LmsMain";
export default function Academy() {
  return (
    <section>
      <header className="relative">
        <div className="flex items-center justify-center">
          <LmsHeader />
        </div>
        <LmsHero />
      </header>
      <main>
        <LmsMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
