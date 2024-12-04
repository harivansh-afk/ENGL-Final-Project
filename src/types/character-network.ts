export interface BookNode {
  id: string;
  name: string;
  type: 'book';
  color: string;
  description: string;
  year: number;
}

export interface CharacterNode {
  id: string;
  name: string;
  novel: string;
  class: string;
  type: 'protagonist' | 'antagonist' | 'supporting';
  description: string;
}

export interface Relationship {
  source: string;
  target: string;
  type: 'family' | 'romance' | 'friendship' | 'rivalry';
  description: string;
  development: string[];
}

export interface CharacterNetwork {
  books: BookNode[];
  nodes: CharacterNode[];
  relationships: Relationship[];
}
