import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { register, reset } from '../redux/auth/authSlice';
import Loading from '../components/Loading';
import validator from 'validator'


const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [Eerror, setEerror] = useState(null);
  const [Nerror, setNerror] = useState(null);
  const [Uerror, setUerror] = useState(null);
  const [Perror, setPerror] = useState(null);
  const [cPerror, setcPerror] = useState(null);

  const { name, username, email, password, confirmPassword } = registerData;

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        transition: Slide,
        theme: 'colored',
      });
    }

    if (isSuccess) {
      toast.success('you are now registered please login below');
      navigate('/login');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);


  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleRegister = (e) => {
    e.preventDefault();
    const n = 'Name'
    const u = 'UserName'
    const em = 'Email'
    const p = 'Password'

    if(name.length === 0){
      setNerror(`please provide a ${n}`)
    } else if(name.length <= 2){
      setNerror(`${n} must be more than 2 characters`)
    } else {
      setNerror(null)
      if(username.length === 0){
        setUerror(`Please provide a ${u}`)
      } else if(username.length <= 4){
        setUerror(`${u} must be more than 4 Characters`);
      } else if (username.length !== 0 || username.length >= 4){
        setUerror(null)
        if(email.length === 0){
          setEerror(`Please provide an ${em}`);
        } else if(!validator.isEmail(email)){
          setEerror(`${em} is invalid`)
        } else if (email.length !== 0 || validator.isEmail(email)) {
          setEerror(null)
          if(password.length === 0){
            setPerror(`Please provide a ${p}`);
          } else if (password.length <= 5 ){
            setPerror(`${p} must be more than 5 characters`);
          } else {
            setPerror(null)
            if (confirmPassword.length === 0) {
              setcPerror(`please confirm your ${p}`);
            } else if (password !== confirmPassword){
              setcPerror(`${p}'s do not match`);
            } else {
              const userData = {
                name,
                username,
                email,
                password,
              };
        
              dispatch(register(userData));
            }
          }
        }
      }
    }
     
    
    
    

    
  };

  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto'>
        <form className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
          <h1 className='text-xl font-medium mt-5 mb-10 flex justify-center'>
            Register
          </h1>
          <div>
            <label className='text-sm font-medium'>Name</label>
            <div className='relative mt-1'>
              {Nerror ? (
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm border-red-600'
                  placeholder='Enter name'
                  value={name}
                  onChange={handleChange}
              />
              ) : (<>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                  placeholder='Enter name'
                  value={name}
                  onChange={handleChange}
                />
              </>)}
              {Nerror && <h2 style={{color: 'red', fontSize: 14}}>{Nerror}</h2>}
            </div>
          </div>
          <div>
            <label className='text-sm font-medium'>username</label>
            <div className='relative mt-1'>
            {Uerror ? (
              <input
                type='text'
                id='username'
                name='username'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm border-red-600'
                placeholder='Enter username'
                value={username}
                onChange={handleChange}
              />
            ) : (<>
              <input
                type='text'
                id='username'
                name='username'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter username'
                value={username}
                onChange={handleChange}
              />
            </>)}
              {Uerror && <h2 style={{color: 'red', fontSize: 14}}>{Uerror}</h2>}
            </div>
          </div>
          <div>
            <label className='text-sm font-medium'>Email</label>
            <div className='relative mt-1'>
            {Eerror ? (
              <input
              type='email'
              id='email'
              name='email'
              className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm border-red-600'
              placeholder='Enter email'
              value={email}
              onChange={handleChange}
            />
            ) : (<>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter email'
                value={email}
                onChange={handleChange}
              />
            </>)}
            </div>
            {Eerror && <h2 style={{color: 'red', fontSize: 14}}>{Eerror}</h2>}
          </div>
          <div>
            <label className='text-sm font-medium'>Password</label>
            <div className='relative mt-1'>
            {Perror ? (
							<input
                type='password'
                id='password'
                name='password'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm border-red-600'
                placeholder='Enter password'
                value={password}
                onChange={handleChange}
            />
						) : (<>
							<input
                type='password'
                id='password'
                name='password'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='Enter password'
                value={password}
                onChange={handleChange}
              />
						</>)} 
              {Perror && <h2 style={{color: 'red', fontSize: 14,}}>{Perror}</h2>}
            </div>
          </div>
          <div>
            <label className='text-sm font-medium'>Confirm Password</label>
            <div className='relative mt-1'>
            {cPerror ? (
              <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm border-red-600'
              placeholder='confirm password'
              value={confirmPassword}
              onChange={handleChange}
            />
            ) : (<>
            <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='w-full p-3 pr-12 text-sm rounded-lg shadow-sm'
                placeholder='confirm password'
                value={confirmPassword}
                onChange={handleChange}
              />
            </>)}
              {cPerror && <h2 style={{color: 'red', fontSize: 14}}>{cPerror}</h2>}
            </div>
          </div>
          <button
            type='submit'
            className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg mt-5 '
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
