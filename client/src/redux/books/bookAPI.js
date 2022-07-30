import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const getAllBooks = () => API.get('/api/books');
export const getBookById = (id) => axios.get(`/api/books/${id}`);
