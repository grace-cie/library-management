import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className='w-full mt-24 text-gray-600 py-y px-2 '>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-2'>Information</h6>
          <ul>
            <li className='py-1'>Location</li>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Terms</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Management</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Partners</li>
            <li className='py-1'>Old Books</li>
          </ul>
        </div>

        <div className='col-span-2 gap-5 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input
              className='w-full p-2 mr-4 rounded-md mb-4'
              type='email'
              placeholder='Enter email..'
            />
            <button className='p-2 mb-4 bg-black text-white rounded-lg'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>{getYear} Booker, LLC. All rights reserved</p>
        <div className='flex gap-10 sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
