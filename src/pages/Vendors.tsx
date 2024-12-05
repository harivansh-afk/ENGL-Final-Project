import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { VendorListing, VendorCategory } from '@/types/vendors';
import { VENDOR_LISTINGS } from '@/data/vendors';
import VendorCard from '@/components/vendor/VendorCard';
import VendorModal from '@/components/vendor/VendorModal';
import { cn } from '@/lib/utils';

const CATEGORIES: VendorCategory[] = [
  'venue',
  'services',
  'attire',
  'catering',
  'music',
  'flowers',
  'matchmaking',
  'modiste'
];

const LOCATIONS = Array.from(
  new Set(VENDOR_LISTINGS.map(vendor => vendor.location))
).sort();

const PRICE_RANGES = [
  { value: 'all', label: 'All Price Ranges' },
  { value: '£', label: '£ - Budget Friendly' },
  { value: '££', label: '££ - Moderate' },
  { value: '£££', label: '£££ - Premium' },
  { value: '££££', label: '££££ - Luxury' },
  { value: '£££££', label: '£££££ - Ultra Luxury' }
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState<VendorCategory | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVendor, setSelectedVendor] = useState<VendorListing | null>(null);
  const [priceRange, setPriceRange] = useState<string | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredVendors = VENDOR_LISTINGS.filter(vendor => {
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || vendor.location === selectedLocation;
    const matchesPrice = priceRange === 'all' || vendor.priceRange === priceRange;
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesPrice && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="font-cormorant text-4xl text-sage-900">Vendor Directory</h1>
        <p className="text-sage-700 max-w-2xl mx-auto">
          Discover the finest establishments and services to ensure your special day is nothing short of perfect.
          From grand estates to skilled artisans, find everything you need for a celebration worthy of a Jane Austen novel.
        </p>
      </header>

      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search Bar and Filter Toggle */}
        <div className="relative max-w-2xl mx-auto flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sage-500" />
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-sage-200 focus:ring-sage-500 focus:border-sage-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-lg border border-sage-200 hover:bg-sage-50 transition-colors",
              showFilters && "bg-sage-50 border-sage-300"
            )}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filter Controls */}
        {showFilters && (
          <div className="max-w-2xl mx-auto bg-cream-50 rounded-lg p-6 space-y-6 border border-sage-200 shadow-sm">
            {/* Categories */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-sage-700">Category</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    selectedCategory === 'all'
                      ? "bg-sage-500 text-white"
                      : "bg-white border border-sage-200 text-sage-700 hover:bg-sage-50"
                  )}
                >
                  All Categories
                </button>
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm capitalize transition-colors",
                      selectedCategory === category
                        ? "bg-sage-500 text-white"
                        : "bg-white border border-sage-200 text-sage-700 hover:bg-sage-50"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-sage-700">Location</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLocation('all')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    selectedLocation === 'all'
                      ? "bg-sage-500 text-white"
                      : "bg-white border border-sage-200 text-sage-700 hover:bg-sage-50"
                  )}
                >
                  All Locations
                </button>
                {LOCATIONS.map(location => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-colors",
                      selectedLocation === location
                        ? "bg-sage-500 text-white"
                        : "bg-white border border-sage-200 text-sage-700 hover:bg-sage-50"
                    )}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-sage-700">Price Range</label>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setPriceRange(value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-colors",
                      priceRange === value
                        ? "bg-sage-500 text-white"
                        : "bg-white border border-sage-200 text-sage-700 hover:bg-sage-50"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-center text-sage-700">
        {filteredVendors.length} {filteredVendors.length === 1 ? 'vendor' : 'vendors'} found
      </div>

      {/* Vendor Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            onClick={() => setSelectedVendor(vendor)}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredVendors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sage-700 text-lg">No vendors found matching your criteria</p>
          <p className="text-sage-600 mt-2">Try adjusting your filters or search terms</p>
        </div>
      )}

      {/* Vendor Modal */}
      {selectedVendor && (
        <VendorModal
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
        />
      )}
    </div>
  );
};

export default Vendors;
