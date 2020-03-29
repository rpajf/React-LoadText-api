import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})
/* endereço da api que vai ser consumida */

export default api;