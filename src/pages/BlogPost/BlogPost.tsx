import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogPost as BlogPostType, blogPosts } from '../../data/blogPosts';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ShareButtons } from '../../components/ShareButtons';
import { CommentSection } from '../../components/CommentSection';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundPost = blogPosts.find(p => p.id === Number(id));
        if (!foundPost) {
          navigate('/blogs');
          return;
        }
        setPost(foundPost);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [id, navigate]);

  if (isLoading) return <LoadingSpinner />;
  if (!post) return null;

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <article className="max-w-4xl mx-auto px-4">
        <Link
          to="/blogs"
          className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blogs
        </Link>

        <header className="mb-8">
          <img
            src={post.imageUrl}
            alt={`${post.character}'s blog post`}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="font-medium">By {post.character}</span>
            <span>•</span>
            <span>{post.date}</span>
            {post.tags && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-sage-100 text-sage-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="whitespace-pre-wrap">{post.content}</p>
        </div>

        <footer className="border-t border-gray-200 pt-8">
          <ShareButtons post={post} />
          <CommentSection postId={post.id} />
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
