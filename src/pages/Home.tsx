import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Heart,
  PenTool,
  Calendar,
  Users,
  Calculator,
  Store,
  Trophy,
  Network,
  BookText
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cream-100 to-sage-50 py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h1 className="font-cormorant text-7xl text-sage-900 leading-tight">
                Discover the Art of <span className="text-sage-700">Matrimony</span> Through Austen
              </h1>
              <p className="font-lato text-xl text-sage-700 leading-relaxed">
                A modern exploration of marriage, society, and romance through Jane Austen's timeless lens.
                Uncover wedding wisdom and romantic insights from literature's most beloved matchmaker.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/analysis"
                  className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-all transform hover:scale-105"
                >
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/quiz"
                  className="inline-flex items-center px-8 py-4 bg-cream-200 text-sage-700 rounded-lg hover:bg-cream-300 transition-all transform hover:scale-105"
                >
                  Take the Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-sage-100 shadow-lg transform hover:-translate-y-1 transition-all">
                  <Network className="h-8 w-8 text-sage-600 mb-3" />
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">Character Network</h3>
                  <p className="text-sage-700 text-sm mb-3">
                    Explore relationships and connections between characters.
                  </p>
                  <Link
                    to="/network"
                    className="text-sage-600 hover:text-sage-800 text-sm inline-flex items-center"
                  >
                    View Network <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-sage-100 shadow-lg transform hover:-translate-y-1 transition-all mt-4">
                  <Calculator className="h-8 w-8 text-sage-600 mb-3" />
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">Market Calculator</h3>
                  <p className="text-sage-700 text-sm mb-3">
                    Calculate dowries and estates in modern terms.
                  </p>
                  <Link
                    to="/market-calculator"
                    className="text-sage-600 hover:text-sage-800 text-sm inline-flex items-center"
                  >
                    Try Calculator <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-sage-100 shadow-lg transform hover:-translate-y-1 transition-all">
                  <Calendar className="h-8 w-8 text-sage-600 mb-3" />
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">Timeline</h3>
                  <p className="text-sage-700 text-sm mb-3">
                    Journey through Austen's literary universe.
                  </p>
                  <Link
                    to="/timeline"
                    className="text-sage-600 hover:text-sage-800 text-sm inline-flex items-center"
                  >
                    Explore Timeline <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-sage-100 shadow-lg transform hover:-translate-y-1 transition-all">
                  <Trophy className="h-8 w-8 text-sage-600 mb-3" />
                  <h3 className="font-cormorant text-xl text-sage-900 mb-2">Success Stories</h3>
                  <p className="text-sage-700 text-sm mb-3">
                    Real stories inspired by Austen's works.
                  </p>
                  <Link
                    to="/success-stories"
                    className="text-sage-600 hover:text-sage-800 text-sm inline-flex items-center"
                  >
                    Read Stories <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-5xl text-sage-900 text-center mb-16">
          Explore Our Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-sage-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <BookOpen className="h-12 w-12 text-sage-600 mb-4" />
            <h3 className="font-cormorant text-2xl text-sage-900 mb-3">Literary Analysis</h3>
            <p className="text-sage-700 mb-4">
              Deep dive into Austen's works, exploring themes of marriage, social class, and romance.
            </p>
            <Link
              to="/analysis"
              className="inline-flex items-center px-6 py-3 bg-sage-50 text-sage-700 rounded-lg hover:bg-sage-100 transition-all"
            >
              Start Analysis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-sage-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <Users className="h-12 w-12 text-sage-600 mb-4" />
            <h3 className="font-cormorant text-2xl text-sage-900 mb-3">Social Class Study</h3>
            <p className="text-sage-700 mb-4">
              Understand the social dynamics and class structures in Austen's world.
            </p>
            <Link
              to="/social-class"
              className="inline-flex items-center px-6 py-3 bg-sage-50 text-sage-700 rounded-lg hover:bg-sage-100 transition-all"
            >
              Study Society <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-sage-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <Store className="h-12 w-12 text-sage-600 mb-4" />
            <h3 className="font-cormorant text-2xl text-sage-900 mb-3">Wedding Vendors</h3>
            <p className="text-sage-700 mb-4">
              Discover curated vendors who bring Austen's elegance to modern weddings.
            </p>
            <Link
              to="/vendors"
              className="inline-flex items-center px-6 py-3 bg-sage-50 text-sage-700 rounded-lg hover:bg-sage-100 transition-all"
            >
              Meet Vendors <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-5xl text-sage-900 text-center mb-12">
            Interactive Experience
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <PenTool className="h-10 w-10 text-sage-600 mt-1 group-hover:scale-110 transition-all" />
                  <div>
                    <h3 className="font-cormorant text-2xl text-sage-900 mb-2 group-hover:text-sage-700 transition-all">
                      Character Quiz
                    </h3>
                    <p className="text-sage-700 mb-3">
                      Discover which Austen bride matches your personality and romantic outlook.
                    </p>
                    <Link
                      to="/quiz"
                      className="text-sage-600 hover:text-sage-800 inline-flex items-center text-sm"
                    >
                      Take Quiz Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-6 group cursor-pointer">
                  <BookText className="h-10 w-10 text-sage-600 mt-1 group-hover:scale-110 transition-all" />
                  <div>
                    <h3 className="font-cormorant text-2xl text-sage-900 mb-2 group-hover:text-sage-700 transition-all">
                      Comparative Analysis
                    </h3>
                    <p className="text-sage-700 mb-3">
                      Compare themes and character arcs across different novels and adaptations.
                    </p>
                    <Link
                      to="/comparative-analysis"
                      className="text-sage-600 hover:text-sage-800 inline-flex items-center text-sm"
                    >
                      Compare Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-6 group cursor-pointer">
                  <Calculator className="h-10 w-10 text-sage-600 mt-1 group-hover:scale-110 transition-all" />
                  <div>
                    <h3 className="font-cormorant text-2xl text-sage-900 mb-2 group-hover:text-sage-700 transition-all">
                      Market Calculator
                    </h3>
                    <p className="text-sage-700 mb-3">
                      Convert historical finances to modern values and understand marriage economics.
                    </p>
                    <Link
                      to="/market-calculator"
                      className="text-sage-600 hover:text-sage-800 inline-flex items-center text-sm"
                    >
                      Calculate Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-700 p-8 rounded-xl text-white">
              <h3 className="font-cormorant text-3xl mb-8">Why Study Austen?</h3>
              <div className="space-y-6">
                <p className="text-cream-100 text-lg">
                  Jane Austen's works offer timeless insights into love, marriage, and social dynamics that remain remarkably relevant today.
                </p>
                <div className="space-y-4">
                  <h4 className="font-cormorant text-xl text-cream-100">Our Platform Provides:</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-cream-100">
                      <BookOpen className="h-5 w-5" />
                      Academic Analysis
                    </li>
                    <li className="flex items-center gap-2 text-cream-100">
                      <Heart className="h-5 w-5" />
                      Relationship Wisdom
                    </li>
                    <li className="flex items-center gap-2 text-cream-100">
                      <Users className="h-5 w-5" />
                      Social Insights
                    </li>
                    <li className="flex items-center gap-2 text-cream-100">
                      <PenTool className="h-5 w-5" />
                      Interactive Tools
                    </li>
                  </ul>
                </div>
                <Link
                  to="/analysis"
                  className="inline-flex items-center px-6 py-3 bg-white text-sage-700 rounded-lg hover:bg-cream-100 transition-all mt-4"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 text-center max-w-4xl py-16">
        <div className="space-y-12">
          <div>
            <blockquote className="font-cormorant text-4xl text-sage-900 italic leading-relaxed mb-4">
              "It isn't what we say or think that defines us, but what we do."
            </blockquote>
            <p className="text-sage-700 text-lg">- Jane Austen, Sense and Sensibility</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/80 p-8 rounded-xl border border-sage-100">
              <h3 className="font-cormorant text-2xl text-sage-900 mb-4">The Austen Legacy</h3>
              <p className="text-sage-700">
                Jane Austen's novels have captivated readers for over two centuries, offering sharp social commentary
                and timeless observations about love, marriage, and society. Her works continue to influence modern
                literature and popular culture.
              </p>
            </div>
            <div className="bg-white/80 p-8 rounded-xl border border-sage-100">
              <h3 className="font-cormorant text-2xl text-sage-900 mb-4">Historical Context</h3>
              <p className="text-sage-700">
                Writing during the Georgian era (1714-1830), Austen provided invaluable insights into the social
                dynamics, marriage customs, and gender roles of her time. Her observations remain remarkably
                relevant to modern relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
