import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail } from 'lucide-react';
import { dearJaneLetters } from '@/data/dear-jane';

const DearJane = () => {
  const [selectedLetter, setSelectedLetter] = useState(dearJaneLetters[0]);

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl">Dear Jane</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Seeking matrimonial advice? Let Jane guide you with her timeless wisdom
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="font-serif">Recent Letters</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px]">
              <div className="space-y-4">
                {dearJaneLetters.map((letter) => (
                  <Button
                    key={letter.id}
                    variant={selectedLetter.id === letter.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedLetter(letter)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    <span className="truncate">{letter.from}</span>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">{selectedLetter.subject}</CardTitle>
            <p className="text-sm text-muted-foreground">From: {selectedLetter.from}</p>
          </CardHeader>
          <CardContent>
            <div className="prose prose-neutral dark:prose-invert">
              <div className="mb-8">
                <p className="italic">{selectedLetter.question}</p>
              </div>
              <div>
                <p className="font-serif text-lg mb-4">Dear {selectedLetter.from},</p>
                {selectedLetter.answer.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
                <p className="font-serif text-right">Yours truly,<br />Jane Austen</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DearJane;