import { Service } from "@/types/Service";

export let services: Service[] = [];

(async () => {
  const { default: serviceJson } = await import("../data/services.json");
  services = serviceJson.services;
})();

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};
