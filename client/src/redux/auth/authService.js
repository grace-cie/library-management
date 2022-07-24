import axios from 'axios';

const API_URL_REGISTER = '/api/auth/register'; // url for register
const API_URL_LOGIN = '/api/auth/login'; // url for login

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  if (response.data) {
    localStorage.setItem('access-token', JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem('access-token');
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem('access-token', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
