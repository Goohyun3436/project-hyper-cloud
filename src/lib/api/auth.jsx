import axios from 'axios';

export const checkEmailExists = email => axios.get('/api/auth/exists/email/' + email);
export const checkUseridExists = userid => axios.get('/api/auth/exists/username/' + userid);

export const localSignup = ({ email, userid, password }) =>
  axios.post('/api/auth/signup/local', { email, userid, password });
export const localLogin = ({ email, password }) =>
  axios.post('/api/auth/login/local', { email, password });

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
