import { useState, useEffect } from 'react';
import { austenQuotes } from '../data/quotes';

const QuoteDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState(austenQuotes[0]);

  useEffect(() => {
    const randomQuote = () => {
      const randomIndex = Math.floor(Math.random() * austenQuotes.length);
      setCurrentQuote(austenQuotes[randomIndex]);
    };

    randomQuote();
    const interval = setInterval(randomQuote, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sage-50 p-6 rounded-lg my-8">
      <blockquote className="text-sage-800 italic text-lg mb-4">
        "{currentQuote.quote}"
      </blockquote>
      <div className="text-sage-600 text-sm">
        <p className="font-semibold">
          — {currentQuote.character ? `${currentQuote.character}, ` : ''}{currentQuote.source}
        </p>
        <p className="mt-2 text-sage-500">
          {currentQuote.context}
        </p>
      </div>
    </div>
  );
};

export default QuoteDisplay;
