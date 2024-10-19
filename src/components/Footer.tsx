import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import "./styles.css";

const companyData = [
  { title: "Giới thiệu", link: "/" },
  { title: "bRewards", link: "/brewards" },
  { title: "bPay", link: "/bpay" },
  { title: "Tuyển dụng", link: "/tuyen-dung" },
  { title: "Chi nhánh", link: "/chi-nhanh" },
  { title: "Kinh nghiệm hay", link: "/kinh-nghiem-hay" },
  { title: "Khuyến mãi", link: "/khuyen-mai" },
  { title: "Điều khoản sử dụng", link: "/dieu-khoan-su-dung" },
  { title: "Chính sách bảo mật", link: "/chinh-sach-bao-mat" },
  { title: "Câu chuyện người giúp việc", link: "/cau-chuyen-nguoi-giup-viec" },
];

const serviceData = [
  { title: "Giúp việc nhà theo giờ", link: "/giup-viec-nha-theo-gio" },
  { title: "Đi chợ", link: "/di-cho" },
  { title: "Chăm sóc người bệnh", link: "/cham-soc-nguoi-benh" },
  { title: "Chăm sóc người cao tuổi", link: "/cham-soc-nguoi-cao-tuoi" },
  { title: "Tổng vệ sinh", link: "/tong-ve-sinh" },
  { title: "Vệ sinh máy lạnh", link: "/ve-sinh-may-lanh" },
  { title: "Nấu ăn gia đình", link: "/nau-an-gia-dinh" },
  { title: "Giặt ủi", link: "/giat-ui" },
  { title: "bTaskee cho doanh nghiệp", link: "/btaskee-cho-doanh-nghiep" },
  { title: "Dọn dẹp buồng phòng", link: "/don-dep-buong-phong" },
  { title: "Khử khuẩn", link: "/khu-khuan" },
  { title: "Giặt ghế sofa", link: "/giat-ghe-sofa" },
  { title: "Giặt rèm", link: "/giat-rem" },
  { title: "Giặt nệm", link: "/giat-nem" },
  { title: "Giặt thảm", link: "/giat-tham" },
];

export default function Footer() {
  return (
    <footer className={cn("footer", "pt-[50px] mt-[60px]")}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5">
          <div className="*:text-sm *:font-medium *:leading-[1.5]">
            <Link to="/">
              {" "}
              <img src="/public/assets/images/logo.png" />
            </Link>
            <p className="mt-5">
              Công Ty TNHH bTaskee 284/25/20 Lý Thường Kiệt, Phường 14, Quận 10,
              Tp.Hồ Chí Minh 72506
            </p>
            <p>
              Mã số doanh nghiệp: 0313723825 Đại Diện Công Ty: Ông Đỗ Đắc Nhân
              Tâm
            </p>
            <p>Chức vụ: Giám Đốc</p>
            <p>Số điện thoại: 1900 636 736</p>
            <p>Email: support@btaskee.com</p>
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
                    to={`/${item.link}`}
                    className="text-sm text-[#383838] font-medium hover:text-primary"
                  >
                    {item.title}
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
              © 2016 - 2023 bTaskee Co., Ltd.
            </span>
            <div className="flex gap-5 items-center">
              <span className="text-sm font-medium uppercase">Follow Us</span>
              <ul className="flex gap-3 *:cursor-pointer *:transition-all *:duration-300">
                <li className="size-6 bg-[#383838] rounded-full flex justify-center items-center hover:bg-primary">
                  <FacebookIcon />
                </li>
                <li className="size-6 bg-[#383838] rounded-full flex justify-center items-center hover:bg-primary">
                  <InstagramIcon />
                </li>
                <li className="size-6 bg-[#383838] rounded-full flex justify-center items-center hover:bg-primary">
                  <YoutubeIcon />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="./assets/images/certificate.png"
              alt="Bộ công thương chứng nhận"
              className="w-[115px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
