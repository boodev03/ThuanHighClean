import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="relative">
      <section className="container mx-auto flex items-center gap-10 h-[70px] ">
        <Link to="/">
          <img className="block w-[180px]" src="/assets/images/logo.png" />
        </Link>

        <DesktopNavbar />
        <MobileNavbar />
      </section>
    </header>
  );
}
