import { useState } from 'react';
import { Heart, MapPin, Calendar } from 'lucide-react';
import { successStories, SuccessStory } from '@/data/success-stories';

const StoryModal = ({ story, onClose }: { story: SuccessStory; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <h2 className="font-cormorant text-3xl text-sage-900">{story.couple}</h2>
            <button
              onClick={onClose}
              className="text-sage-500 hover:text-sage-700 transition"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>

          <img
            src={story.imageUrl}
            alt={story.couple}
            className="w-full h-96 object-cover rounded-lg"
          />

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-sage-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{story.location}</span>
              </div>
            </div>

            <blockquote className="text-center italic text-sage-700 border-l-4 border-sage-200 pl-4">
              "{story.quote}"
            </blockquote>

            <p className="text-sage-700">{story.story}</p>

            <div className="grid gap-6">
              <div>
                <h3 className="font-cormorant text-2xl text-sage-900">The Ceremony</h3>
                <p className="text-sage-700">{story.details.ceremony}</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-sage-900">The Reception</h3>
                <p className="text-sage-700">{story.details.reception}</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-sage-900">Special Moments</h3>
                <ul className="list-disc list-inside text-sage-700">
                  {story.details.specialMoments.map((moment, index) => (
                    <li key={index}>{moment}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null);

  const toggleStoryExpansion = (storyId: string) => {
    setExpandedStoryId(expandedStoryId === storyId ? null : storyId);
  };

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">
          Love Stories from the Pages of Austen
        </h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Discover the romantic journeys of couples who found their perfect match
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {successStories.map((story) => (
          <article
            key={story.id}
            className="bg-cream-50 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedStory(story)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={story.imageUrl}
                alt={story.couple}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="font-cormorant text-2xl text-sage-900">
                  {story.couple}
                </h2>
                <div className="flex items-center gap-4 text-sm text-sage-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sage-700 line-clamp-3">{story.story}</p>

              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStoryExpansion(story.id);
                  }}
                  className="text-sage-600 hover:text-sage-800 transition"
                >
                  Read More
                </button>
                <Heart className="h-5 w-5 text-rose-500" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default SuccessStories;
