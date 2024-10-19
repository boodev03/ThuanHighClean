import { useEffect } from "react";
import CoreValue from "./CoreValue";
import FeatureSection from "./FeatureSection";
import JoinUs from "./JoinUs";
import Partner from "./Partner";

export default function IntroducePage() {
  useEffect(() => {
    document.title = "Thuan High Clean | Giới thiệu doanh nghiệp";
  }, []);
  return (
    <div>
      <div>
        <video
          autoPlay
          className="w-full object-cover"
          loop
          muted
          src="https://pub-fbd06936b4484a68ac272728d64a0210.r2.dev/Kh%C3%B4ng%20Gian%20S%E1%BA%A1ch%2C%20T%C3%A2m%20Tr%E1%BA%A1ng%20T%E1%BB%91t!-VEED.mp4"
        />
      </div>

      <section className="bg-[#F5F5F5] py-[60px]">
        <div className="container mx-auto ">
          <div className="max-w-[50%] space-y-5">
            <h2 className="text-[32px] text-black font-bold">
              Chúng tôi là{" "}
              <span className="text-primary font-semibold">
                Thuan High Clean
              </span>
            </h2>
            <p>
              <span className="text-primary font-semibold">
                Thuan High Clean
              </span>{" "}
              là doanh nghiệp tiên phong trong việc ứng dụng công nghệ vào ngành
              giúp việc nhà ở Việt Nam. Chúng tôi cung cấp đa dịch vụ tiện ích
              như: dọn dẹp nhà, vệ sinh máy lạnh, đi chợ, … tại Đông Nam Á.
              Thông qua ứng dụng đặt lịch dành cho khách hàng Thuan High Clean
              và ứng dụng nhận việc của cộng tác viên Thuan High Clean Partner,
              khách hàng và cộng tác viên có thể chủ động đăng và nhận việc trực
              tiếp trên ứng dụng.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection />
      <CoreValue />
      <Partner />
      <JoinUs />
    </div>
  );
}
