import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import type { BlogPost } from '../types';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Practical Partnership',
    author: 'Charlotte Lucas',
    content: 'In my experience, happiness in marriage is entirely a matter of chance...',
    date: '2023-11-25',
    category: 'charlotte'
  },
  {
    id: '2',
    title: 'Finding True Romance in a Modern World',
    author: 'Marianne Dashwood',
    content: 'To love is to burn, to be on fire with passion that consumes the soul...',
    date: '2023-11-24',
    category: 'marianne'
  }
];

const BlogList = () => {
  const [filter, setFilter] = useState<'all' | 'charlotte' | 'marianne'>('all');

  const filteredPosts = SAMPLE_POSTS.filter(post =>
    filter === 'all' ? true : post.category === filter
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-cormorant text-4xl text-sage-900">Character Blogs</h1>
        <div className="space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${
              filter === 'all' ? 'bg-sage-500 text-white' : 'bg-sage-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('charlotte')}
            className={`px-4 py-2 rounded ${
              filter === 'charlotte' ? 'bg-sage-500 text-white' : 'bg-sage-100'
            }`}
          >
            Charlotte
          </button>
          <button
            onClick={() => setFilter('marianne')}
            className={`px-4 py-2 rounded ${
              filter === 'marianne' ? 'bg-sage-500 text-white' : 'bg-sage-100'
            }`}
          >
            Marianne
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map(post => (
          <Link
            key={post.id}
            to={`/blogs/${post.id}`}
            className="block bg-cream-50 p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="font-cormorant text-2xl text-sage-900 mb-2">{post.title}</h2>
            <p className="text-sage-700 mb-4">{post.content.substring(0, 150)}...</p>
            <div className="flex justify-between text-sage-500">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { pathname } = useLocation();
  const postId = pathname.split('/').pop();
  const post = SAMPLE_POSTS.find(p => p.id === postId);

  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <Link to="/blogs" className="text-sage-500 hover:text-sage-600">
        ← Back to Blogs
      </Link>

      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">{post.title}</h1>
        <div className="text-sage-700">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </header>

      <div className="prose prose-sage max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
};

const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogPost />} />
    </Routes>
  );
};

export default Blogs;
