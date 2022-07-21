import React from 'react';
import Books from '../components/Books';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
