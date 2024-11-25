import { Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              A satirical exploration of marriage plots in Jane Austen's works,
              blending Regency-era wisdom with modern wedding culture.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blogs" className="text-muted-foreground hover:text-primary">
                  Character Blogs
                </a>
              </li>
              <li>
                <a href="/dear-jane" className="text-muted-foreground hover:text-primary">
                  Dear Jane
                </a>
              </li>
              <li>
                <a href="/quiz" className="text-muted-foreground hover:text-primary">
                  Which Austen Bride Are You?
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Connect</h3>
            <p className="text-muted-foreground">
              Follow us for more Austen-inspired wedding wisdom and satire.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>and Jane Austen's wit</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;