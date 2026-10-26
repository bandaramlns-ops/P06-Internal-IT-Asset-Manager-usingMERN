import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getUsers = async () => {
  const response = await API.get('/users');
  return response.data;
};

export const getUser = async (id) => {
  const response = await API.get(`/user/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await API.post('/user', user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await API.put(`/update/user/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`/delete/user/${id}`);
  return response.data;
};