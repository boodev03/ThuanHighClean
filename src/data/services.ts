import { Service } from "@/types/Service";

export const getServiceBySlug = (services: Service[], slug: string) => {
  return services.find((service) => service.slug === slug);
};
