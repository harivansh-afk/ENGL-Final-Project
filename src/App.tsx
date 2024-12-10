import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import SuccessStories from './pages/SuccessStories';
import Analysis from './pages/Analysis';
import ComparativeAnalysis from './pages/ComparativeAnalysis';
import NetworkVisualization from './pages/NetworkVisualization';
import Timeline from './pages/Timeline';
import SocialClass from './pages/SocialClass';
import MyExperience from './pages/MyExperience';

// Lazy load other pages
const Quiz = React.lazy(() => import('./pages/Quiz'));
const Vendors = React.lazy(() => import('./pages/Vendors'));
const MarketCalculator = React.lazy(() => import('./pages/MarketCalculator'));

function App() {
  return (
    <Router basename="/">
      <MainLayout>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/market-calculator" element={<MarketCalculator />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/comparative" element={<ComparativeAnalysis />} />
              <Route path="/network" element={<NetworkVisualization />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/social-class" element={<SocialClass />} />
              <Route path="/my-experience" element={<MyExperience />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Router>
  );
}

export default App;
