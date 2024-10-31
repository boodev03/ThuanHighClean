interface PriceTableItem {
  size: string;
  price: string;
}

export interface PriceTable {
  title: string;
  description: string;
  serviceName: string;
  prices: PriceTableItem[];
}

interface ProcessStep {
  step: string;
  description: string;
}

export interface Process {
  title: string;
  description: string;
  steps: ProcessStep[];
  note?: string;
  addition?: string;
  images?: string[];
}

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

export interface Service {
  name: string;
  description: string;
  descriptionImage?: string;
  additionImages?: string[];
  slug: string;
  title: string;
  priceTable: PriceTable[];
  process: Process;
  note?: string;
  advantages: {
    title: string;
    content: string;
  };
  coverImage: string;
  additionContent?: {
    title: string;
    content: string;
    beforeImages?: string[];
  };
  beforePriceContent?: {
    title: string;
    content: string;
  }[];
  questions?: {
    title: string;
    content: string;
  };
  additionalService?: Partial<Service>;
  seo?: SEOProps;
}
