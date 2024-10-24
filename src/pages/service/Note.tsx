import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";

export default function Note() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto mt-10">
      <p
        dangerouslySetInnerHTML={{ __html: service?.note || "" }}
        className="lg:text-shadow lg:text-secondary mb-4"
      />
    </section>
  );
}
