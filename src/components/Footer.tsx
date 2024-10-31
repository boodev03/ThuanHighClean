import { FacebookIcon } from "@/icons/FacebookIcon";
import { ZaloIcon } from "@/icons/ZaloIcon";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import "./styles.css";
import { services } from "@/data/services";

const companyData = [
  { title: "Giới thiệu", link: "/" },
  { title: "Tuyển dụng", link: "/tuyen-dung" },
  { title: "Chi nhánh", link: "/chi-nhanh" },
  { title: "Kinh nghiệm hay", link: "/kinh-nghiem-hay" },
  { title: "Khuyến mãi", link: "/khuyen-mai" },
  { title: "Điều khoản sử dụng", link: "/dieu-khoan-su-dung" },
  { title: "Chính sách bảo mật", link: "/chinh-sach-bao-mat" },
];

const serviceData = services;

export default function Footer() {
  return (
    <footer className={cn("footer", "pt-[50px]")}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5">
          <div className="*:text-sm *:font-medium *:leading-[1.5] space-y-[10px]">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Thuan High Clean"
                className="max-w-[200px]"
              />
            </Link>
            <p>
              Công Ty TNHH THUAN HIGH Clean | Thủ Dức, Thành Phố Hồ Chí Minh
            </p>
            <p>Số điện thoại: 035 711 1566</p>
            <p>Email: thuanhighclean@gmail.com</p>
          </div>

          <div />
          <div>
            <h3 className="font-bold">Công ty</h3>
            <ul className="mt-5 space-y-[10px]">
              {companyData.map((item) => (
                <li key={item.title}>
                  <Link
                    to={`/${item.link}`}
                    className="text-sm text-[#383838] font-medium hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Dịch vụ</h3>
            <ul className="mt-5 space-y-[10px]">
              {serviceData.map((item) => (
                <li key={item.title}>
                  <Link
                    to={`/${item.slug}`}
                    className="text-sm text-[#383838] font-medium hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-8" />
        <div className="pb-8 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <span className="text-sm font-medium">
              © 2024 Thuan High Clean Co., Ltd.
            </span>
            <div className="flex gap-5 items-center">
              <span className="text-sm font-medium uppercase">Follow Us</span>
              <ul className="flex gap-3 *:cursor-pointer *:transition-all *:duration-300">
                <li className="size-6 bg-[#383838] rounded-full flex justify-center items-center hover:bg-primary">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064357351583"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="size-6 bg-[#383838] rounded-full flex justify-center items-center hover:bg-primary">
                  <a href="https://zalo.me/0357111566" target="_blank">
                    <ZaloIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/certificate.png"
              alt="Bộ công thương chứng nhận"
              className="w-[115px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
