import { getServiceBySlug } from "@/data/services";
import { Link, useParams } from "react-router-dom";
import BeforeAfterGallery from "./BeforeAfterGallery";
import Commitment from "./Commitment";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Introduction from "./Introduction";
import PriceTable from "./PriceTable";
import Process from "./Process";
import ProductType from "./ProductType";
import Video from "./Video";
import "./styles.css";
import SEOConfig from "@/components/SEO";
import { useMemo } from "react";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);

  // Tạo danh sách sections với màu nền xen kẽ tự động
  const sections = useMemo(() => {
    if (!service) return [];
    
    const sectionList = [];
    let colorIndex = 0;
    
    // Định nghĩa pattern màu: white → orange-50 xen kẽ
    const getBackgroundClass = (index: number) => {
      return index % 2 === 0 ? "bg-white" : "bg-orange-50";
    };

    // Thêm các section theo thứ tự nếu tồn tại
    if (service.introductionSection) {
      sectionList.push({
        key: "introduction",
        bgClass: getBackgroundClass(colorIndex++),
        component: <Introduction introductionContent={service.introductionSection} />,
      });
    }

    if (service.pricingSection) {
      sectionList.push({
        key: "pricing",
        bgClass: getBackgroundClass(colorIndex++),
        component: <PriceTable pricingContent={service.pricingSection} />,
      });
    }

    if (service.processesSection) {
      sectionList.push({
        key: "process",
        bgClass: getBackgroundClass(colorIndex++),
        component: <Process processesContent={service.processesSection} />,
      });
    }

    if (service.videoSection) {
      sectionList.push({
        key: "video",
        bgClass: getBackgroundClass(colorIndex++),
        component: <Video videoContent={service.videoSection} />,
      });
    }

    if (service.gallerySection) {
      sectionList.push({
        key: "gallery",
        bgClass: getBackgroundClass(colorIndex++),
        component: <BeforeAfterGallery galleryContent={service.gallerySection} />,
      });
    }

    if (service.productTypesSection) {
      sectionList.push({
        key: "productType",
        bgClass: getBackgroundClass(colorIndex++),
        component: <ProductType productTypeContent={service.productTypesSection} />,
      });
    }

    // Commitment section (luôn có)
    sectionList.push({
      key: "commitment",
      bgClass: getBackgroundClass(colorIndex++),
      component: (
        <Commitment
          commitmentContent={service.commitmentSection}
          warrantyContent={service.warrantySection}
          tipContent={service.tipSection}
        />
      ),
    });

    // FAQ section (luôn có)
    sectionList.push({
      key: "faq",
      bgClass: getBackgroundClass(colorIndex++),
      component: <FAQ faqContent={service.faqSection} />,
    });

    return sectionList;
  }, [service]);

  if (!service) return null;

  return (
    <>
      {service.seo && (
        <SEOConfig
          title={service.seo.title}
          description={service.seo.description}
          keywords={service.seo.keywords}
        />
      )}
      <div>
        <div className="space-y-0">
          {/* Hero Section */}
          <Hero title={service?.title} heroContent={service.heroSection} />

          {/* Dynamic Sections với màu xen kẽ tự động */}
          {sections.map((section) => (
            <div key={section.key} className={`${section.bgClass} py-8 sm:py-10 lg:py-12`}>
              {section.component}
            </div>
          ))}

          {/* Contact Section - Clean Design */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white">
            <div className="container mx-auto py-10 sm:py-12 lg:py-16">
              <div className="text-center mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Liên Hệ Với Chúng Tôi
                </h2>
                <p className="text-white/90 text-sm sm:text-base">
                  Mọi thắc mắc xin vui lòng liên hệ qua các kênh sau
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Địa chỉ */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 text-center hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Địa chỉ</h3>
                  <p className="text-white/80 text-[13px] sm:text-base">
                  5/13 đường 27, P. Hiệp Bình Chánh, TP. Thủ Đức, TP. Hồ Chí Minh
                  </p>
                </div>

                {/* Điện thoại */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 text-center hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Điện thoại</h3>
                  <p className="text-white/80 text-[13px] sm:text-base font-medium">
                    0357 111 566
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 text-center hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
                  <p className="text-white/80 text-[13px] sm:text-base">
                    thuanhighclean@gmail.com
                  </p>
                </div>

                {/* Website */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 text-center hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Website</h3>
                  <Link
                    to="/"
                    className="text-white/80 hover:text-white transition-colors text-[13px] sm:text-base underline"
                  >
                    thuanhighclean.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ProcessStage /> */}
      </div>
    </>
  );
}
