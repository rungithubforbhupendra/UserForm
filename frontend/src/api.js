import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// API for forms
export const fetchForms = () => API.get('/forms');
export const fetchFormById = (id) => API.get(`/forms/${id}`);
export const createForm = (formData) => API.post('/forms', formData);
export const updateForm = (id, formData) => API.put(`/forms/${id}`, formData);
export const deleteForm = (id) => API.delete(`/forms/${id}`);

// API for form responses
export const submitResponse = (responseData) => API.post('/responses', responseData);
