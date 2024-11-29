export type SuccessStory = {
  id: string;
  couple: string;
  imageUrl: string;
  story: string;
  date: string;
  location: string;
  quote: string;
  details: {
    ceremony: string;
    reception: string;
    specialMoments: string[];
  };
};

export const successStories: SuccessStory[] = [
  {
    id: 'elizabeth-darcy',
    couple: 'Elizabeth Bennet & Fitzwilliam Darcy',
    imageUrl: '/images/success-stories/elizabeth-darcy.jpg',
    story: 'From initial prejudice to profound understanding, Elizabeth and Darcy\'s journey is a testament to how love can overcome pride and preconceptions. Their story began with a series of misunderstandings at the Meryton assembly but blossomed into a deep connection built on mutual respect and admiration.',
    date: 'Spring 1813',
    location: 'Longbourn Church, Hertfordshire',
    quote: "It has been coming on so gradually, that I hardly know when it began.",
    details: {
      ceremony: 'Traditional ceremony at Longbourn Church',
      reception: 'An elegant affair at Pemberley',
      specialMoments: [
        'First dance at the Netherfield Ball',
        'Surprise visit to Pemberley',
        'Morning walk in the gardens where they reconciled'
      ]
    }
  },
  {
    id: 'marianne-brandon',
    couple: 'Marianne Dashwood & Colonel Brandon',
    imageUrl: '/images/success-stories/marianne-brandon.jpg',
    story: 'From youthful romantic ideals to discovering deep and lasting love, Marianne and Colonel Brandon\'s story demonstrates how true love can defy initial impressions and grow from genuine care and devotion.',
    date: 'Summer 1814',
    location: 'Barton Park Chapel, Devonshire',
    quote: "The more I know of the world, the more I am convinced that I shall never see a man whom I can really love.",
    details: {
      ceremony: 'Musical ceremony at Barton Park Chapel',
      reception: 'Celebration at Delaford',
      specialMoments: [
        'First pianoforte duet',
        'Recovery at Cleveland',
        'Autumn walks at Delaford'
      ]
    }
  },
  {
    id: 'edmund-fanny',
    couple: 'Edmund Bertram & Fanny Price',
    imageUrl: '/images/success-stories/edmund-fanny.jpg',
    story: 'A love that grew from childhood friendship to deep understanding, Fanny and Edmund\'s story shows how true worth and genuine feelings triumph over superficial attractions.',
    date: 'Autumn 1814',
    location: 'Mansfield Park Chapel',
    quote: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
    details: {
      ceremony: 'Intimate ceremony at Mansfield Park Chapel',
      reception: 'Family gathering at the Parsonage',
      specialMoments: [
        'Reading together in the East room',
        'Walks in the wilderness',
        'Return to Mansfield Park'
      ]
    }
  },
  {
    id: 'catherine-henry',
    couple: 'Catherine Morland & Henry Tilney',
    imageUrl: '/images/success-stories/catherine-henry.jpg',
    story: 'What began with a dance at the Bath Assembly Rooms grew into a love story that helped Catherine mature from an imaginative girl into a discerning young woman.',
    date: 'Spring 1814',
    location: 'Fullerton Parish Church',
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    details: {
      ceremony: 'Charming ceremony at Fullerton',
      reception: 'Celebration at Woodston Parsonage',
      specialMoments: [
        'First dance in Bath',
        'Walks around Beechen Cliff',
        'Visit to Woodston'
      ]
    }
  }
];
