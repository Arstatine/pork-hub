import { Route, Routes } from 'react-router-dom';
import { Home, Photos, Videos, Recipes, Market } from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='photos' element={<Photos />} />
      <Route path='videos' element={<Videos />} />
      <Route path='recipes' element={<Recipes />} />
      <Route path='market' element={<Market />} />
    </Routes>
  );
}

export default AppRoutes;
