import axios from 'axios';

const server = 'http://localhost:4000';

export const localSignup = ({ email, userid, password }) =>
  axios.post(server + '/users', { email, userid, password });
export const localLogin = ({ email, password }) => console.log('localLogin');
// axios.post(
//   server + '/login',
//   { email, password },
//   { headers: { 'Content-Type': 'application/json' } },
// );

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
