export type VendorCategory =
  | 'venue'
  | 'services'
  | 'attire'
  | 'catering'
  | 'music'
  | 'flowers'
  | 'transport'
  | 'stationery'
  | 'matchmaking'
  | 'modiste';

export type VendorRating = {
  reputation: number;
  elegance: number;
  value: number;
};

export type VendorListing = {
  id: string;
  name: string;
  description: string;
  category: VendorCategory;
  location: string;
  imageUrl: string;
  priceRange: string;
  rating: VendorRating;
  features: string[];
  contactPerson?: string;
  testimonials: Array<{
    author: string;
    text: string;
  }>;
};
