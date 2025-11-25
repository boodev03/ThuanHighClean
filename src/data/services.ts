import { Service } from "@/types/Service";
import serviceJson from "../data/services.json"

export const services: Service[] = serviceJson.services as unknown as Service[];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};
