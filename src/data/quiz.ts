export interface QuizQuestion {
  question: string;
  options: {
    value: string;
    label: string;
  }[];
}

export interface QuizResult {
  character: string;
  quote: string;
  description: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "How do you view marriage?",
    options: [
      { value: "elizabeth", label: "A union of equals based on mutual respect and affection" },
      { value: "charlotte", label: "A practical arrangement for security and social position" },
      { value: "marianne", label: "A passionate connection between kindred spirits" },
      { value: "emma", label: "An opportunity to guide and improve one another" }
    ]
  },
  {
    question: "What quality do you value most in a potential partner?",
    options: [
      { value: "elizabeth", label: "Intelligence and wit" },
      { value: "charlotte", label: "Stability and good prospects" },
      { value: "marianne", label: "Passion and romantic sensibility" },
      { value: "emma", label: "Social standing and influence" }
    ]
  },
  {
    question: "How do you handle social expectations?",
    options: [
      { value: "elizabeth", label: "Challenge them with wit and independence" },
      { value: "charlotte", label: "Accept them as necessary realities" },
      { value: "marianne", label: "Follow your heart regardless" },
      { value: "emma", label: "Set them for others" }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  elizabeth: {
    character: "Elizabeth Bennet",
    quote: "Till this moment I never knew myself.",
    description: "Like Elizabeth Bennet, you value intelligence, wit, and the courage to challenge societal norms. You seek a partnership based on mutual respect and understanding, and aren't afraid to grow from your experiences."
  },
  charlotte: {
    character: "Charlotte Lucas",
    quote: "I am not romantic, you know; I never was.",
    description: "Practical and clear-eyed like Charlotte Lucas, you understand that marriage is as much about security and companionship as it is about love. You make decisions with your head while maintaining realistic expectations."
  },
  marianne: {
    character: "Marianne Dashwood",
    quote: "To love is to burn - to be on fire!",
    description: "You share Marianne Dashwood's passionate nature and romantic sensibility. You believe in the transformative power of love and seek a deep emotional connection with your partner."
  },
  emma: {
    character: "Emma Woodhouse",
    quote: "I seem to have been doomed to blindness.",
    description: "Like Emma Woodhouse, you're confident and socially adept, though sometimes too quick to make judgments. You value personal growth and learning from your mistakes in relationships."
  }
};