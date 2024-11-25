import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={post.authorImage} alt={post.author} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="font-serif text-lg">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-neutral dark:prose-invert">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;