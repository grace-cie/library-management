import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Users = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <p>List Of Users</p>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
