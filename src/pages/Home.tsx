import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Mail, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-6xl">
          Welcome to Austen's Wedding Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A satirical blend of Regency-era matrimonial wisdom and modern wedding culture
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <BookOpen className="h-8 w-8" />
            <h3 className="font-serif text-xl">Character Blogs</h3>
            <p className="text-muted-foreground">
              Wisdom and wit from your favorite Austen characters
            </p>
            <Link to="/blogs">
              <Button className="w-full">Read Blogs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <Mail className="h-8 w-8" />
            <h3 className="font-serif text-xl">Dear Jane</h3>
            <p className="text-muted-foreground">
              Matrimonial advice with Austen's signature wit
            </p>
            <Link to="/dear-jane">
              <Button className="w-full">Seek Advice</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <Users className="h-8 w-8" />
            <h3 className="font-serif text-xl">Quiz</h3>
            <p className="text-muted-foreground">
              Discover which Austen bride matches your personality
            </p>
            <Link to="/quiz">
              <Button className="w-full">Take Quiz</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <Heart className="h-8 w-8" />
            <h3 className="font-serif text-xl">Success Stories</h3>
            <p className="text-muted-foreground">
              Tales of matrimonial triumph from the pages of Austen
            </p>
            <Link to="/success-stories">
              <Button className="w-full">Read Stories</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-3xl">Featured Quote</h2>
          <blockquote className="text-xl italic">
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
          </blockquote>
          <p className="text-muted-foreground">- Pride and Prejudice</p>
        </div>
      </section>
    </div>
  );
}

export default Home;