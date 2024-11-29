import React, { useState, useEffect } from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  postId: number;
}

// Store comments in memory (in a real app, this would be in a database)
const commentsStore: Record<number, Comment[]> = {};

export const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments for this post
  useEffect(() => {
    setComments(commentsStore[postId] || []);
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const comment: Comment = {
      id: Date.now(),
      author: 'Anonymous Farmer', // Replace with actual user system
      content: newComment.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [comment, ...(commentsStore[postId] || [])];
    commentsStore[postId] = updatedComments;
    setComments(updatedComments);
    setNewComment('');
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Comments</h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-none"
          rows={3}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !newComment.trim()}
          className={`mt-2 px-6 py-2 rounded-lg text-white transition-colors ${
            isSubmitting || !newComment.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-sage-500 hover:bg-sage-600'
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-800">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {formatDate(comment.timestamp)}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
