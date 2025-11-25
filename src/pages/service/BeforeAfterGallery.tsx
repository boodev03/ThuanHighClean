import React, { useState } from "react";
import { X, Check, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GallerySection } from "@/types/Service";

interface IProps {
  galleryContent: GallerySection;
}

export default function BeforeAfterGallery({ galleryContent }: IProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileSlideStates, setMobileSlideStates] = useState<number[]>([]);

  // Desktop: 5 rows (10 ảnh) mỗi trang
  const itemsPerPage = 5;
  const totalPages = Math.ceil(galleryContent.images.length / itemsPerPage);
  const currentImages = galleryContent.images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Mobile: Chia thành 3 groups đều nhau
  const mobileGroups: { beforeImage: string; afterImage: string }[][] = [];
  const itemsPerGroup = Math.ceil(galleryContent.images.length / 3);
  for (let i = 0; i < galleryContent.images.length; i += itemsPerGroup) {
    mobileGroups.push(galleryContent.images.slice(i, i + itemsPerGroup));
  }

  // Initialize mobile slide states
  React.useEffect(() => {
    setMobileSlideStates(new Array(mobileGroups.length).fill(0));
  }, [mobileGroups.length]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    const element = document.getElementById("gallery-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    scrollToTop();
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const nextMobileSlide = (groupIndex: number) => {
    setMobileSlideStates((prev) => {
      const newStates = [...prev];
      newStates[groupIndex] =
        (newStates[groupIndex] + 1) % mobileGroups[groupIndex].length;
      return newStates;
    });
  };

  const prevMobileSlide = (groupIndex: number) => {
    setMobileSlideStates((prev) => {
      const newStates = [...prev];
      newStates[groupIndex] =
        (newStates[groupIndex] - 1 + mobileGroups[groupIndex].length) %
        mobileGroups[groupIndex].length;
      return newStates;
    });
  };

  return (
    <section
      id="gallery-section"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary text-center mb-6 sm:mb-8">
        {galleryContent.title}
      </h2>

      <div className="max-w-5xl mx-auto">
        {/* Desktop Layout - Pagination */}
        <div className="hidden md:block">
          <div className="space-y-6">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Images Container */}
                <div className="grid grid-cols-2">
                  {/* Before Image */}
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openModal(image.beforeImage)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.beforeImage}
                        alt={`Trước khi vệ sinh ${index + 1}`}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <ZoomIn className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>

                      {/* Before Label */}
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                        <X className="w-3 h-3" />
                        Trước khi vệ sinh
                      </div>
                    </div>
                  </div>

                  {/* After Image */}
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openModal(image.afterImage)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.afterImage}
                        alt={`Sau khi vệ sinh ${index + 1}`}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <ZoomIn className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>

                      {/* After Label */}
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                        <Check className="w-3 h-3" />
                        Sau khi vệ sinh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevPage}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Trước
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`w-8 h-8 rounded-full transition-colors ${
                      currentPage === i
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Sau
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Layout - 3 Groups Carousel */}
        <div className="md:hidden space-y-8">
          {mobileGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        mobileSlideStates[groupIndex] * 100
                      }%)`,
                    }}
                  >
                    {group.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-white shadow-lg border border-gray-100 overflow-hidden">
                          {/* Images Container - Vertical Layout for Mobile */}
                          <div className="flex flex-col">
                            {/* Before Image */}
                            <div
                              className="relative group cursor-pointer"
                              onClick={() => openModal(image.beforeImage)}
                            >
                              <div className="relative overflow-hidden">
                                <img
                                  src={image.beforeImage}
                                  alt={`Trước khi vệ sinh ${index + 1}`}
                                  className="w-full h-48 object-cover transition-transform duration-300"
                                />

                                {/* Zoom Icon - Always visible on mobile */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                                    <ZoomIn className="w-4 h-4 text-gray-700" />
                                  </div>
                                </div>

                                {/* Before Label */}
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                  <X className="w-2.5 h-2.5" />
                                  Trước khi vệ sinh
                                </div>
                              </div>
                            </div>

                            {/* After Image */}
                            <div
                              className="relative group cursor-pointer"
                              onClick={() => openModal(image.afterImage)}
                            >
                              <div className="relative overflow-hidden">
                                <img
                                  src={image.afterImage}
                                  alt={`Sau khi vệ sinh ${index + 1}`}
                                  className="w-full h-48 object-cover transition-transform duration-300"
                                />

                                {/* Zoom Icon - Always visible on mobile */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                                    <ZoomIn className="w-4 h-4 text-gray-700" />
                                  </div>
                                </div>

                                {/* After Label */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                  <Check className="w-2.5 h-2.5" />
                                  Sau khi vệ sinh
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => prevMobileSlide(groupIndex)}
                  className="absolute left-2 top-48 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => nextMobileSlide(groupIndex)}
                  className="absolute right-2 top-48 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {group.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setMobileSlideStates((prev) => {
                          const newStates = [...prev];
                          newStates[groupIndex] = index;
                          return newStates;
                        });
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        mobileSlideStates[groupIndex] === index
                          ? "bg-primary"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
