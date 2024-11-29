import { useState } from 'react';
import type { QuizQuestion, AustenCharacter } from '../types';

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: '1',
    question: 'How do you approach matters of the heart?',
    options: [
      {
        text: 'With passion and spontaneity',
        character: 'Marianne Dashwood',
        points: 2
      },
      {
        text: 'With wit and intelligence',
        character: 'Elizabeth Bennet',
        points: 2
      },
      {
        text: 'With careful consideration and practicality',
        character: 'Elinor Dashwood',
        points: 2
      }
    ]
  },
  {
    id: '2',
    question: 'What quality do you value most in a potential partner?',
    options: [
      {
        text: 'Their social standing and connections',
        character: 'Emma Woodhouse',
        points: 2
      },
      {
        text: 'Their character and principles',
        character: 'Elizabeth Bennet',
        points: 2
      },
      {
        text: 'Their stability and reliability',
        character: 'Anne Elliot',
        points: 2
      }
    ]
  },
  {
    id: '3',
    question: 'How do you feel about social gatherings?',
    options: [
      {
        text: 'I love being the center of attention',
        character: 'Emma Woodhouse',
        points: 2
      },
      {
        text: 'I enjoy observing and making witty observations',
        character: 'Elizabeth Bennet',
        points: 2
      },
      {
        text: 'I prefer intimate gatherings with close friends',
        character: 'Anne Elliot',
        points: 2
      }
    ]
  }
];

const CHARACTER_DESCRIPTIONS: Record<AustenCharacter, string> = {
  'Elizabeth Bennet': 'Like Elizabeth, you are witty, intelligent, and not afraid to speak your mind. You value genuine connections over social status and aren\'t afraid to turn down an unsuitable match.',
  'Emma Woodhouse': 'Like Emma, you are confident, socially adept, and perhaps a bit meddlesome (in the best way). You have a natural talent for bringing people together.',
  'Marianne Dashwood': 'Like Marianne, you wear your heart on your sleeve and believe in passionate, romantic love. You\'re not afraid to express your emotions openly.',
  'Anne Elliot': 'Like Anne, you are thoughtful, patient, and deeply loyal. You understand that true love sometimes requires waiting for the right moment.',
  'Catherine Morland': 'Like Catherine, you approach life with wonder and imagination. Your romantic nature sometimes leads you to see mysteries where there are none.',
  'Elinor Dashwood': 'Like Elinor, you are sensible and responsible, often putting others\' needs before your own. You handle matters of the heart with grace and discretion.'
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AustenCharacter>>({});
  const [result, setResult] = useState<AustenCharacter | null>(null);

  const handleAnswer = (character: AustenCharacter) => {
    setAnswers(prev => ({
      ...prev,
      [QUIZ_QUESTIONS[currentQuestion].id]: character
    }));

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      const characterCounts: Record<AustenCharacter, number> = Object.values(answers).reduce(
        (acc, character) => ({
          ...acc,
          [character]: (acc[character] || 0) + 1
        }),
        {} as Record<AustenCharacter, number>
      );

      const result = Object.entries(characterCounts).reduce(
        (max, [character, count]) => (count > (characterCounts[max] || 0) ? character : max),
        Object.keys(characterCounts)[0]
      ) as AustenCharacter;

      setResult(result);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="font-cormorant text-4xl text-sage-900">Your Result</h1>
        <div className="bg-cream-50 p-8 rounded-lg">
          <h2 className="font-cormorant text-3xl text-sage-900 mb-4">
            You are {result}!
          </h2>
          <p className="text-sage-700 mb-6">
            {CHARACTER_DESCRIPTIONS[result]}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-sage-500 text-white px-6 py-2 rounded hover:bg-sage-600 transition"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">
          Which Austen Bride Are You?
        </h1>
        <p className="text-sage-700">
          Answer these questions to discover your literary matrimonial counterpart
        </p>
      </header>

      <div className="bg-cream-50 p-8 rounded-lg">
        <div className="mb-6">
          <h2 className="font-cormorant text-2xl text-sage-900 mb-2">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </h2>
          <p className="text-sage-700">
            {QUIZ_QUESTIONS[currentQuestion].question}
          </p>
        </div>

        <div className="space-y-4">
          {QUIZ_QUESTIONS[currentQuestion].options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleAnswer(option.character)}
              className="w-full text-left p-4 rounded bg-white hover:bg-sage-50 transition"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
