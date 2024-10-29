import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import AdditionAfterProcess from "./AdditionAfterProcess";

export default function Process() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px]  max-w-[70%] text-primary font-bold mb-5">
        {service?.process.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: service?.process.description || "" }}
        className="lg:text-shadow lg:text-secondary mb-4"
      />
      <div className="space-y-5">
        <ul className="pl-5">
          {service?.process.steps.map((step, index) => (
            <li key={index} className="space-y-1">
              <h3 className="text-lg font-bold lg:text-secondary mt-5">
                {step.step}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: step.description || "" }}
                className="lg:text-shadow lg:text-secondary space-y-2"
              />
            </li>
          ))}
        </ul>

        <p
          dangerouslySetInnerHTML={{ __html: service?.process.note || "" }}
          className="lg:text-shadow lg:text-secondary mt-5"
        />

        <AdditionAfterProcess />
      </div>
    </section>
  );
}
