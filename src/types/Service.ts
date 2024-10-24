interface PriceTableItem {
  size: string;
  price: string;
}

interface PriceTable {
  title: string;
  description: string;
  serviceName: string;
  prices: PriceTableItem[];
}

interface ProcessStep {
  step: string;
  description: string;
}

interface Process {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface Service {
  name: string;
  description: string;
  slug: string;
  title: string;
  priceTable: PriceTable[];
  process: Process;
  note: string;
  advantages: {
    title: string;
    content: string;
  };
  coverImage: string;
}
