export interface DearJaneLetter {
  id: string;
  from: string;
  subject: string;
  category: 'courtship' | 'marriage' | 'family' | 'society' | 'heartbreak';
  question: string;
  answer: string[];
  date: string;
  relatedBook?: {
    title: string;
    character: string;
    quote: string;
  };
}

export const dearJaneLetters: DearJaneLetter[] = [
  {
    id: '1',
    from: 'Hopelessly Romantic',
    subject: 'Should I Wait for True Love?',
    category: 'courtship',
    date: '1813-01-15',
    question: 'Dear Jane, I am twenty-seven and have received a proposal from a respectable gentleman. He is kind and well-situated, but I feel no passionate attachment. Should I accept for security\'s sake, or wait for true love?',
    answer: [
      'My dear Hopelessly Romantic,',
      'While the heart must not be entirely silent in matters of marriage, neither should it be the only voice in the conversation. Consider that happiness in marriage is not merely a matter of passionate beginnings, but of compatible temperaments and mutual respect.',
      'However, do not mistake mere security for contentment. A marriage without any affection is as imprudent as one based solely on passionate feelings. The ideal lies somewhere between Charlotte Lucas\'s pragmatism and Marianne Dashwood\'s romanticism.',
      'Examine your feelings carefully. Is your lack of passion truly indifference, or merely the absence of drama that so many mistake for love? Sometimes the steadiest attachments grow from the most modest beginnings.'
    ],
    relatedBook: {
      title: 'Sense and Sensibility',
      character: 'Marianne Dashwood',
      quote: 'The more I know of the world, the more I am convinced that I shall never see a man whom I can really love.'
    }
  },
  {
    id: '2',
    from: 'Concerned Sister',
    subject: 'My Sister\'s Imprudent Attachment',
    category: 'family',
    date: '1813-02-01',
    question: 'Dear Jane, My younger sister has formed an attachment to a gentleman of questionable character. How can I guide her toward prudence without seeming to interfere?',
    answer: [
      'My dear Concerned Sister,',
      'Ah, the delicate art of sisterly guidance! One must tread carefully when matters of the heart are concerned, particularly when dealing with a younger sister who may mistake experience for interference.',
      'Remember how our dear Elizabeth Bennet handled her sister Lydia\'s situation. Direct opposition often strengthens such attachments. Instead, guide your sister to examine the gentleman\'s character through his actions rather than his words.',
      'Perhaps arrange situations where his true nature might reveal itself naturally. The best advice is often that which allows the recipient to believe they have arrived at the conclusion independently.'
    ],
    relatedBook: {
      title: 'Pride and Prejudice',
      character: 'Elizabeth Bennet',
      quote: 'We all know him to be a proud, unpleasant sort of man; but this would be nothing if you really liked him.'
    }
  },
  {
    id: '3',
    from: 'Socially Anxious',
    subject: 'Navigating Social Gatherings',
    category: 'society',
    date: '1813-03-15',
    question: 'Dear Jane, I find myself overwhelmed at social gatherings, particularly when expected to dance and converse with potential suitors. How can I overcome my natural reserve without compromising my dignity?',
    answer: [
      'My dear Socially Anxious,',
      'Take heart in knowing that even the most accomplished among us have felt the weight of social expectations. Consider our dear Anne Elliot, whose quiet dignity and genuine nature eventually won the day over more boisterous displays.',
      'Rather than attempting to transform yourself into a social butterfly, focus on meaningful connections. A well-timed observation or thoughtful question often carries more weight than hours of idle chatter.',
      'Remember, those worth knowing will appreciate your authentic self. As for dancing, consider it an opportunity for observation rather than a test of social prowess.'
    ],
    relatedBook: {
      title: 'Persuasion',
      character: 'Anne Elliot',
      quote: 'Time will explain.'
    }
  },
  {
    id: '4',
    from: 'Disappointed in Bath',
    subject: 'Recovering from Heartbreak',
    category: 'heartbreak',
    date: '1813-04-01',
    question: 'Dear Jane, I recently discovered that the gentleman I had set my hopes upon is engaged to another. How does one recover from such a disappointment while maintaining one\'s composure in society?',
    answer: [
      'My dear Disappointed,',
      'First, allow me to commend your strength in seeking guidance rather than retreating into despair. The pain of disappointed hopes is keen, but it need not define your future happiness.',
      'Consider how our dear Jane Bennet conducted herself when faced with similar circumstances. Her gentle nature and genuine goodwill, even toward those who had caused her pain, preserved both her dignity and her peace of mind.',
      'Channel your energies into self-improvement and the cultivation of true friendships. Time, that great healer, works most effectively when we give ourselves permission to grow from our disappointments.'
    ],
    relatedBook: {
      title: 'Pride and Prejudice',
      character: 'Jane Bennet',
      quote: 'I would not wish to be hasty in censuring anyone; but I always speak what I think.'
    }
  },
  {
    id: '5',
    from: 'Newly Married',
    subject: 'Adjusting to Married Life',
    category: 'marriage',
    date: '1813-05-15',
    question: 'Dear Jane, Having recently entered the married state, I find myself struggling to balance my own pursuits with my husband\'s expectations. How can I maintain my independence while building a harmonious partnership?',
    answer: [
      'My dear Newly Married,',
      'The transition from maiden to wife need not mean the abandonment of one\'s individual character. Indeed, the finest marriages are those where both parties encourage each other\'s growth and interests.',
      'Consider how Emma Woodhouse and Mr. Knightley maintained their lively debates and individual pursuits even after marriage. Their relationship was strengthened by their ability to challenge and support one another.',
      'Establish habits of open communication early in your marriage. A wise partner will value your happiness and independence as much as your devotion.'
    ],
    relatedBook: {
      title: 'Emma',
      character: 'Emma Woodhouse',
      quote: 'I may have lost my heart, but not my self-control.'
    }
  }
];

export interface UserSubmittedQuestion {
  id: string;
  from: string;
  subject: string;
  category: DearJaneLetter['category'];
  question: string;
  date: string;
  status: 'pending' | 'answered';
}

export const generateQuestionId = () => {
  return `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const saveUserQuestion = (question: Omit<UserSubmittedQuestion, 'id' | 'date' | 'status'>): UserSubmittedQuestion => {
  const newQuestion: UserSubmittedQuestion = {
    ...question,
    id: generateQuestionId(),
    date: new Date().toISOString(),
    status: 'pending'
  };

  // Get existing questions from localStorage
  const existingQuestions = getUserQuestions();

  // Add new question to the list
  const updatedQuestions = [newQuestion, ...existingQuestions];

  // Save back to localStorage
  localStorage.setItem('userQuestions', JSON.stringify(updatedQuestions));

  return newQuestion;
};

export const getUserQuestions = (): UserSubmittedQuestion[] => {
  const stored = localStorage.getItem('userQuestions');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};
