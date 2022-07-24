import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bookimg from '../assets/bookimg.jpg';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const getBook = await axios.get('api/books');

      setBooks(getBook.data);
    };
    fetchAllBooks();
  }, []);

  return (
    <div className='flex content-center flex-wrap justify-center'>
      {books.map((book) => (
        <div
          className='max-w-sm rounded overflow-hidden shadow-lg flex w-1/3 m-10'
          key={book._id}
        >
          <div>
            <img
              className='w-full'
              src={bookimg}
              alt='Sunset in the mountains'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{book.bookTitle}</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {book.publishDate}
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Rating: {book.rating}
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Availability:{book.isAvailable}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
