import axios from 'axios';

export const frontendURL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});
