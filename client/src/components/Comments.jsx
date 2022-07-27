import React from 'react';

const Comments = () => {
  const date = new Date().toLocaleDateString();

  return (
    <div className='flex gap-5 mt-[50px] ml-[180px] '>
      <div>
        <p>Charie Yu</p>
      </div>
      <div>
        <p>Best Book to Read!</p>
      </div>
      <div className=''>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Comments;
