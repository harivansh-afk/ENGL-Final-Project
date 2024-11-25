import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/Layout';
import Routes from '@/components/Routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;