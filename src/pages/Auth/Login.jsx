import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { localLogin } from '../../lib/api/auth';
import {
  AuthWrapper,
  AuthContent,
  InputWithLable,
  AuthButton,
  BottomLink,
  AuthError,
} from '../../components/Auth';

const Login = () => {
  const navigate = useNavigate();
  const { email, password } = useSelector(state => state.auth.toJS().login.form);
  const error = useSelector(state => state.auth.toJS().login.error);
  const dispatch = useDispatch();

  const setError = message => {
    dispatch({ type: 'auth/SET_ERROR', form: 'login', message });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'auth/CHANGE_INPUT', name, value, form: 'login' });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await localLogin({ email, password });
      localStorage.setItem('login-token', data.accessToken);
      localStorage.setItem('user', data.user);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    return () => {
      dispatch({ type: 'auth/INITIALIZE_FORM', form: 'login' });
    };
  }, []);

  return (
    <AuthWrapper>
      <AuthContent title='로그인'>
        <InputWithLable
          label='이메일'
          name='email'
          placeholder='이메일'
          value={email}
          onChange={handleChange}
        />
        <InputWithLable
          label='비밀번호'
          name='password'
          placeholder='비밀번호'
          value={password}
          onChange={handleChange}
        />
        {error && <AuthError>{error}</AuthError>}
        <AuthButton onClick={onSubmit}>로그인</AuthButton>
        <BottomLink to='/auth/signup'>회원가입</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Login;
