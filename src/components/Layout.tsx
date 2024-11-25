import { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background font-serif">
      <Navbar />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;