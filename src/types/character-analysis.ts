export interface CharacterAnalysis {
  id: string;
  name: string;
  description: string;
  traits: string[];
  relationships: {
    character: string;
    relationship: string;
  }[];
  development: string;
  significance: string;
}
