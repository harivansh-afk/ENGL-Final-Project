import { themeComparisons, characterTypes, writingStyleEvolution } from '../data/comparative-analysis';
import { useNavigate } from 'react-router-dom';
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
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

const ComparativeAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute top-24 left-8">
        <Button
          variant="ghost"
          size="sm"
          className="text-sage-700 hover:text-sage-900 hover:bg-sage-100"
          onClick={() => navigate('/analysis')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Analysis
        </Button>
      </div>

      <div className="container mx-auto py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-cormorant text-4xl text-sage-900">
            Comparative Analysis
          </h1>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Explore themes, character types, and writing techniques across Jane Austen's works
          </p>
        </div>

        <Tabs defaultValue="themes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="characters">Character Types</TabsTrigger>
            <TabsTrigger value="style">Writing Style</TabsTrigger>
          </TabsList>

          <TabsContent value="themes" className="space-y-6">
            {themeComparisons.map((theme, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{theme.theme}</CardTitle>
                  <CardDescription>{theme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] rounded-md border p-4">
                    <div className="space-y-6">
                      {theme.appearances.map((appearance, i) => (
                        <div key={i} className="border-l-2 border-sage-300 pl-4">
                          <h3 className="font-cormorant text-xl text-sage-900 mb-2">
                            {appearance.novel}
                          </h3>
                          <p className="text-sage-700 mb-3">
                            {appearance.manifestation}
                          </p>
                          {appearance.examples.map((example, j) => (
                            <div key={j} className="mb-4">
                              <blockquote className="italic text-sage-800 mb-2">
                                "{example.quote}"
                                <footer className="text-sm text-sage-600">
                                  - {example.context}
                                </footer>
                              </blockquote>
                              <p className="text-sage-700">{example.analysis}</p>
                            </div>
                          ))}
                          <p className="text-sage-800 mt-2">
                            <span className="font-semibold">Significance: </span>
                            {appearance.significance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="characters" className="space-y-6">
            {characterTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{type.archetype}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] rounded-md border p-4">
                    <div className="space-y-6">
                      {type.examples.map((example, i) => (
                        <div key={i} className="border-l-2 border-sage-300 pl-4">
                          <h3 className="font-cormorant text-xl text-sage-900 mb-2">
                            {example.character} in {example.novel}
                          </h3>
                          <p className="text-sage-700 mb-3">{example.analysis}</p>
                          <p className="text-sage-700 mb-3">
                            <span className="font-semibold">Character Evolution: </span>
                            {example.evolution}
                          </p>
                          <div className="space-y-2">
                            {example.keyQuotes.map((quote, j) => (
                              <blockquote key={j} className="italic text-sage-800">
                                "{quote.quote}"
                                <footer className="text-sm text-sage-600">
                                  - {quote.context}
                                </footer>
                              </blockquote>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="style" className="space-y-6">
            {writingStyleEvolution.map((technique, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{technique.technique}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] rounded-md border p-4">
                    <div className="space-y-6">
                      {technique.evolution.map((stage, i) => (
                        <div key={i} className="border-l-2 border-sage-300 pl-4">
                          <h3 className="font-cormorant text-xl text-sage-900 mb-2">
                            {stage.novel}
                          </h3>
                          <p className="text-sage-700 mb-3">{stage.usage}</p>
                          <ul className="list-disc list-inside text-sage-700 mb-3">
                            {stage.examples.map((example, j) => (
                              <li key={j}>{example}</li>
                            ))}
                          </ul>
                          <p className="text-sage-800">
                            <span className="font-semibold">Significance: </span>
                            {stage.significance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComparativeAnalysis;
