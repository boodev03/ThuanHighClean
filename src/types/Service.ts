interface ProcessStage {
  title: string;
  step: string[];
}

interface ActualResult {
  description: string;
  image: string;
}

export interface Service {
  name: string;
  description: string;
  slug: string;
  usageReasons: string[];
  coverImage: string;
  processStage: ProcessStage[];
  actualResult: ActualResult[];
}
