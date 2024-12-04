import { Link } from 'react-router-dom';
import { Feather, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Character Blogs', path: '/blogs' },
  { name: 'Bride Quiz', path: '/quiz' },
  { name: 'Vendors', path: '/vendors' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Market Value', path: '/market-calculator' },
];

const analysisItems = [
  { name: 'Literary Analysis', path: '/analysis' },
  { name: 'Character Network', path: '/network' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Social Class', path: '/social-class' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-cream-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-sage-700" />
            <span className="font-cormorant text-xl text-sage-900">Austen's Wedding Guide</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md p-2 text-sage-700 hover:bg-sage-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-sage-700 hover:bg-sage-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="h-6 mx-4 w-px bg-sage-200" />
            <div className="flex items-center space-x-1">
              {analysisItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-sage-700 hover:bg-sage-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden',
            isOpen ? 'block border-t border-sage-200' : 'hidden'
          )}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-sage-700 hover:bg-sage-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-sage-200" />
            {analysisItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-sage-700 hover:bg-sage-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
