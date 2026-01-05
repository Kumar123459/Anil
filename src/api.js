import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const authAPI = {
  signup: (name, email, password) =>
    axios.post(`${API_URL}/auth/signup`, { name, email, password }),
  login: (email, password) =>
    axios.post(`${API_URL}/auth/login`, { email, password }),
  getCurrentUser: (token) =>
    axios.get(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const categoryAPI = {
  getAll: (token) =>
    axios.get(`${API_URL}/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getById: (id, token) =>
    axios.get(`${API_URL}/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  create: (formData, token) =>
    axios.post(`${API_URL}/categories`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }),
  update: (id, formData, token) =>
    axios.put(`${API_URL}/categories/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }),
  delete: (id, token) =>
    axios.delete(`${API_URL}/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
