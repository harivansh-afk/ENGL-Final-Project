import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Quiz from '@/pages/Quiz';
import SuccessStories from '@/pages/SuccessStories';
import Analysis from '@/pages/Analysis';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/analysis" element={<Analysis />} />
    </RouterRoutes>
  );
}

export default Routes;
