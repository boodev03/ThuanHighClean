import { Phone, MessageCircle, X, Check } from "lucide-react";
import * as Icons from "lucide-react";
import { HeroSection } from "@/types/Service";

interface IProps {
  title: string;
  heroContent: HeroSection;
}

const Hero = ({ title, heroContent }: IProps) => {
  return (
    <section
      className={`relative overflow-hidden ${
        heroContent.rightImages ? "min-h-[80vh] py-8 lg:py-0" : "py-12 sm:py-16"
      }`}
    >
      {/* Full Width Background Image */}
      {heroContent.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div
        className={`relative z-10 flex items-center ${
          heroContent.rightImages ? "min-h-[80vh]" : ""
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content (60%) */}
            <div className="order-1 lg:order-1 lg:col-span-3">
              <div>
                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-2xl text-center lg:text-left">
                  {title}
                </h1>

                {/* Orange Line */}
                <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 lg:mx-0"></div>

                {/* Subtitle */}
                <p
                  className={`text-sm md:text-base text-white font-light drop-shadow-lg opacity-90 text-center lg:text-left ${
                    heroContent.rightImages ? "mb-4 sm:mb-8 lg:mb-12" : "mb-6"
                  }`}
                >
                  {heroContent.slogan}
                </p>
              </div>

              {/* Features List */}
              <div
                className={`space-y-5 ${
                  heroContent.rightImages ? "mb-8" : "mb-6"
                }`}
              >
                {heroContent.descriptions.map((content, index) => {
                  const IconComponent = Icons[
                    content.icon as keyof typeof Icons
                  ] as React.ElementType;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <IconComponent className="text-white w-6 h-6 drop-shadow-lg flex-shrink-0" />
                      <p className="text-white text-sm sm:text-base md:text-lg drop-shadow-lg">
                        {content.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0357111566"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  Gọi ngay: 0357 111 566
                </a>
                <a
                  href="https://zalo.me/0357111566"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  Chat nhanh zalo 24/7
                </a>
              </div>
            </div>

            {/* Right Side - Before/After Images (40%) */}
            {heroContent.rightImages && (
              <div className="order-2 lg:order-2 lg:col-span-2">
                <div className="flex justify-center">
                  <div className="w-full max-w-lg aspect-square space-y-4 p-2">
                    {/* First Row - Before1 & After1 */}
                    <div className="relative h-1/2 flex gap-3 group">
                      {/* Before Image */}
                      <div className="relative w-1/2 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <img
                          src={heroContent.rightImages.before1}
                          alt="Before cleaning"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        {heroContent.rightImages.isShowText && (
                          <div className="absolute bottom-3 left-3 bg-red-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 animate-fadeInUp">
                            <X className="w-3.5 h-3.5" strokeWidth={3} />
                            Trước
                          </div>
                        )}
                      </div>

                      {/* After Image */}
                      <div className="relative w-1/2 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <img
                          src={heroContent.rightImages.after1}
                          alt="After cleaning"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        {heroContent.rightImages.isShowText && (
                          <div className="absolute bottom-3 right-3 bg-green-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 animate-fadeInUp">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                            Sau
                          </div>
                        )}
                      </div>

                      {/* Center Divider with Icon */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Second Row - Before2 & After2 */}
                    <div className="relative h-1/2 flex gap-3 group">
                      {/* Before Image */}
                      <div className="relative w-1/2 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <img
                          src={heroContent.rightImages.before2}
                          alt="Before cleaning"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        {heroContent.rightImages.isShowText && (
                          <div className="absolute bottom-3 left-3 bg-red-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 animate-fadeInUp">
                            <X className="w-3.5 h-3.5" strokeWidth={3} />
                            Trước
                          </div>
                        )}
                      </div>

                      {/* After Image */}
                      <div className="relative w-1/2 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <img
                          src={heroContent.rightImages.after2}
                          alt="After cleaning"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        {heroContent.rightImages.isShowText && (
                          <div className="absolute bottom-3 right-3 bg-green-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 animate-fadeInUp">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                            Sau
                          </div>
                        )}
                      </div>

                      {/* Center Divider with Icon */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
