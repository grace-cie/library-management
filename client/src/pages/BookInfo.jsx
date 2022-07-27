import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

import bookimg from '../assets/bookimg.jpg';

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

  return (
    <>
      <Navbar />
      <h1 className='flex justify-center align-middle text-4xl mb-10 text-[#141212b6]'>
        BOOK DETAILS
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex w-full  bg-white flex-wrap lg:flex-nowrap'>
          <div className='lg:ml-24  flex-2 w-[600px] lg:w-9/11 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center'>
            <img src={bookimg} alt='' width='500px' />
          </div>

          <div className='relative w-[1000px] md:w-[900px] lg:w-[700px]'>
            <div className='lg:mt-10'>
              <div className='flex gap-3 p-2  font-semibold rounded'>
                Title <span className='text-gray-700'> {book.bookTitle}</span>
              </div>
              <div className='flex gap-3 p-2  font-semibold rounded'>
                Author <span className='text-gray-700'> {book.author}</span>
              </div>
              <div className='flex gap-3 p-2  font-semibold rounded'>
                Description
                <span className='text-gray-700'> {book.description}</span>
              </div>
              <div className='flex gap-3 p-2  font-semibold rounded'>
                Rating/s:
                <span className='text-amber-500'> {book.rating}</span>
              </div>
              <div className='flex gap-3 p-2  font-semibold rounded'>
                <span
                  className={`${
                    !book.available ? 'text-red-500' : 'text-blue-500'
                  }`}
                >
                  {!book.available ? 'not available' : 'available'}
                </span>
              </div>
              <div>
                <div className='mt-10'>
                  <button
                    disabled={book.available == null}
                    className={`flex px-8 py-3 border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 ${
                      !book.available ? 'cursor-not-allowed' : ''
                    }`}
                    onClick={() => {
                      console.log('hello world');
                    }}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Comment />

      <Footer />
    </>
  );
};

export default BookInfo;
