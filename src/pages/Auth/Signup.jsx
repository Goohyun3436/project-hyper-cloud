import styled from 'styled-components';
import AuthWrapper from '../../components/Auth/AuthWrapper';
import AuthContent from '../../components/Auth/AuthContent';
import InputWithLable from '../../components/Auth/InputWithLable';
import AuthButton from '../../components/Auth/AuthButton';
import BottomLink from '../../components/Auth/BottomLink';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Signup = () => {
  const { email, userid, password, passwordConfirm } = useSelector(
    state => state.authPushValue.toJS().signup.form,
  );

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'authPushValue/CHANGE_INPUT', name, value, form: 'signup' });
  };

  useEffect(() => {
    return () => {
      dispatch({ type: 'authPushValue/INITIALIZE_FORM', form: 'signup' });
    };
  }, []);

  return (
    <AuthWrapper>
      <AuthContent title='회원가입'>
        <InputWithLable
          label='이메일'
          name='email'
          placeholder='이메일'
          value={email}
          onChange={handleChange}
        />
        <InputWithLable
          label='아이디'
          name='userid'
          placeholder='아이디'
          value={userid}
          onChange={handleChange}
        />
        <InputWithLable
          label='비밀번호'
          name='password'
          placeholder='비밀번호'
          value={password}
          onChange={handleChange}
        />
        <InputWithLable
          label='비밀번호 확인'
          name='passwordConfirm'
          placeholder='비밀번호 확인'
          value={passwordConfirm}
          onChange={handleChange}
        />
        <AuthButton>회원가입</AuthButton>
        <BottomLink to='/auth/login'>로그인</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Signup;
