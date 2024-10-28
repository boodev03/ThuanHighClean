import SEOConfig from "@/components/SEO";
import Assurance from "./Assurance";
import CustomerList from "./CustomerList";
import CustomerReview from "./CustomerReview";
import HighlightedCustomer from "./HighlightedCustomer";
import { HomeCarousel } from "./HomeCarousel";
import ServiceList from "./ServiceList";

export default function HomePage() {
  return (
    <>
      <SEOConfig
        title="Thuan High Clean - Dịch Vụ Vệ Sinh Chuyên Nghiệp"
        description="Thuan High Clean cung cấp dịch vụ vệ sinh chuyên nghiệp: giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng và nhiều hơn nữa. Đội ngũ chuyên nghiệp, trang thiết bị hiện đại, đảm bảo chất lượng và sự hài lòng của khách hàng."
        keywords="dịch vụ vệ sinh, giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng, Thuan High Clean, dịch vụ giặt thảm, vệ sinh văn phòng"
      />
      <HomeCarousel />
      <ServiceList />
      <Assurance />
      <CustomerReview />
      <CustomerList />
      <HighlightedCustomer />
    </>
  );
}
