import { useState } from 'react';
import type { VendorListing } from '../types';

const SAMPLE_VENDORS: VendorListing[] = [
  {
    id: '1',
    name: 'Pemberley Estate',
    description: 'A grand estate offering the perfect setting for your matrimonial celebration. With its extensive grounds and elegant halls, Pemberley provides an atmosphere of refined sophistication that would please even the most discerning of couples.',
    category: 'venue',
    location: 'Derbyshire',
    imageUrl: '/images/pemberley.jpg'
  },
  {
    id: '2',
    name: 'Mrs. Bennet\'s Matchmaking Services',
    description: 'With five daughters successfully married off, Mrs. Bennet brings her expertise to your search for the perfect match. Specializing in gentlemen of good fortune.',
    category: 'services',
    location: 'Longbourn, Hertfordshire',
    imageUrl: '/images/matchmaking.jpg'
  },
  {
    id: '3',
    name: 'Modiste Madame Delafield',
    description: 'Exquisite wedding attire that combines Regency elegance with modern sensibilities. Our designs have graced the most fashionable assemblies in Bath.',
    category: 'attire',
    location: 'Bath',
    imageUrl: '/images/modiste.jpg'
  },
  {
    id: '4',
    name: 'Meryton Assembly Catering',
    description: 'From intimate family dinners to grand balls, we provide the finest refreshments worthy of any social occasion. Known for our delectable white soup.',
    category: 'catering',
    location: 'Meryton',
    imageUrl: '/images/catering.jpg'
  }
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState<VendorListing['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVendors = SAMPLE_VENDORS.filter(vendor => {
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Vendor Directory</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Discover the finest establishments and services to ensure your special day is nothing short of perfect
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          {(['all', 'venue', 'services', 'attire', 'catering'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedCategory === category
                  ? 'bg-sage-500 text-white'
                  : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search vendors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border border-sage-200 focus:ring-sage-500 focus:border-sage-500"
        />
      </div>

      {/* Vendor Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVendors.map((vendor) => (
          <article key={vendor.id} className="bg-cream-50 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-sage-200">
              {/* In a real app, this would be a proper image */}
              <div className="w-full h-48 bg-sage-300" />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h2 className="font-cormorant text-2xl text-sage-900 mb-2">{vendor.name}</h2>
                <p className="text-sage-700 text-sm mb-2">{vendor.location}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs capitalize bg-sage-100 text-sage-700">
                  {vendor.category}
                </span>
              </div>
              <p className="text-sage-700">{vendor.description}</p>
              <button className="w-full bg-sage-500 text-white px-4 py-2 rounded-lg hover:bg-sage-600 transition">
                Request Information
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredVendors.length === 0 && (
        <div className="text-center py-12 text-sage-700">
          No vendors found matching your criteria
        </div>
      )}
    </div>
  );
};

export default Vendors;
