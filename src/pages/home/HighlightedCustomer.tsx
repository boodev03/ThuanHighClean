export default function HighlightedCustomer() {
  return (
    <section className="container mx-auto my-[60px]">
      <h2 className="text-[32px]  max-w-[70%] text-[#333] font-bold mb-10">
        Những thương hiệu đang sử dụng
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="relative border border-[#d9c1c1] [&_div]:hover:opacity-100"
          >
            <img
              alt="Thương hiệu sử dụng"
              src={
                index === 8
                  ? `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.jpeg`
                  : index === 10 || index === 11 || index === 2
                  ? `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.png`
                  : `./assets/images/highlighted-customer/brand_${
                      index + 1
                    }.jpg`
              }
            />
            <div className="opacity-0 absolute inset-0 bg-[rgba(0,0,0,0.18)] transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
