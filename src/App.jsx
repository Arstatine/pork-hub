import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <Router>
      <div className='flex flex-col justify-between min-h-screen'>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <AppRoutes searchText={searchText} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
