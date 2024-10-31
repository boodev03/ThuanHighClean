import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="relative">
      <section className="container mx-auto flex items-center gap-10 h-[70px] my-2">
        <Link to="/">
          <img
            className="block h-[70px] rounded-full object-cover"
            src="/assets/images/logo.png"
            alt="Thuan High Clean"
          />
        </Link>

        <DesktopNavbar />
        <MobileNavbar />
      </section>
    </header>
  );
}
