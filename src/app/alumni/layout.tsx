import Footer from "../components/Footer";
import AppBarComponent from "./components/appbar";
import TopNavBarComponents from "./components/topnavbar";

export default function AlumniForumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>
    <TopNavBarComponents />
        <AppBarComponent />
        </div>
      <div>
          {children}
      </div>
      <Footer />
    </div>
  );
}