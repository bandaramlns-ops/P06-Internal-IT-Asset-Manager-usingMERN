import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/users',
});

export const getUsers = async () => {
  const response = await API.get('/');
  return response.data;
};

export const getUser = async (id) => {
  const response = await API.get(`/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await API.post('/', user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await API.put(`/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};