// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
