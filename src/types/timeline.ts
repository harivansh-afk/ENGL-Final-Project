export interface TimelineEvent {
  year: number;
  type: 'works' | 'context' | 'legacy' | 'adaptations';
  title: string;
  description: string;
  novel?: string;
  significance?: string;
}

export interface Character {
  id: string;
  name: string;
  novel: string;
  socialClass: 'upper' | 'middle' | 'working';
  occupation?: string;
  annualIncome?: string;
  modernEquivalent?: string;
  description: string;
  relationships: string[];
}

export interface SocialClass {
  name: string;
  description: string;
  incomeRange: string;
  modernEquivalent: string;
  characteristics: string[];
  examples: {
    character: string;
    novel: string;
    context: string;
  }[];
}
