import { ProcessesSection } from "@/types/Service";

interface IProps {
  processesContent: ProcessesSection;
}
 
export default function Process({ processesContent }: IProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
        {processesContent.title}
      </h2>
      
      <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {processesContent.steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-5">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-normal text-black">Bước</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-black">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-black">
                    {step.split(':')[0]}:
                  </span>
                  {step.split(':').slice(1).join(':')}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Note/Conclusion */}
        {processesContent.note && (
          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
            <div className="flex items-start gap-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                {processesContent.note}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
