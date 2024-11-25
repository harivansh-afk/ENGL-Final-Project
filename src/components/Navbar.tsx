import { Link } from 'react-router-dom';
import { Feather, Heart, BookOpen, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Feather className="h-6 w-6" />
          <span className="font-serif text-xl">Austen's Wedding Guide</span>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Advice</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link to="/blogs" className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Character Blogs</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dear-jane" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Dear Jane</span>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/quiz">
                <Button variant="ghost">
                  <Users className="mr-2 h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/success-stories">
                <Button variant="ghost">
                  <Heart className="mr-2 h-4 w-4" />
                  Success Stories
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Navbar;