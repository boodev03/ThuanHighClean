import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const serviceData = [
  { title: "Dịch vụ chuyển nhà", link: "/" },
  { title: "Vệ sinh Sofa, rèm, nệm", link: "/" },
  { title: "Giặt nệm tại nhà", link: "/" },
  { title: "Giặt thảm", link: "/" },
  { title: "Giặt rèm cửa", link: "/" },
  { title: "Tổng vệ sinh", link: "/" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="container mx-auto flex items-center gap-10 h-[70px]">
      <Link to="/">
        <img className="block w-[100px]" src="/public/assets/images/logo.png" />
      </Link>

      <nav className="flex-1">
        <ul className="flex items-center gap-8 *:py-3 *:text-secondary *:font-semibold *:transition-all *:duration-200 *:cursor-pointer">
          <li className="hover:text-primary">Về bTaskee</li>
          <li
            className="relative hover:text-primary flex items-center gap-1"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Dịch vụ
            <ChevronDown />
            <ul
              className={`
          absolute top-full left-0 z-50 w-max max-w-[1000px] py-2 bg-white border border-gray-200 rounded-md shadow-lg
          transition-all duration-300 ease-in-out origin-top
          ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
        `}
            >
              {serviceData.map((item, index) => (
                <li
                  key={item.title}
                  className={`
              transition-all duration-300 ease-in-out
              ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }
            `}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link
                    to={`/${item.link}`}
                    className="block p-4 text-secondary font-medium hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="hover:text-primary">Liên hệ</li>
        </ul>
      </nav>
    </header>
  );
}
