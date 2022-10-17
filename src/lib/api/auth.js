import axios from 'axios';

const server = 'http://localhost:4000';

export const localSignup = ({ email, userid, password }) =>
  axios.post(server + '/users', { email, userid, password });
export const localLogin = ({ email, password }) =>
  axios.post(server + '/login', { email, password });

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
