import axios from 'axios';
const BASE_URL = 'https://60342a0f843b150017932329.mockapi.io/';
const serviceAxios = axios.create({
  baseURL: BASE_URL,
});

export default serviceAxios;
