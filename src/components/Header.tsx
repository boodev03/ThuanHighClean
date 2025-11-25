import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <section className="container mx-auto flex items-center gap-10 h-[50px] lg:h-[70px] my-2" >
        <DesktopNavbar />
        <MobileNavbar />
      </section>
    </header>
  );
}
