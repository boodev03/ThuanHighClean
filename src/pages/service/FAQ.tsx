import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQSection } from "@/types/Service";

interface FAQProps {
  faqContent: FAQSection;
}

export default function FAQ({ faqContent }: FAQProps) {
  const { title, description, questions = [] }: FAQSection = faqContent;

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={`faq-${index}`}
              className="bg-white border border-gray-200 rounded-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pr-4">
                    {index + 1}. {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openItem === index && (
                <div className="px-6 pb-5 pt-2">
                  <div className="ml-4 border-l-2 border-primary/20 pl-4">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: `👉 ${item.answer}` }} />
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-orange-100 rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
              Vẫn còn thắc mắc?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết
            </p>
            <a
              href="tel:0357111566"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <HelpCircle className="w-5 h-5" />
              Gọi ngay: 0357 111 566
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
