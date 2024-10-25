import { AlignJustify, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import servicesJson from "../data/services.json";
import { Service } from "@/types/Service";

const services: Service[] = servicesJson.services;

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="lg:hidden flex-1 flex justify-end">
      <div
        className="cursor-pointer "
        onClick={() => setIsMobileMenuOpen((pre) => !pre)}
      >
        {isMobileMenuOpen ? <X /> : <AlignJustify />}
      </div>
      <div
        className={`
          lg:hidden absolute top-full z-[999] w-screen left-0 right-0 bg-white shadow-md
          transition-all duration-300 ease-in-out origin-top
          ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          }
        `}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li>
            <Link
              to="/introduce"
              className="block px-3 py-2 text-secondary font-semibold hover:text-primary"
            >
              Về THUAN HIGH Clean
            </Link>
          </li>
          <li>
            <button
              className="flex items-center w-full px-3 py-2 text-secondary font-semibold hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              Dịch vụ
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`pl-4 transition-all duration-300 ease-in-out origin-top space-y-1 ${
                isOpen
                  ? "max-h-screen opacity-100 scale-y-100"
                  : "max-h-0 opacity-0 scale-y-0"
              }`}
            >
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/service/${item.slug}`}
                    className="block px-3 py-2 text-secondary font-medium hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-3 py-2 text-secondary font-semibold hover:text-primary"
            >
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
