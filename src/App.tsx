import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost/BlogPost';
import { ErrorBoundary } from './components/ErrorBoundary';
import SuccessStories from './pages/SuccessStories';
import Analysis from './pages/Analysis';

// Lazy load other pages
const Quiz = React.lazy(() => import('./pages/Quiz'));
const Advice = React.lazy(() => import('./pages/Advice'));
const Vendors = React.lazy(() => import('./pages/Vendors'));
const MarketCalculator = React.lazy(() => import('./pages/MarketCalculator'));

function App() {
  return (
    <Router>
      <MainLayout>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogPost />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/market-calculator" element={<MarketCalculator />} />
              <Route path="/analysis" element={<Analysis />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Router>
  );
}

export default App;
