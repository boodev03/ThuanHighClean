import SEOConfig from "@/components/SEO";
import Commitment from "./Commitment";
import CoreValue from "./CoreValue";
import FeatureSection from "./FeatureSection";
import JoinUs from "./JoinUs";
import Partner from "./Partner";

export default function IntroducePage() {
  return (
    <>
      <SEOConfig
        title="ThuanHighClean - Dịch Vụ Vệ Sinh Chuyên Nghiệp"
        description="Thuan High Clean cung cấp dịch vụ vệ sinh chuyên nghiệp: giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng và nhiều hơn nữa. Đội ngũ chuyên nghiệp, trang thiết bị hiện đại, đảm bảo chất lượng và sự hài lòng của khách hàng."
        keywords="dịch vụ vệ sinh, giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng, Thuan High Clean, dịch vụ giặt thảm, vệ sinh văn phòng"
      />
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
            <div className="lg:max-w-[50%] space-y-5 mb-4">
              <h2 className="text-[32px] max-w-[100%] md:max-w-[70%] text-black font-bold">
                Chúng tôi là{"\n"}
                <span className="block text-primary font-bold text-[32px]">
                  THUAN HIGH CLEAN
                </span>
              </h2>
              <p className="text-justify">
                <span className="text-primary font-semibold">
                  Thuan High Clean
                </span>{" "}
                là doanh nghiệp cung cấp các giải pháp Dịch vụ vệ sinh cho gia
                đình, chung cư, văn phòng... Chúng tôi cung cấp đa dịch vụ tiện
                ích như: dọn dẹp nhà, vệ sinh thảm, vệ sinh sofa, vệ sinh nệm, …
                Các gói dịch vụ vệ sinh mà Thuan High Clean mang lại cam kết có
                mức giá tốt nhất thị trường, an toàn cho người sử dụng phù hợp
                theo từng nhu cầu khách hàng khác nhau.
              </p>
            </div>
            <div className="lg:max-w-[50%] space-y-5 mb-4">
              <h2 className="text-[32px] max-w-[100%] md:max-w-[70%] text-black font-bold">
                Khu vực hoạt động
              </h2>
              <p className="text-justify">
                Hiện tại, Thuan High Clean cung cấp các dịch vụ tiện ích cho
                nhiều hộ gia đình & Công Ty ở khắp 5 tỉnh thành tại Việt Nam:
                TP.HCM, Long An, Bình Dương, Đồng Nai và Bà Rịa Vũng Tàu
              </p>
            </div>
            <div className="lg:max-w-[50%] space-y-5 mb-4">
              <h2 className="text-[31px]  max-w-[100%] md:max-w-[70%] text-black font-bold">
                Phát triển nhiều hơn nữa
              </h2>
              <p className="text-justify">
                Với mục tiêu mang đến cho khách hàng những trải nghiệm dịch vụ
                tốt nhất,
                <span className="text-primary font-semibold">
                  Thuan High Clean
                </span>{" "}
                không ngừng lắng nghe và cải thiện chất lượng dịch vụ.
              </p>
            </div>
          </div>
        </section>

        <FeatureSection />
        <CoreValue />
        <Commitment />
        <Partner />
        <JoinUs />
      </div>
    </>
  );
}
