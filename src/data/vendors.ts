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
  }
];
