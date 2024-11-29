import { useState } from 'react';
import { quizQuestions, quizResults } from '../data/quiz';
import QuoteDisplay from '../components/QuoteDisplay';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const currentQuestionId = quizQuestions[currentQuestion].id;
    setAnswers(prev => ({
      ...prev,
      [currentQuestionId]: value
    }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      const characterCounts: Record<string, number> = Object.values(answers).reduce(
        (acc, value) => ({
          ...acc,
          [value]: (acc[value] || 0) + 1
        }),
        {} as Record<string, number>
      );

      const result = Object.entries(characterCounts).reduce(
        (max, [value, count]) => (count > (characterCounts[max] || 0) ? value : max),
        Object.keys(characterCounts)[0]
      );

      setResult(result);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result && result in quizResults) {
    const resultData = quizResults[result];
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="font-cormorant text-4xl text-sage-900">Your Result</h1>
        <div className="bg-cream-50 p-8 rounded-lg space-y-6">
          <h2 className="font-cormorant text-3xl text-sage-900 mb-4">
            You are {resultData.character}!
          </h2>
          <blockquote className="text-sage-700 italic text-lg border-l-4 border-sage-300 pl-4 my-6">
            "{resultData.quote}"
          </blockquote>
          <p className="text-sage-700 mb-6">
            {resultData.description}
          </p>
          <div className="bg-sage-50 p-4 rounded-lg">
            <h3 className="font-cormorant text-xl text-sage-900 mb-2">
              From {resultData.book}
            </h3>
            <p className="text-sage-700 italic">
              Match Advice: {resultData.matchAdvice}
            </p>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-sage-500 text-white px-6 py-2 rounded hover:bg-sage-600 transition mt-6"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestionData = quizQuestions[currentQuestion];

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

      <QuoteDisplay />

      <div className="bg-cream-50 p-8 rounded-lg">
        <div className="mb-6">
          <h2 className="font-cormorant text-2xl text-sage-900 mb-2">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h2>
          <p className="text-sage-700">
            {currentQuestionData.question}
          </p>
        </div>

        <div className="space-y-4">
          {currentQuestionData.options.map((option) => (
            <button
              key={`${currentQuestionData.id}-${option.value}`}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-4 rounded bg-white hover:bg-sage-50 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
