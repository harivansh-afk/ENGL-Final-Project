import { Link } from 'react-router-dom';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-cream-50">
      <nav className="bg-sage-100 border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center font-cormorant text-2xl text-sage-900">
                Austen's Wedding Guide
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/blogs" className="nav-link">Character Blogs</Link>
              <Link to="/quiz" className="nav-link">Bride Quiz</Link>
              <Link to="/advice" className="nav-link">Dear Jane</Link>
              <Link to="/vendors" className="nav-link">Vendors</Link>
              <Link to="/stories" className="nav-link">Success Stories</Link>
              <Link to="/calculator" className="nav-link">Market Value</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-sage-100 border-t border-sage-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center font-cormorant text-sage-900">
            <p className="text-lg">"It is a truth universally acknowledged..."</p>
            <p className="mt-2">© {new Date().getFullYear()} Austen's Wedding Guide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
