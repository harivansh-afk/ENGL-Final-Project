import { useState } from 'react';
import type { AdviceQuestion } from '../types';

const SAMPLE_QUESTIONS: AdviceQuestion[] = [
  {
    id: '1',
    question: "Dear Jane, I find myself in a peculiar situation. A gentleman of considerable fortune has proposed, but while he can offer security and comfort, his conversation leaves much to be desired. My family urges me to accept, but my heart hesitates. What would you advise?",
    askedBy: "Prudently Pondering",
    response: "My dear Prudently Pondering, While security in marriage is not to be scorned, neither should it be the sole consideration. A marriage lacking in intellectual companionship may secure your future, but at what cost to your present happiness? As I once wrote through Elizabeth Bennet, 'I am determined that nothing but the very deepest love will induce me into matrimony.' Consider whether you could respect this gentleman enough to spend your days in his company, for comfort without compatibility is but a gilded cage.",
    date: "2023-11-24"
  },
  {
    id: '2',
    question: "Dear Jane, I've fallen deeply in love with someone my family considers beneath our social station. They insist I look higher, but my heart says otherwise. Should I follow my feelings or bow to familial duty?",
    askedBy: "Torn Between Two Worlds",
    response: "Dearest Torn, The challenge you face echoes through many a drawing room. While duty to family holds weight, remember that it is you who must live with the consequences of this choice. As Emma Woodhouse learned, true worth lies not in social position but in character. Examine both your heart's inclination and your suitor's merit - if you find them equally sound, perhaps it is your family's understanding that needs elevation, not your choice of partner.",
    date: "2023-11-23"
  }
];

const Advice = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    askedBy: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the question to a backend
    setShowSubmitForm(false);
    setNewQuestion({ question: '', askedBy: '' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Dear Jane</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Seeking counsel in matters of the heart? Let Jane Austen's timeless wisdom guide you through your romantic predicaments.
        </p>
      </header>

      {/* Submit Question Button */}
      <div className="text-center">
        <button
          onClick={() => setShowSubmitForm(!showSubmitForm)}
          className="bg-sage-500 text-white px-6 py-3 rounded-lg hover:bg-sage-600 transition"
        >
          {showSubmitForm ? 'Cancel' : 'Submit Your Question'}
        </button>
      </div>

      {/* Question Form */}
      {showSubmitForm && (
        <form onSubmit={handleSubmit} className="bg-cream-50 p-8 rounded-lg space-y-6">
          <div className="space-y-2">
            <label htmlFor="question" className="block text-sage-900 font-semibold">
              Your Question
            </label>
            <textarea
              id="question"
              value={newQuestion.question}
              onChange={(e) => setNewQuestion(prev => ({ ...prev, question: e.target.value }))}
              className="w-full h-32 p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
              placeholder="Dear Jane..."
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="askedBy" className="block text-sage-900 font-semibold">
              Sign As
            </label>
            <input
              type="text"
              id="askedBy"
              value={newQuestion.askedBy}
              onChange={(e) => setNewQuestion(prev => ({ ...prev, askedBy: e.target.value }))}
              className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500"
              placeholder="e.g., Hopelessly Romantic"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sage-500 text-white px-6 py-3 rounded-lg hover:bg-sage-600 transition"
          >
            Submit Question
          </button>
        </form>
      )}

      {/* Questions List */}
      <div className="space-y-8">
        {SAMPLE_QUESTIONS.map((q) => (
          <article key={q.id} className="bg-cream-50 p-8 rounded-lg space-y-6">
            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-sage-900">
                {q.question}
              </h2>
              <p className="text-sage-700 italic">
                - {q.askedBy}
              </p>
              <p className="text-sage-500 text-sm">
                {new Date(q.date).toLocaleDateString()}
              </p>
            </div>

            {q.response && (
              <div className="border-t border-sage-200 pt-6">
                <p className="text-sage-900 font-cormorant text-lg">
                  {q.response}
                </p>
                <p className="text-sage-700 italic mt-4">
                  - Jane Austen
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Advice;
