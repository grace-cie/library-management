import React, { useEffect } from 'react';
import bookimg from '../assets/bookimg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/bookSlice';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Books = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {book.isLoading ? (
        <Loading />
      ) : (
        <div className='flex content-center flex-wrap justify-center'>
          {book.books.map((book) => (
            <div
              className='max-w-sm rounded overflow-hidden shadow-lg flex w-1/3 m-10'
              key={book._id}
            >
              <div>
                <Link to={`${book._id}`}>
                  <img
                    className='w-full'
                    src={bookimg}
                    alt='sunset in the mountains'
                  />
                </Link>
                <div className='px-6 py-4'>
                  <div className='font bold text-xl mb-2'>{book.bookTitle}</div>
                  <div className='text-gray-500 text-sm mb-2'>
                    {book.author}
                  </div>
                  <p className='text-gray-700 text-base'>{book.description}</p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {book.publishDate}
                  </span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <span className='text-amber-500'> {book.rating}</span>
                  </span>
                  <span
                    className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                      !book.available ? 'text-red-500' : 'text-blue-500'
                    }`}
                  >
                    {!book.available ? 'not available' : 'available'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Books;
