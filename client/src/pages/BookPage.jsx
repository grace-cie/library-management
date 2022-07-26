import React from 'react';
import Books from '../components/Books';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BookPage = () => {
  return (
    <>
      <Navbar />
      <Books />
      <Footer />
    </>
  );
};

export default BookPage;
