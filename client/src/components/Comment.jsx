import React, { useState } from 'react';

import Comments from './Comments';

const Comment = ({ bookId }) => {
  const [text, setText] = useState({
    name: '',
    comment: '',
  });

  const { name, comment } = text;

  const handleChange = (e) => {
    setText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='flex ml-[150px] mt-[40px] '>
        <div className='h-80 px-7 w-[700px] rounded-[12px] bg-white p-4'>
          <p className='text-xl font-semibold text-indigo-600  transition-all'>
            Add Comment
          </p>
          <form onSubmit={handleSubmit}>
            <div className='relative mt-1'>
              <input
                type='text'
                name='name'
                value={name}
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='name'
                onChange={handleChange}
              />
            </div>
            <textarea
              className='h-40 px-3 text-sm py-1 mt-5 outline-none w-full resize-none border rounded-lg placeholder:text-sm'
              placeholder='Add your comments here'
              onChange={handleChange}
              name='comment'
              value={comment}
            ></textarea>

            <div className='flex justify-between mt-2'>
              <button className='h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-indigo-600'>
                Submit comment
              </button>
              <p className='text-sm text-indigo-600 '>
                Enter atleast 15 characters
              </p>
            </div>
          </form>
        </div>
      </div>
      <Comments />
    </>
  );
};

export default Comment;
