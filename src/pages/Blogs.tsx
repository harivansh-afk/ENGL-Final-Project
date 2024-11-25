import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blog-posts';

const Blogs = () => {
  const [currentAuthor, setCurrentAuthor] = useState('charlotte');

  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl">Character Blogs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Matrimonial musings from your favorite Austen characters
        </p>
      </header>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <Tabs value={currentAuthor} onValueChange={setCurrentAuthor}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="charlotte">Charlotte Lucas</TabsTrigger>
              <TabsTrigger value="marianne">Marianne Dashwood</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            {blogPosts[currentAuthor].map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blogs;