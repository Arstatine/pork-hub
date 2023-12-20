import { Route, Routes } from 'react-router-dom';
import { Home } from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
