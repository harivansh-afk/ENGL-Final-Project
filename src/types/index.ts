export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  category: 'charlotte' | 'marianne';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    character: AustenCharacter;
    points: number;
  }[];
}

export type AustenCharacter =
  | 'Elizabeth Bennet'
  | 'Emma Woodhouse'
  | 'Marianne Dashwood'
  | 'Anne Elliot'
  | 'Catherine Morland'
  | 'Elinor Dashwood';

export interface AdviceQuestion {
  id: string;
  question: string;
  askedBy: string;
  response?: string;
  date: string;
}

export interface VendorListing {
  id: string;
  name: string;
  description: string;
  category: 'venue' | 'services' | 'attire' | 'catering';
  location: string;
  imageUrl: string;
}

export interface WeddingStory {
  id: string;
  couple: string;
  story: string;
  date: string;
  location: string;
  imageUrl: string;
  quotes: string[];
}
