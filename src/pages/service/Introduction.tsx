import { IntroductionSection } from "@/types/Service";
import "./styles.css";

interface IntroductionProps {
  introductionContent: IntroductionSection;
}

export default function Introduction({
  introductionContent,
}: IntroductionProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
          {introductionContent.title}
        </h2>

        {/* Content */}
        <div
          className="text-base sm:text-lg text-gray-700 leading-relaxed prose-intro text-left"
          dangerouslySetInnerHTML={{ __html: introductionContent.content }}
        />
      </div>
    </div>
  );
}
