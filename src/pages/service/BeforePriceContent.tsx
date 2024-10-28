import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function BeforePriceContent() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <>
        {service?.beforePriceContent?.map(item => (
            <section key={item.title} className="container mx-auto">
            <h2 className="text-[32px] max-w-[70%] text-primary font-bold mb-5">
              {item.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: item.content || "" }}
              className="lg:text-shadow lg:text-secondary mb-4 space-y-3"
            />
          </section>
        ))}
    </>
  );
}
