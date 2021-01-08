import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cookbook.ack.ee/api/',
});
