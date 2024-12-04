import { VendorListing } from '../types/vendors';

export const VENDOR_LISTINGS: VendorListing[] = [
  {
    id: '1',
    name: 'Pemberley Estate',
    description: 'The grandest estate in Derbyshire, offering elegant spaces for the most sophisticated celebrations. Our grounds provide stunning backdrops for ceremonies and receptions.',
    category: 'venue',
    location: 'Derbyshire',
    imageUrl: '/images/vendors/pemberley.jpg',
    priceRange: '££££',
    rating: {
      reputation: 5,
      elegance: 5,
      value: 4
    },
    features: [
      'Grand ballroom',
      'Extensive gardens',
      'Lake view',
      'Multiple reception rooms',
      'Accommodation available'
    ],
    testimonials: [
      {
        author: 'Elizabeth Bennet',
        text: 'The perfect setting for our celebration. The grounds are beyond compare.'
      }
    ]
  },
  {
    id: '2',
    name: 'Meryton Assembly Rooms',
    description: 'The perfect venue for a country wedding, our assembly rooms have hosted countless memorable celebrations. Known for our excellent acoustics and spacious dance floor.',
    category: 'venue',
    location: 'Hertfordshire',
    imageUrl: '/images/vendors/meryton.jpg',
    priceRange: '£££',
    rating: {
      reputation: 4,
      elegance: 4,
      value: 5
    },
    features: [
      'Large dance floor',
      'Excellent acoustics',
      'Catering kitchen',
      'Card room',
      'Garden access'
    ],
    testimonials: [
      {
        author: 'Jane Bennet',
        text: 'We could not have chosen a better venue. The rooms were perfectly sized for our gathering.'
      }
    ]
  },
  {
    id: '3',
    name: 'Barton Park',
    description: 'A charming country estate perfect for intimate celebrations. Our grounds offer beautiful views of the Devonshire countryside.',
    category: 'venue',
    location: 'Devonshire',
    imageUrl: '/images/vendors/barton.jpg',
    priceRange: '£££',
    rating: {
      reputation: 4,
      elegance: 4,
      value: 5
    },
    features: [
      'Country house setting',
      'Music room',
      'Garden terrace',
      'Private chapel',
      'Countryside views'
    ],
    testimonials: [
      {
        author: 'Marianne Dashwood',
        text: 'The perfect blend of elegance and natural beauty. The music room is particularly delightful.'
      }
    ]
  },
  {
    id: '4',
    name: 'Mansfield Park',
    description: 'An elegant estate offering both grandeur and intimacy for your special day. Our chapel and grounds provide multiple options for ceremonies.',
    category: 'venue',
    location: 'Northamptonshire',
    imageUrl: '/images/vendors/mansfield.jpg',
    priceRange: '££££',
    rating: {
      reputation: 5,
      elegance: 5,
      value: 4
    },
    features: [
      'Private chapel',
      'Formal gardens',
      'East room',
      'Multiple reception spaces',
      'Wilderness walk'
    ],
    testimonials: [
      {
        author: 'Fanny Price',
        text: 'The chapel holds such special memories, and the grounds are perfect for quiet moments of reflection.'
      }
    ]
  },
  {
    id: '5',
    name: 'Longbourn Catering Services',
    description: 'Exquisite dining experiences for your special day. Our skilled staff ensures every detail is perfect, from intimate family gatherings to grand celebrations.',
    category: 'catering',
    location: 'Hertfordshire',
    imageUrl: '/images/vendors/catering.jpg',
    priceRange: '£££',
    rating: {
      reputation: 5,
      elegance: 4,
      value: 5
    },
    features: [
      'Custom menu planning',
      'Local seasonal ingredients',
      'Formal dinner service',
      'Wedding breakfast',
      'Evening refreshments'
    ],
    testimonials: [
      {
        author: 'Charlotte Lucas',
        text: 'The attention to detail was remarkable. Every dish was perfectly prepared and beautifully presented.'
      }
    ]
  },
  {
    id: '6',
    name: 'Devonshire Blooms',
    description: 'Creating enchanting floral arrangements that capture the natural beauty of the English countryside. Specializing in seasonal flowers and romantic designs.',
    category: 'flowers',
    location: 'Devonshire',
    imageUrl: '/images/vendors/flowers.jpg',
    priceRange: '£££',
    rating: {
      reputation: 5,
      elegance: 5,
      value: 4
    },
    features: [
      'Bridal bouquets',
      'Church decorations',
      'Reception arrangements',
      'Seasonal flowers',
      'Garden-inspired designs'
    ],
    testimonials: [
      {
        author: 'Marianne Dashwood',
        text: 'The wildflower arrangements perfectly captured the romantic spirit of our celebration.'
      }
    ]
  },
  {
    id: '7',
    name: 'Mrs. Bennet\'s Matchmaking Services',
    description: 'With years of experience in bringing together the finest matches in society, we offer discrete and personalized matchmaking services for discerning clients.',
    category: 'matchmaking',
    location: 'Hertfordshire',
    imageUrl: '/images/vendors/matchmaking.jpg',
    priceRange: '££',
    rating: {
      reputation: 4,
      elegance: 3,
      value: 5
    },
    features: [
      'Personal introductions',
      'Society connections',
      'Discrete service',
      'County-wide network',
      'Pre-event consultations'
    ],
    testimonials: [
      {
        author: 'Jane Bennet',
        text: 'A most fortuitous introduction that led to the happiest of outcomes.'
      }
    ]
  },
  {
    id: '8',
    name: 'Madame Laurent\'s Modiste',
    description: 'Creating exquisite wedding attire that combines timeless elegance with the latest London fashions. Each piece is carefully crafted to ensure the perfect fit.',
    category: 'modiste',
    location: 'London',
    imageUrl: '/images/vendors/modiste.jpg',
    priceRange: '££££',
    rating: {
      reputation: 5,
      elegance: 5,
      value: 4
    },
    features: [
      'Custom designs',
      'Finest materials',
      'Multiple fittings',
      'Wedding party attire',
      'Accessories available'
    ],
    testimonials: [
      {
        author: 'Elizabeth Bennet',
        text: 'My wedding dress exceeded all expectations. The attention to detail was remarkable.'
      }
    ]
  },
  {
    id: '9',
    name: 'The Tilney Quartet',
    description: 'Providing elegant musical entertainment for your celebration. From classical pieces to country dances, we ensure your celebration is filled with perfect harmony.',
    category: 'music',
    location: 'Bath',
    imageUrl: '/images/vendors/music.jpg',
    priceRange: '£££',
    rating: {
      reputation: 5,
      elegance: 5,
      value: 4
    },
    features: [
      'String quartet',
      'Piano accompaniment',
      'Country dance music',
      'Ceremony music',
      'Evening entertainment'
    ],
    testimonials: [
      {
        author: 'Catherine Morland',
        text: 'The music was absolutely enchanting, perfect for both the ceremony and dancing.'
      }
    ]
  }
];
