import { ProductTypesSection } from "@/types/Service";
import { useState } from "react";
import "./styles.css";

interface ProductTypeProps {
  productTypeContent: ProductTypesSection;
}

export default function ProductType({ productTypeContent }: ProductTypeProps) {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-4 sm:">
            {productTypeContent.title}
        </h2>

        {/* Main Description */}
        {productTypeContent.description && (
          <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
            {productTypeContent.description}
          </p>
        )}

        {/* Product Types List */}
        <div className="space-y-4 sm:space-y-5">
          {productTypeContent.types.map((type, index) => (
            <div key={index}>
              {type.image ? (
                // Layout WITH Image
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 lg:h-[140px]">
                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 h-full">
                    {/* Image */}
                    <div 
                      className="relative bg-white cursor-pointer group overflow-hidden h-[200px] lg:h-full border-r border-gray-200"
                      onClick={() => setSelectedImage({ 
                        image: type.image!, 
                        title: type.title
                      })}
                    >
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                          <svg
                            className="w-5 h-5 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                      {/* Title with number */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                        {index + 1}. {type.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Layout WITHOUT Image - Simpler, cleaner design
                <div className="relative border-2 border-primary/20 rounded-xl bg-gradient-to-br from-orange-50/50 via-white to-white shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden group">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="relative p-5 sm:p-6 lg:p-7 flex items-start gap-4 sm:gap-5">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-orange-600 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg sm:text-xl">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                        {type.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    {/* Decorative icon */}
                    <div className="hidden lg:flex flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <div className="absolute -top-12 left-0 text-white">
              <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
            </div>

            {/* Image */}
            <div className="bg-white rounded-xl p-4 shadow-2xl bord">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

