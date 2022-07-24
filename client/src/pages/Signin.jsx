import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../redux/auth/authSlice';
import Loading from '../components/Loading';

const Signin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto'>
        <form className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
          <h1 className='text-xl font-medium mt-5 mb-10 flex justify-center'>
            Welcome
          </h1>
          <div>
            <label className='text-sm font-medium'>Email</label>
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
            <label className='text-sm font-medium'>Password</label>
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
          <button
            type='submit'
            className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-400 rounded-lg mt-5 '
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className='text-sm text-center text-gray-500'>
            No account?
            <Link to='/register'>
              <span className='underline'> Register Here</span>
            </Link>
          </p>
          <p className='text-sm text-center text-gray-500'>
            <Link to='/'>Go Back To Hompage</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
