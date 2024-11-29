import { Star } from 'lucide-react';
import { VendorListing } from '@/types/vendors';
import { cn } from '@/lib/utils';

type VendorCardProps = {
  vendor: VendorListing;
  onClick?: () => void;
};

const VendorCard = ({ vendor, onClick }: VendorCardProps) => {
  const { name, description, category, location, priceRange, rating, imageUrl } = vendor;

  const renderRatingStars = (value: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          'h-4 w-4',
          index < value ? 'fill-sage-500 text-sage-500' : 'text-sage-200'
        )}
      />
    ));
  };

  return (
    <article
      onClick={onClick}
      className="group bg-cream-50 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9 bg-sage-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
          />
        ) : (
          <div className="w-full h-48 bg-sage-300 group-hover:opacity-90 transition-opacity">
            <div className="w-full h-full flex items-center justify-center text-sage-600 font-cormorant text-xl">
              {name}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-cormorant text-2xl text-sage-900">{name}</h2>
            <span className="text-sage-700 font-medium">{priceRange}</span>
          </div>
          <p className="text-sage-700 text-sm mb-2">{location}</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs capitalize bg-sage-100 text-sage-700">
            {category}
          </span>
        </div>

        <p className="text-sage-700 line-clamp-2">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-sage-600">Reputation</span>
            <div className="flex">{renderRatingStars(rating.reputation)}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-sage-600">Elegance</span>
            <div className="flex">{renderRatingStars(rating.elegance)}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-sage-600">Value</span>
            <div className="flex">{renderRatingStars(rating.value)}</div>
          </div>
        </div>

        <button className="w-full bg-sage-500 text-white px-4 py-2 rounded-lg hover:bg-sage-600 transition">
          View Details
        </button>
      </div>
    </article>
  );
};

export default VendorCard;
