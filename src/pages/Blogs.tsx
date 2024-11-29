import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { Pagination } from '../components/Pagination';

const POSTS_PER_PAGE = 6;

const BlogCard: React.FC<BlogPost> = ({
  id,
  title,
  character,
  date,
  content,
  imageUrl,
  tags,
  likes,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={`${character}'s blog post`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="font-medium mr-2">By {character}</span>
          <span>• {date}</span>
        </div>
        <p className="text-gray-700 line-clamp-3">{content}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map(tag => (
              <span
                key={tag}
                className="bg-sage-100 text-sage-800 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <Link
            to={`/blogs/${id}`}
            className="text-sage-600 hover:text-sage-800 font-medium inline-flex items-center"
          >
            Read more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {likes !== undefined && (
            <div className="flex items-center text-gray-500">
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              {likes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const characters = useMemo(() => {
    return [...new Set(blogPosts.map(post => post.character))];
  }, []);

  const tags = useMemo(() => {
    const allTags = blogPosts.flatMap(post => post.tags || []);
    return [...new Set(allTags)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCharacter = !selectedCharacter || post.character === selectedCharacter;
      const matchesTag = !selectedTag || post.tags?.includes(selectedTag);
      return matchesSearch && matchesCharacter && matchesTag;
    });
  }, [searchTerm, selectedCharacter, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCharacterFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCharacter(e.target.value);
    setCurrentPage(1);
  };

  const handleTagFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Character Blogs
        </h1>

        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <select
              value={selectedCharacter}
              onChange={handleCharacterFilter}
              className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              <option value="">All Characters</option>
              {characters.map(char => (
                <option key={char} value={char}>
                  {char}
                </option>
              ))}
            </select>
            <select
              value={selectedTag}
              onChange={handleTagFilter}
              className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              <option value="">All Tags</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {currentPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPosts.map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Blogs;
