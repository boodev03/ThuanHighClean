import { Phone, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import {
  CommitmentSection,
  WarrantySection,
  TipSection,
} from "@/types/Service";

interface IProps {
  commitmentContent?: CommitmentSection;
  warrantyContent?: WarrantySection;
  tipContent?: TipSection;
}

export default function Commitment({
  commitmentContent,
  warrantyContent,
  tipContent,
}: IProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Cam kết chính */}
      {commitmentContent && (
        <div className="mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
            {commitmentContent.title}
          </h2>

          <div className="space-y-6">
            {commitmentContent.contents.map((content, index) => {
              const IconComponent = Icons[
                content.icon as keyof typeof Icons
              ] as React.ElementType;

              return (
                <div
                  className="flex items-start gap-4"
                  key={`commitment-content-${index}`}
                >
                  <div className="-mt-2 lg:-mt-1 flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Chính sách bảo hành */}
      {warrantyContent && (
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-8 border border-orange-200">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
            {warrantyContent.title}
          </h2>

          <div className="space-y-8">
            {warrantyContent.contents.map((content, index) => {
              const IconComponent = Icons[
                content.icon as keyof typeof Icons
              ] as React.ElementType;

              if (!content.inCard) {
                return (
                  <div key={`warranty-content-${index}`}>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      {content.title}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {content.descriptions.map((description, desIndex) => {
                        return (
                          <li
                            className="flex items-start gap-2"
                            key={`warranty-description-${desIndex}`}
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm sm:text-base">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: description,
                                }}
                              />
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }

              return (
                <div className="bg-white/50 rounded-xl p-4">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed ml-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: content.descriptions.join("; "),
                      }}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Divider */}
      {(commitmentContent || warrantyContent) && (
        <div className="my-16">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-6">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>
      )}
 
      {/* Liên hệ bảo hành */}
      <div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-6">
            Liên hệ bảo hành
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Cần hỗ trợ bảo hành? Liên hệ ngay với chúng tôi
          </p>
          <a
            href="tel:0357111566"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Hotline / Zalo: 0357 111 566
          </a>
        </div>
      </div>

      {/* Divider */}
      {tipContent && (
        <div className="my-16">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-6">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>
      )}

      {/* Mẹo giữ sofa sạch lâu */}
      {tipContent && (
        <div className="mb-0">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                {tipContent.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              {tipContent.description}
            </p>
          </div>

          <div className="space-y-4">
            {tipContent.tips.map((tip, index) => (
              <div
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                key={`tip-content-${index}`}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: tip.description,
                      }}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lời khuyên cuối */}
          {tipContent.lastTip && (
            <div className="mt-8 text-center">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-primary">
                  💡 Lời khuyên:
                </span>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: `${tipContent.lastTip}` }}
                />
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
