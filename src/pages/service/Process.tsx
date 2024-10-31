import { Process as ProcessProps } from "@/types/Service";
import AdditionAfterProcess from "./AdditionAfterProcess";

interface IProps {
  process: ProcessProps;
}

export default function Process({ process }: IProps) {
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px] max-w-[70%] text-primary font-bold mb-5">
        {process.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: process.description || "" }}
        className="lg:text-shadow lg:text-secondary mb-4"
      />
      <div className="space-y-5">
        <ul className="pl-5">
          {process.steps.map((step, index) => (
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

        {process.images?.map((image) => (
          <img key={image} src={image} alt={process.title} className="mb-5" />
        ))}

        <p
          dangerouslySetInnerHTML={{ __html: process.note || "" }}
          className="lg:text-shadow lg:text-secondary mt-5"
        />

        <AdditionAfterProcess />
      </div>
    </section>
  );
}
