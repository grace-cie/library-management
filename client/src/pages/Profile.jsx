import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <h1>Welcome {user && user.details.name}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
