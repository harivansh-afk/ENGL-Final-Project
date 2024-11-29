import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Heart, Book, Users, Home, MessageCircle, PenTool, Clock } from 'lucide-react';
import { dearJaneLetters, DearJaneLetter, UserSubmittedQuestion, saveUserQuestion, getUserQuestions } from '@/data/dear-jane';
import { useToast } from '@/components/ui/use-toast';

const categoryIcons = {
  courtship: <Heart className="h-4 w-4" />,
  marriage: <Users className="h-4 w-4" />,
  family: <Home className="h-4 w-4" />,
  society: <MessageCircle className="h-4 w-4" />,
  heartbreak: <Book className="h-4 w-4" />
};

const categoryNames = {
  courtship: 'Matters of Courtship',
  marriage: 'Marriage & Partnership',
  family: 'Family Relations',
  society: 'Social Etiquette',
  heartbreak: 'Healing Hearts'
};

const categoryDescriptions = {
  courtship: 'Navigate the delicate dance of courtship with Jane\'s guidance on matters of the heart.',
  marriage: 'Discover wisdom for maintaining harmony and growth in matrimonial life.',
  family: 'Learn to handle family matters with grace, wisdom, and understanding.',
  society: 'Master the art of social etiquette while staying true to yourself.',
  heartbreak: 'Find comfort and strength in Jane\'s advice for healing a wounded heart.'
};

const DearJane = () => {
  const { toast } = useToast();
  const [selectedLetter, setSelectedLetter] = useState<DearJaneLetter>(dearJaneLetters[0]);
  const [selectedCategory, setSelectedCategory] = useState<DearJaneLetter['category']>('courtship');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [userQuestions, setUserQuestions] = useState<UserSubmittedQuestion[]>([]);
  const [formData, setFormData] = useState({
    subject: '',
    from: '',
    question: '',
    category: 'courtship' as DearJaneLetter['category']
  });

  useEffect(() => {
    setUserQuestions(getUserQuestions());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.subject || !formData.from || !formData.question) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    try {
      const newQuestion = saveUserQuestion(formData);
      setUserQuestions(prev => [newQuestion, ...prev]);
      setShowSubmitForm(false);
      setFormData({
        subject: '',
        from: '',
        question: '',
        category: 'courtship'
      });
      toast({
        title: "Question Submitted",
        description: "Your question has been submitted successfully. Jane will respond soon!"
      });
    } catch (err) {
      console.error('Error submitting question:', err);
      toast({
        title: "Submission Error",
        description: err instanceof Error ? err.message : "There was an error submitting your question. Please try again.",
        variant: "destructive"
      });
    }
  };

  const allLetters = [...dearJaneLetters, ...userQuestions];
  const filteredLetters = allLetters.filter(letter => letter.category === selectedCategory);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Dear Jane</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Seeking counsel in matters of the heart? Let Jane Austen's timeless wisdom guide you through your romantic predicaments.
        </p>
        <Button
          onClick={() => setShowSubmitForm(!showSubmitForm)}
          className="bg-sage-500 hover:bg-sage-600 text-white"
        >
          <PenTool className="h-4 w-4 mr-2" />
          {showSubmitForm ? 'Close Form' : 'Ask Jane for Advice'}
        </Button>
      </header>

      {showSubmitForm && (
        <Card className="max-w-2xl mx-auto bg-cream-50">
          <CardHeader>
            <CardTitle className="font-cormorant text-2xl text-sage-900">Submit Your Question</CardTitle>
            <p className="text-sage-700 text-sm">
              Pour your heart out to Jane, and she shall guide you with her timeless wisdom.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500 bg-white"
                  placeholder="e.g., Advice on a Delicate Matter"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Your Question
                </label>
                <textarea
                  value={formData.question}
                  onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
                  className="w-full h-32 p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500 bg-white"
                  placeholder="Dear Jane..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Sign As
                </label>
                <input
                  type="text"
                  value={formData.from}
                  onChange={(e) => setFormData(prev => ({ ...prev, from: e.target.value }))}
                  className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500 bg-white"
                  placeholder="e.g., Hopelessly Romantic"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as DearJaneLetter['category'] }))}
                  className="w-full p-3 rounded-lg border-sage-200 focus:ring-sage-500 focus:border-sage-500 bg-white"
                >
                  {Object.entries(categoryNames).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
              </div>
              <Button type="submit" className="w-full bg-sage-500 hover:bg-sage-600 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Send Letter to Jane
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 bg-cream-50">
          <CardHeader>
            <CardTitle className="font-cormorant text-2xl text-sage-900">Browse by Category</CardTitle>
            <p className="text-sage-700 text-sm">
              {categoryDescriptions[selectedCategory]}
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as DearJaneLetter['category'])}>
              <TabsList className="grid grid-cols-1 gap-2">
                {Object.entries(categoryNames).map(([key, name]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="w-full flex items-center justify-start gap-2 p-2"
                  >
                    {categoryIcons[key as keyof typeof categoryIcons]}
                    <div className="text-left">
                      <div className="font-medium">{name}</div>
                      <div className="text-xs text-sage-600">
                        {filteredLetters.length} letters
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <ScrollArea className="h-[400px] mt-4">
              <div className="space-y-2">
                {filteredLetters.map((letter) => (
                  <Button
                    key={letter.id}
                    variant={selectedLetter.id === letter.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start text-left"
                    onClick={() => setSelectedLetter(letter as DearJaneLetter)}
                  >
                    <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                    <div className="truncate flex-1">
                      <div className="font-medium">{letter.subject}</div>
                      <div className="text-xs text-sage-600 flex items-center gap-1">
                        <span>From: {letter.from}</span>
                        {'status' in letter && (
                          <>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{letter.status === 'pending' ? 'Awaiting Response' : 'Answered'}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-cream-50">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="font-cormorant text-2xl text-sage-900">
                {selectedLetter.subject}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-sage-600">
                <span>From: {selectedLetter.from}</span>
                <span>•</span>
                <span>{new Date(selectedLetter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sage max-w-none">
              <div className="mb-8">
                <p className="italic text-sage-700">{selectedLetter.question}</p>
              </div>
              <div className="space-y-4">
                {selectedLetter.answer.map((paragraph, index) => (
                  <p key={index} className="text-sage-800">
                    {paragraph}
                  </p>
                ))}
                <p className="text-right font-cormorant text-sage-900">
                  Yours truly,<br />Jane Austen
                </p>
              </div>

              {selectedLetter.relatedBook && (
                <div className="mt-8 p-4 bg-sage-50 rounded-lg">
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">
                    From {selectedLetter.relatedBook.title}
                  </h3>
                  <blockquote className="italic text-sage-700 border-l-4 border-sage-200 pl-4">
                    "{selectedLetter.relatedBook.quote}"
                    <footer className="text-sage-600 mt-2">
                      — {selectedLetter.relatedBook.character}
                    </footer>
                  </blockquote>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DearJane;
