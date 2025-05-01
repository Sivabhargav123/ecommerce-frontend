
import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import ProductListingPage from './pages/Products';
import FullCartPage from './components/FullCartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BGCover from './assets/ecommerceBG.jpg'


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    
    <CartProvider>
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: `url(${BGCover})` }}
    ></div>
  
    <div id="products" className="App min-h-screen pt-24 bg-white/80 dark:bg-gray-900/80 text-black dark:text-white relative z-10">
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Hero />
      <ProductListingPage searchQuery={searchQuery} />
      <FullCartPage />
      <Footer />
    </div>
  </CartProvider>
  
  );
};

export default App;
