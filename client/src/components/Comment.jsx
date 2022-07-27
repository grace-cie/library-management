import React from 'react';

const Comment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class='flex ml-[150px] mt-[40px] '>
      <div class='h-80 px-7 w-[700px] rounded-[12px] bg-white p-4'>
        <p class='text-xl font-semibold text-indigo-600  transition-all'>
          Add Comment
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            class='h-40 px-3 text-sm py-1 mt-5 outline-none border-pink-300 w-full resize-none border rounded-lg placeholder:text-sm'
            placeholder='Add your comments here'
          ></textarea>

          <div class='flex justify-between mt-2'>
            <button class='h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-indigo-600'>
              Submit comment
            </button>
            <p class='text-sm text-indigo-600 '>Enter atleast 15 characters</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
