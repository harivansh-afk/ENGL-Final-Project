import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-sage-700" />
            <span className="font-cormorant text-xl text-sage-900">Austen's Wedding Guide</span>
          </Link>

          <nav className="flex items-center">
            <div className="flex items-center space-x-2 mr-6">
              <Link
                to="/blogs"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Character Blogs
              </Link>
              <Link
                to="/quiz"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Bride Quiz
              </Link>
              <Link
                to="/vendors"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Vendors
              </Link>
              <Link
                to="/success-stories"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Success Stories
              </Link>
              <Link
                to="/market-calculator"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Market Value
              </Link>
            </div>

            <div className="flex items-center space-x-2 border-l border-sage-200 pl-6">
              <Link
                to="/analysis"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Literary Analysis
              </Link>
              <Link
                to="/network"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 px-4 py-2 rounded-md transition-colors"
              >
                Character Network
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
