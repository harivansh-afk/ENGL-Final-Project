import { useState } from 'react';
import { novelAnalyses } from '../data/literary-analysis';
import { useNavigate } from 'react-router-dom';
import type { NovelAnalysis, ThematicElement, CharacterAnalysis, SocialCommentary, LiteraryDevice } from '../data/literary-analysis';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

type NovelKey = keyof typeof novelAnalyses;

const Analysis = () => {
  const [selectedNovel, setSelectedNovel] = useState<NovelKey>('prideAndPrejudice');
  const navigate = useNavigate();
  const analysis = novelAnalyses[selectedNovel];

  if (!analysis) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-sage-700">Loading analysis...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">
          Literary Analysis
        </h1>
        <div className="max-w-xs mx-auto flex items-center gap-2">
          <Select
            value={selectedNovel}
            onValueChange={(value: NovelKey) => setSelectedNovel(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a novel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prideAndPrejudice">Pride and Prejudice (1813)</SelectItem>
              <SelectItem value="senseAndSensibility">Sense and Sensibility (1811)</SelectItem>
              <SelectItem value="northangerAbbey">Northanger Abbey (1818)</SelectItem>
              <SelectItem value="mansfieldPark">Mansfield Park (1814)</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="whitespace-nowrap"
            onClick={() => navigate('/comparative')}
          >
            Compare Works
          </Button>
        </div>
        <div className="mt-4">
          <h2 className="font-cormorant text-2xl text-sage-900">{analysis.title}</h2>
          <p className="text-sage-600">
            Published {analysis.publicationYear} - A Deep Dive into Themes, Characters, and Social Commentary
          </p>
        </div>
      </div>

      <Tabs defaultValue="themes" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="themes">Themes</TabsTrigger>
          <TabsTrigger value="characters">Characters</TabsTrigger>
          <TabsTrigger value="social">Social Commentary</TabsTrigger>
          <TabsTrigger value="literary">Literary Devices</TabsTrigger>
        </TabsList>

        <TabsContent value="themes" className="space-y-4">
          {analysis.mainThemes.map((theme: ThematicElement, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{theme.theme}</CardTitle>
                <CardDescription>{theme.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-4">
                    {theme.examples.map((example, i: number) => (
                      <div key={i} className="space-y-2">
                        <blockquote className="border-l-2 border-sage-300 pl-4 italic">
                          "{example.quote}"
                          <footer className="text-sm text-sage-600">
                            - {example.source}
                          </footer>
                        </blockquote>
                        <p className="text-sage-700">{example.analysis}</p>
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold text-sage-900">Significance</h4>
                      <p className="text-sage-700">{theme.significance}</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="characters" className="space-y-4">
          {analysis.characterAnalysis.map((character: CharacterAnalysis, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{character.character}</CardTitle>
                <CardDescription>{character.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sage-900">Character Development</h4>
                      <p className="text-sage-700">{character.development}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Significance</h4>
                      <p className="text-sage-700">{character.significance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Key Quotes</h4>
                      {character.keyQuotes.map((quote, i: number) => (
                        <div key={i} className="mt-2 space-y-2">
                          <blockquote className="border-l-2 border-sage-300 pl-4 italic">
                            "{quote.quote}"
                            <footer className="text-sm text-sage-600">
                              Context: {quote.context}
                            </footer>
                          </blockquote>
                          <p className="text-sage-700">{quote.analysis}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          {analysis.socialCommentary.map((topic: SocialCommentary, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{topic.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sage-900">Analysis</h4>
                      <p className="text-sage-700">{topic.analysis}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Modern Relevance</h4>
                      <p className="text-sage-700">{topic.modernRelevance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Examples</h4>
                      <ul className="list-disc list-inside text-sage-700">
                        {topic.examples.map((example: string, i: number) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="literary" className="space-y-4">
          {analysis.literaryDevices.map((device: LiteraryDevice, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{device.device}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sage-900">Usage</h4>
                      <p className="text-sage-700">{device.usage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Examples</h4>
                      <ul className="list-disc list-inside text-sage-700">
                        {device.examples.map((example: string, i: number) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900">Effect</h4>
                      <p className="text-sage-700">{device.effect}</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analysis;
