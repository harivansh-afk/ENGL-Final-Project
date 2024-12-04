import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-cream-100 rounded-lg">
        <h1 className="font-cormorant text-5xl text-sage-900 mb-4">
          Welcome to Austen's Wedding Guide
        </h1>
        <p className="font-lato text-lg text-sage-700 max-w-2xl mx-auto">
          Your modern guide to matrimonial bliss, as Jane Austen would have imagined it
        </p>
      </section>

      {/* Featured Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Literary Analysis */}
        <Link to="/analysis" className="feature-card">
          <div className="bg-sage-50 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="font-cormorant text-2xl text-sage-900 mb-3">Literary Analysis</h2>
            <p className="text-sage-700">
              Explore themes, characters, and social commentary in Austen's timeless works
            </p>
          </div>
        </Link>

        {/* Character Blogs */}
        <Link to="/blogs" className="feature-card">
          <div className="bg-sage-50 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="font-cormorant text-2xl text-sage-900 mb-3">Character Blogs</h2>
            <p className="text-sage-700">
              Wisdom and wit from Charlotte Lucas's practical advice to Marianne Dashwood's romantic musings
            </p>
          </div>
        </Link>

        {/* Bride Quiz */}
        <Link to="/quiz" className="feature-card">
          <div className="bg-rose-50 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="font-cormorant text-2xl text-sage-900 mb-3">Which Austen Bride Are You?</h2>
            <p className="text-sage-700">
              Discover your literary matrimonial counterpart through our delightful quiz
            </p>
          </div>
        </Link>

        {/* Success Stories */}
        <Link to="/success-stories" className="feature-card">
          <div className="bg-rose-100 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="font-cormorant text-2xl text-sage-900 mb-3">Success Stories</h2>
            <p className="text-sage-700">
              Real tales of romance from our beloved characters
            </p>
          </div>
        </Link>

        {/* Vendor Directory */}
        <Link to="/vendors" className="feature-card">
          <div className="bg-sage-100 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="font-cormorant text-2xl text-sage-900 mb-3">Vendor Directory</h2>
            <p className="text-sage-700">
              From Pemberley Estate venues to Mrs. Bennet's matchmaking services
            </p>
          </div>
        </Link>
      </div>

      {/* Quote Section */}
      <section className="text-center py-12 bg-sage-50 rounded-lg">
        <blockquote className="font-cormorant text-2xl text-sage-900 italic">
          "It is a truth universally acknowledged, that a single person in possession of a good fortune, must be in want of a spouse."
        </blockquote>
        <p className="mt-4 text-sage-700">- Adapted from Pride and Prejudice</p>
      </section>
    </div>
  );
};

export default Home;
