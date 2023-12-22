import { Route, Routes } from 'react-router-dom';
import { Home, Photos, Videos, Recipes, Market } from '../views';

function AppRoutes({ searchText }) {
  return (
    <Routes>
      <Route index element={<Home searchText={searchText} />} />
      <Route path='photos' element={<Photos searchText={searchText} />} />
      <Route path='videos' element={<Videos searchText={searchText} />} />
      <Route path='recipes' element={<Recipes searchText={searchText} />} />
      <Route path='market' element={<Market searchText={searchText} />} />
    </Routes>
  );
}

export default AppRoutes;
