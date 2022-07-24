import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = registerData;

  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.name,
    }));
  };

  const handleRegister = () => {};

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto'>
        <form className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
          <h1 className='text-xl font-medium mt-5 mb-10 flex justify-center'>
            Register
          </h1>
          <div>
            <label for='email' className='text-sm font-medium'>
              Name
            </label>
            <div className='relative mt-1'>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter name'
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label for='email' className='text-sm font-medium'>
              Email
            </label>
            <div className='relative mt-1'>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter email'
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label for='password' className='text-sm font-medium'>
              Password
            </label>
            <div className='relative mt-1'>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter password'
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label for='password' className='text-sm font-medium'>
              Confirm Password
            </label>
            <div className='relative mt-1'>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='confirm password'
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type='submit'
            className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-400 rounded-lg mt-5 '
            onClick={handleRegister}
          >
            Register
          </button>
          <p className='text-sm text-center text-gray-500'>
            Already Have an account?
            <Link to='/login'>
              <span className='underline'> Login Here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
