import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { quizQuestions, type QuizResult } from '@/data/quiz';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Simple calculation - most frequent answer determines the result
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const result = Object.entries(counts).reduce((a, b) => 
      counts[a[0]] > counts[b[0]] ? a : b
    )[0];

    setResult(quizResults[result]);
  };

  if (result) {
    return (
      <div className="space-y-8">
        <header className="text-center space-y-4">
          <h1 className="font-serif text-4xl">Your Result</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You are most like...
          </p>
        </header>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">{result.character}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="italic text-muted-foreground">{result.quote}</p>
            <p>{result.description}</p>
            <Button 
              className="w-full mt-4"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setResult(null);
              }}
            >
              Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl">Which Austen Bride Are You?</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Answer these questions to discover your Austen heroine match
        </p>
      </header>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-serif">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>
          <RadioGroup
            value={answers[currentQuestion]}
            onValueChange={handleAnswer}
            className="space-y-4"
          >
            {quizQuestions[currentQuestion].options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button
            className="w-full mt-6"
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'See Result' : 'Next Question'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;