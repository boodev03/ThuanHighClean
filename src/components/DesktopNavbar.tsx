import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import servicesJson from "../data/services.json";
import { Service } from "@/types/Service";

const services: Service[] = servicesJson.services;
export default function DesktopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="hidden lg:block flex-1 relative">
      <ul className="hidden lg:flex items-center gap-8 *:py-3 *:text-secondary *:font-semibold *:transition-all *:duration-200 *:cursor-pointer">
        <li className="hover:text-primary">
          <Link to="/introduce">Về THUAN HIGH Clean</Link>
        </li>
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
            {services.map((item, index) => (
              <li
                key={item.slug}
                className={`
        transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  to={`/service/${item.slug}`}
                  className="block p-4 text-secondary font-medium hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="hover:text-primary">
          <Link to="/contact">Liên hệ</Link>
        </li>
      </ul>
    </nav>
  );
}
