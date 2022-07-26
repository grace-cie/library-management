import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

const BookInfo = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { bookId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/books/${bookId}`
        );

        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getBook();
  }, []);

  console.log(bookId);
  return (
    <>
      <Navbar />
      <h1 className='flex justify-center align-middle'>BOOK DETAILS</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{book.bookTitle}</h1>
          <h1>{book.author}</h1>
          <h1>{book.description}</h1>
          <h1>{book.rating}</h1>
        </div>
      )}
      <Comment />
      <Footer />
    </>
  );
};

export default BookInfo;
