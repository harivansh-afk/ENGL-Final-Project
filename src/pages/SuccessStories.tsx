import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { successStories } from '@/data/success-stories';

const SuccessStories = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl">Success Stories</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tales of matrimonial triumph from the pages of Austen
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {successStories.map((story) => (
          <Card key={story.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={story.image} alt={story.couple} />
                <AvatarFallback>{story.couple[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-serif">{story.couple}</CardTitle>
                <p className="text-sm text-muted-foreground">{story.novel}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-neutral dark:prose-invert">
                <blockquote className="italic mb-4">
                  "{story.quote}"
                </blockquote>
                <p>{story.story}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;