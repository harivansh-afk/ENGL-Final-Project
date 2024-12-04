import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, PenTool, Calendar, BookMarked } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cream-100 to-sage-50 py-24">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h1 className="font-cormorant text-6xl text-sage-900 mb-6">
            Austen's Wedding Guide
          </h1>
          <p className="font-lato text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            A modern exploration of matrimony through Jane Austen's timeless lens.
            Discover wedding wisdom, social commentary, and romantic insights from literature's most beloved matchmaker.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-sage-100">
              <h3 className="font-cormorant text-2xl text-sage-900 mb-2">Interactive Timeline</h3>
              <p className="text-sage-700 mb-4">
                Journey through Austen's literary universe chronologically, exploring the evolution of romantic relationships and social dynamics across her works.
              </p>
              <Link
                to="/timeline"
                className="text-sage-600 hover:text-sage-800 inline-flex items-center"
              >
                Explore Timeline <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-sage-100">
              <h3 className="font-cormorant text-2xl text-sage-900 mb-2">Character Network</h3>
              <p className="text-sage-700 mb-4">
                Visualize the intricate web of relationships, social connections, and matrimonial prospects between Austen's memorable characters.
              </p>
              <Link
                to="/network"
                className="text-sage-600 hover:text-sage-800 inline-flex items-center"
              >
                View Network <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <Link
              to="/analysis"
              className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition"
            >
              Explore Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center px-6 py-3 bg-cream-100 text-sage-700 rounded-lg hover:bg-cream-200 transition"
            >
              Take the Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="font-cormorant text-4xl text-sage-900 text-center mb-12">
          Discover Our Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-sage-100 hover:shadow-md transition">
            <BookOpen className="h-10 w-10 text-sage-600 mb-4" />
            <h3 className="font-cormorant text-2xl text-sage-900 mb-3">Literary Analysis</h3>
            <p className="text-sage-700 mb-4">
              Deep dive into Austen's works, exploring themes of marriage, social class, and romance through academic lens.
            </p>
            <Link to="/analysis" className="text-sage-600 hover:text-sage-800 inline-flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-sage-100 hover:shadow-md transition">
            <Heart className="h-10 w-10 text-sage-600 mb-4" />
            <h3 className="font-cormorant text-2xl text-sage-900 mb-3">Success Stories</h3>
            <p className="text-sage-700 mb-4">
              Explore romantic tales and matrimonial journeys inspired by Austen's iconic love stories.
            </p>
            <Link to="/success-stories" className="text-sage-600 hover:text-sage-800 inline-flex items-center">
              View Stories <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl text-sage-900 text-center mb-12">
            Interactive Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PenTool className="h-8 w-8 text-sage-600 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl text-sage-900 mb-2">Character Quiz</h3>
                    <p className="text-sage-700">Discover which Austen bride matches your personality and romantic outlook.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-sage-600 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl text-sage-900 mb-2">Timeline Exploration</h3>
                    <p className="text-sage-700">Navigate through the chronological development of Austen's romantic narratives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookMarked className="h-8 w-8 text-sage-600 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl text-sage-900 mb-2">Comparative Analysis</h3>
                    <p className="text-sage-700">Compare themes and character arcs across different novels and their modern adaptations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sage-700 p-8 rounded-xl text-white">
              <h3 className="font-cormorant text-3xl mb-6">Why Austen's Guide?</h3>
              <div className="space-y-4">
                <p className="text-cream-100">
                  Jane Austen's works offer timeless insights into love, marriage, and social dynamics that remain relevant today.
                </p>
                <p className="text-cream-100">
                  Our platform bridges classical literature with modern relationship wisdom, providing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-cream-100">
                  <li>Academic analysis of romantic themes</li>
                  <li>Character-driven relationship advice</li>
                  <li>Modern interpretations of classic scenarios</li>
                  <li>Interactive tools for personal insight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 text-center max-w-4xl">
        <blockquote className="font-cormorant text-3xl text-sage-900 italic">
          "It isn't what we say or think that defines us, but what we do."
        </blockquote>
        <p className="mt-4 text-sage-700">- Jane Austen, Sense and Sensibility</p>
      </section>
    </div>
  );
};

export default Home;
