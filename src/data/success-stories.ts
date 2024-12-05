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
  },
  {
    id: 'sarah-james',
    couple: 'Sarah & James Smith',
    imageUrl: '/images/success-stories/sarah-james.jpg',
    story: 'A tale of love that crossed social boundaries, proving that true connection knows no class distinction. Sarah, a housemaid at Longbourn, and James, a footman, found their path to happiness while serving the Bennet family.',
    date: 'Autumn 1813',
    location: 'Longbourn Village',
    quote: "Love flourishes in the most unexpected places, even below stairs.",
    details: {
      ceremony: 'An intimate ceremony in Longbourn Village Church, blessed by both the Bennets and their fellow servants',
      reception: 'A joyous celebration in the servants\' hall, with traditional country dances and home-cooked delicacies',
      specialMoments: [
        'First dance in the servants\' hall',
        'Mrs. Hill\'s special blessing',
        'Elizabeth Bennet\'s gift of a family heirloom'
      ]
    }
  },
  {
    id: 'zuri-darius',
    couple: 'Zuri Benitez & Darius Darcy',
    imageUrl: '/images/success-stories/zuri-darius.jpg',
    story: 'A modern Pride and Prejudice tale set in Brooklyn, where cultural pride and prejudice gave way to understanding and love. Their story proves that Austen\'s themes of love, family, and social change remain relevant today.',
    date: 'Summer 2023',
    location: 'Brooklyn, New York',
    quote: "Sometimes the best love stories are written in the streets we call home.",
    details: {
      ceremony: 'A fusion ceremony blending traditional elements with contemporary Brooklyn style',
      reception: 'A vibrant celebration at the local community center, featuring both Caribbean and African-American traditions',
      specialMoments: [
        'Poetry reading at the ceremony',
        'Traditional African dance performance',
        'Community mural unveiling'
      ]
    }
  },
  {
    id: 'emma-martin',
    couple: 'Emma Woodhouse & George Knightley',
    imageUrl: '/images/success-stories/emma-martin.jpg',
    story: 'A love story that grew from lifelong friendship to deep understanding. Emma and George\'s journey shows how true love can be right before our eyes all along.',
    date: 'Spring 1814',
    location: 'Highbury',
    quote: "I cannot make speeches, Emma... but if I loved you less, I might be able to talk about it more.",
    details: {
      ceremony: 'A grand celebration at Hartfield, with the whole of Highbury in attendance',
      reception: 'An elegant garden party featuring strawberry picking at Donwell Abbey',
      specialMoments: [
        'Box Hill picnic reconciliation',
        'First dance as Mr. and Mrs. Knightley',
        'Harriet Smith\'s heartfelt toast'
      ]
    }
  },
  {
    id: 'anne-frederick',
    couple: 'Anne Elliot & Captain Frederick Wentworth',
    imageUrl: '/images/success-stories/anne-frederick.jpg',
    story: 'A testament to the power of second chances and enduring love. Eight years of separation could not diminish their connection, proving that true love stands the test of time.',
    date: 'Winter 1814',
    location: 'Bath',
    quote: "You pierce my soul. I am half agony, half hope... I have loved none but you.",
    details: {
      ceremony: 'A naval ceremony at Bath Abbey',
      reception: 'A sophisticated gathering at the Pump Room',
      specialMoments: [
        'The letter at the White Hart Inn',
        'Naval officers\' sword arch',
        'Lady Russell\'s blessing'
      ]
    }
  }
];
