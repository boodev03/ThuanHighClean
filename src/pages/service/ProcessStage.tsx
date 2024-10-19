import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function ProcessStage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="mt-[60px]">
      <div className="process-stage-wrapper py-[50px]">
        <div className="container mx-auto">
          <h2 className="text-[32px] text-white font-bold mb-10 max-w-[50%]">
            Quy trình thực hiện dịch vụ
          </h2>

          <Tabs defaultValue="sofa" className="border border-[#ddd]">
            <TabsList className="w-full justify-start border-b border-[#DDD] p-0">
              {service?.processStage.map((item) => (
                <TabsTrigger
                  value="sofa"
                  key={item.title}
                  className="[&_span]:data-[state=active]:border-primary pb-0 mb-[2px]"
                >
                  <span className="pb-4 border-b-[5px] border-transparent">
                    {item.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {service?.processStage.map((item) => (
              <TabsContent
                key={item.title}
                className="bg-white mt-0 p-5"
                value="sofa"
              >
                <ul className="space-y-4">
                  {item.step.map((stepContent, index) => (
                    <li className="leading-[1.7em]" key={index}>
                      {stepContent}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto space-y-12 mt-12">
        <h2 className="text-[32px] text-[#333] font-bold mb-10 max-w-[50%]">
          Hình ảnh thực tế
        </h2>
        {service?.actualResult.map((item, index) => (
          <div key={index} className="max-w-[50%] mx-auto">
            <img src={item.image} alt={item.image} />
            <span className="block text-center italic mt-2">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
