import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

// Lazy load other pages
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Quiz = React.lazy(() => import('./pages/Quiz'));
const Advice = React.lazy(() => import('./pages/Advice'));
const Vendors = React.lazy(() => import('./pages/Vendors'));
const Stories = React.lazy(() => import('./pages/Stories'));
const MarketCalculator = React.lazy(() => import('./pages/MarketCalculator'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/*" element={<Blogs />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/calculator" element={<MarketCalculator />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
