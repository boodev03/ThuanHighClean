interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

export interface HeroSection {
  slogan: string;
  backgroundImage: string;
  descriptions: { icon: string; text: string }[];
  rightImages?: { before1: string; after1: string, before2: string, after2: string, isShowText: boolean };
}

export interface IntroductionSection {
  title: string;
  content: string;
}

export interface PricingSection {
  title: string;
  table: string[][];
  descriptions: string[];
}

export interface ProcessesSection {
  title: string;
  steps: string[];
  note?: string;
}

export interface VideoSection {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

export interface GallerySection {
  title: string;
  images: { beforeImage: string; afterImage: string }[];
}

export interface BenefitsSection {
  title: string;
  contents: { icon: string; title: string; description: string }[];
}

export interface CommitmentSection {
  title: string;
  contents: { icon: string; title: string; description: string }[];
}

export interface WarrantySection {
  title: string;
  contents: { icon: string; title: string; descriptions: string[]; inCard: boolean }[];
}

export interface TipSection {
  title: string;
  description: string;
  tips: { title: string; description: string }[];
  lastTip?: string;
}

export interface ProductTypesSection {
  title: string;
  description?: string;
  types: { 
    icon?: string; 
    title: string; 
    description: string;
    image?: string;
  }[];
}

export interface FAQSection {
  title: string;
  description: string;
  questions: { question: string; answer: string }[];
}

export interface Service {
  isActive: boolean;
  slug: string;
  name: string;
  title: string;
  heroSection: HeroSection;
  introductionSection?: IntroductionSection;
  pricingSection?: PricingSection;
  processesSection?: ProcessesSection;
  videoSection?: VideoSection;
  gallerySection?: GallerySection;
  benefitsSection: BenefitsSection;
  commitmentSection?: CommitmentSection;
  warrantySection?: WarrantySection;
  tipSection?: TipSection;
  productTypesSection?: ProductTypesSection;
  faqSection: FAQSection;
  seo?: SEOProps;
}
