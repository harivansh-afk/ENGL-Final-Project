interface QuizOption {
  value: string;
  label: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

interface QuizResult {
  character: string;
  quote: string;
  description: string;
  book: string;
  matchAdvice: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "How do you view marriage?",
    options: [
      { value: "elizabeth", label: "A union of equals based on mutual respect and affection" },
      { value: "charlotte", label: "A practical arrangement for security and social position" },
      { value: "marianne", label: "A passionate connection between kindred spirits" },
      { value: "emma", label: "An opportunity to guide and improve one another" },
      { value: "anne", label: "A deep, enduring bond that can withstand time and circumstance" }
    ]
  },
  {
    id: "2",
    question: "When faced with a difficult social situation, you tend to:",
    options: [
      { value: "elizabeth", label: "Use wit and humor to diffuse tension" },
      { value: "charlotte", label: "Observe quietly and act with pragmatism" },
      { value: "marianne", label: "Express your feelings openly and honestly" },
      { value: "emma", label: "Take charge and try to improve the situation" },
      { value: "anne", label: "Listen carefully and offer gentle guidance" }
    ]
  },
  {
    id: "3",
    question: "What would be your ideal afternoon activity?",
    options: [
      { value: "elizabeth", label: "Taking a long walk to clear your mind" },
      { value: "charlotte", label: "Managing household affairs efficiently" },
      { value: "marianne", label: "Reading poetry in a beautiful garden" },
      { value: "emma", label: "Visiting friends and sharing local news" },
      { value: "anne", label: "Playing the pianoforte and reflecting" }
    ]
  },
  {
    id: "4",
    question: "How do you handle disappointment in love?",
    options: [
      { value: "elizabeth", label: "Examine your own prejudices and learn from the experience" },
      { value: "charlotte", label: "Accept it practically and look for other opportunities" },
      { value: "marianne", label: "Feel it deeply but eventually grow from the experience" },
      { value: "emma", label: "Realize your mistakes and strive to be better" },
      { value: "anne", label: "Remain constant while hoping for a second chance" }
    ]
  },
  {
    id: "5",
    question: "What trait do you value most in a potential partner?",
    options: [
      { value: "elizabeth", label: "Intelligence and the ability to grow" },
      { value: "charlotte", label: "Stability and good prospects" },
      { value: "marianne", label: "Passion and romantic sensibility" },
      { value: "emma", label: "Social standing and moral character" },
      { value: "anne", label: "Constancy and quiet strength" }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  elizabeth: {
    character: "Elizabeth Bennet",
    quote: "Till this moment I never knew myself.",
    description: "Like Elizabeth Bennet, you are witty, intelligent, and not afraid to challenge societal norms. You seek a partnership based on mutual respect and understanding, and you're willing to acknowledge and learn from your mistakes. Your ideal match will be someone who can match your wit and grow alongside you.",
    book: "Pride and Prejudice",
    matchAdvice: "Look for someone who challenges your preconceptions and helps you grow, while maintaining mutual respect and affection."
  },
  charlotte: {
    character: "Charlotte Lucas",
    quote: "I am not romantic, you know; I never was.",
    description: "Practical and clear-eyed like Charlotte Lucas, you understand that marriage is as much about security and companionship as it is about love. You make decisions with your head while maintaining realistic expectations about relationships.",
    book: "Pride and Prejudice",
    matchAdvice: "Consider partners who can provide stability and companionship, while being honest with yourself about your expectations."
  },
  marianne: {
    character: "Marianne Dashwood",
    quote: "To love is to burn - to be on fire!",
    description: "You share Marianne Dashwood's passionate nature and romantic sensibility. While you believe in the transformative power of love, you've learned that true love can come in unexpected forms and that second attachments can be just as meaningful as first ones.",
    book: "Sense and Sensibility",
    matchAdvice: "Keep your heart open to love, but remember that lasting happiness often comes from balancing passion with wisdom."
  },
  emma: {
    character: "Emma Woodhouse",
    quote: "I seem to have been doomed to blindness.",
    description: "Like Emma Woodhouse, you're confident, socially adept, and have a strong desire to help others. While sometimes too quick to make judgments, you have the wisdom to learn from your mistakes and the humility to admit when you're wrong.",
    book: "Emma",
    matchAdvice: "Look for someone who can be your moral equal and who will lovingly point out your mistakes while supporting your growth."
  },
  anne: {
    character: "Anne Elliot",
    quote: "All the privilege I claim for my own sex is that of loving longest, when existence or when hope is gone.",
    description: "Like Anne Elliot, you possess depth of feeling, constancy in love, and quiet strength of character. You understand that true love can withstand the test of time and that second chances are sometimes worth waiting for.",
    book: "Persuasion",
    matchAdvice: "Trust in your own judgment and don't let others persuade you against your heart's wisdom."
  }
};
