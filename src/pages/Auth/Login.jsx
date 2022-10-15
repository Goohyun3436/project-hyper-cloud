import styled from 'styled-components';
import AuthWrapper from '../../components/Auth/AuthWrapper';
import AuthContent from '../../components/Auth/AuthContent';
import InputWithLable from '../../components/Auth/InputWithLable';
import AuthButton from '../../components/Auth/AuthButton';
import BottomLink from '../../components/Auth/BottomLink';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const { email, password } = useSelector(state => state.authPushValue.toJS().login.form);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'authPushValue/CHANGE_INPUT', name, value, form: 'login' });
  };

  useEffect(() => {
    return () => {
      dispatch({ type: 'authPushValue/INITIALIZE_FORM', form: 'login' });
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
        <AuthButton>로그인</AuthButton>
        <BottomLink to='/auth/signup'>회원가입</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Login;
