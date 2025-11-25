import { PricingSection } from "@/types/Service";

interface IProps {
  pricingContent: PricingSection;
}

export default function PriceTable({ pricingContent }: IProps) {
  return (
    <section className="container mx-auto px-[5px] sm:px-6 lg:px-8">
      {/* Title */}

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
        {pricingContent.title}
      </h2>

      {/* Price Table */}
      <div className="bg-white rounded-xl overflow-hidden mb-6 sm:mb-8 border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-primary text-white">
            {pricingContent.table.length > 0 && (
              <tr>
                <th className="px-1 py-2 sm:px-4 sm:py-4 text-center font-medium text-[13px] sm:text-base w-12 sm:w-16 border-r border-white/20">
                  STT
                </th>
                {pricingContent.table[0].map((cell, cellIndex) => (
                  <th
                    key={`header-${cellIndex}`}
                    className="px-1 py-2 sm:px-4 sm:py-4 text-center font-medium text-[13px] sm:text-base border-r border-white/20"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pricingContent.table.length > 2 &&
              pricingContent.table.slice(1).map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-orange-50 transition-colors duration-200"
                >
                  <td className="px-1 py-2 sm:px-4 sm:py-4 text-center text-gray-600 font-medium text-[13px] sm:text-base border-r border-gray-200">
                    {index + 1}
                  </td>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`cell-${index}-${cellIndex}`}
                      className="px-1 py-2 sm:px-4 sm:py-4 text-center text-gray-800 font-normal text-[13px] sm:text-base border-r border-gray-200"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 space-y-3 text-center">
        {pricingContent.descriptions.length > 0 &&
          pricingContent.descriptions.map((description, index) => (
            <p
              key={`description-${index}`}
              className="text-gray-700 flex items-center justify-center gap-2"
            >
              <span
                className="text-[13px] sm:text-base"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </p>
          ))}
      </div>
    </section>
  );
}
