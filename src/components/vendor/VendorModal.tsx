import { Star, X } from 'lucide-react';
import { VendorListing } from '@/types/vendors';
import { cn } from '@/lib/utils';

type VendorModalProps = {
  vendor: VendorListing;
  onClose: () => void;
};

const VendorModal = ({ vendor, onClose }: VendorModalProps) => {
  const {
    name,
    description,
    category,
    location,
    priceRange,
    rating,
    features,
    contactPerson,
    testimonials,
    imageUrl
  } = vendor;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream-50 rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-sage-100 transition-colors"
        >
          <X className="h-6 w-6 text-sage-700" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-64 bg-sage-300 rounded-lg flex items-center justify-center">
                <span className="text-sage-600 font-cormorant text-2xl">{name}</span>
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-cormorant text-3xl text-sage-900 mb-2">{name}</h2>
                <p className="text-sage-700">{location}</p>
              </div>
              <span className="text-sage-700 font-medium text-lg">{priceRange}</span>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm capitalize bg-sage-100 text-sage-700">
              {category}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-cormorant text-xl text-sage-900 mb-2">About</h3>
                <p className="text-sage-700">{description}</p>
              </div>

              <div>
                <h3 className="font-cormorant text-xl text-sage-900 mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sage-700">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {contactPerson && (
                <div>
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">Contact Person</h3>
                  <p className="text-sage-700">{contactPerson}</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-cormorant text-xl text-sage-900 mb-4">Ratings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sage-700">Reputation</span>
                    <div className="flex">{renderRatingStars(rating.reputation)}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sage-700">Elegance</span>
                    <div className="flex">{renderRatingStars(rating.elegance)}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sage-700">Value</span>
                    <div className="flex">{renderRatingStars(rating.value)}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cormorant text-xl text-sage-900 mb-4">Testimonials</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="border-l-2 border-sage-200 pl-4">
                      <p className="text-sage-700 italic mb-2">{testimonial.text}</p>
                      <footer className="text-sage-600 text-sm">— {testimonial.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className="bg-sage-500 text-white px-6 py-2 rounded-lg hover:bg-sage-600 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorModal;
