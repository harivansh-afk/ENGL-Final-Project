import type { WeddingStory } from '../types';

const SAMPLE_STORIES: WeddingStory[] = [
  {
    id: '1',
    couple: 'Elizabeth Bennet & Fitzwilliam Darcy',
    story: "What began as mutual prejudice transformed into the deepest love. Through misunderstandings and societal pressures, we discovered that first impressions are not always to be trusted. Our journey taught us the importance of overcoming pride and learning to see the truth in each other's hearts.",
    date: '1813',
    location: 'Longbourn Church, followed by a celebration at Pemberley',
    imageUrl: '/images/lizzy-darcy.jpg',
    quotes: [
      '"In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."',
      '"You have bewitched me, body and soul, and I love... I love... I love you."'
    ]
  },
  {
    id: '2',
    couple: 'Emma Woodhouse & George Knightley',
    story: "Sometimes love is right before our eyes, if only we have the wisdom to see it. What started as a friendship built on honesty and mutual respect blossomed into something more profound. Mr. Knightley helped me see my own faults and grow into a better person, while never losing faith in my essential character.",
    date: '1815',
    location: 'Hartfield Estate',
    imageUrl: '/images/emma-knightley.jpg',
    quotes: [
      '"If I loved you less, I might be able to talk about it more."',
      '"My dearest Emma, for dearest you will always be..."'
    ]
  }
];

const Stories = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Success Stories</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Tales of love and matrimonial bliss from our most beloved couples
        </p>
      </header>

      {/* Stories */}
      <div className="space-y-16">
        {SAMPLE_STORIES.map((story) => (
          <article key={story.id} className="bg-cream-50 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-sage-200">
              {/* In a real app, this would be a proper image */}
              <div className="w-full h-64 bg-sage-300" />
            </div>

            <div className="p-8 space-y-6">
              <header className="text-center space-y-2">
                <h2 className="font-cormorant text-3xl text-sage-900">
                  {story.couple}
                </h2>
                <p className="text-sage-700">
                  {story.location} • {story.date}
                </p>
              </header>

              <div className="prose prose-sage max-w-none">
                <p className="text-sage-800">{story.story}</p>
              </div>

              <div className="space-y-4">
                {story.quotes.map((quote, index) => (
                  <blockquote key={index} className="border-l-4 border-sage-300 pl-4 italic text-sage-700">
                    {quote}
                  </blockquote>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="bg-sage-500 text-white px-6 py-2 rounded-lg hover:bg-sage-600 transition">
                  Read Full Story
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Submit Your Story CTA */}
      <section className="bg-sage-50 p-8 rounded-lg text-center space-y-4">
        <h2 className="font-cormorant text-2xl text-sage-900">
          Share Your Love Story
        </h2>
        <p className="text-sage-700">
          Have you found your perfect match? We'd love to feature your story in our collection.
        </p>
        <button className="bg-sage-500 text-white px-6 py-2 rounded-lg hover:bg-sage-600 transition">
          Submit Your Story
        </button>
      </section>
    </div>
  );
};

export default Stories;
