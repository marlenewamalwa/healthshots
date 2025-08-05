import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const products = [
    {
      name: 'Ginger Shot',
      description: 'Pure ginger with lemon',
      price: 200,
    },
    {
      name: 'Turmeric Boost',
      description: 'Turmeric, black pepper & citrus',
      price: 250,
    },
  ];
  
  return (
    
    <>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
</Routes>

    </>
  );
}

export default App;
