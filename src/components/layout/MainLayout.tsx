import { Toaster } from '@/components/ui/toaster';
import Navbar from '../Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-sage-100 border-t border-sage-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center font-cormorant text-sage-900">
            <p className="text-lg">"It is a truth universally acknowledged..."</p>
            <p className="mt-2">© {new Date().getFullYear()} Austen's Wedding Guide</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default MainLayout;
