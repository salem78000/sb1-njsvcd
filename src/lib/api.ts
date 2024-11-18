import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api'
});

export const fetchContent = async (endpoint: string) => {
  const response = await api.get(endpoint);
  return response.data;
};

export const fetchSingleType = async (type: string) => {
  const response = await api.get(`/${type}?populate=*`);
  return response.data.data.attributes;
};

export const fetchCollection = async (collection: string) => {
  const response = await api.get(`/${collection}?populate=*`);
  return response.data.data;
};

export default api;