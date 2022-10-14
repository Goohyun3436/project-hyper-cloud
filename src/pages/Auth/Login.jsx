import styled from 'styled-components';
import AuthWrapper from '../../components/Auth/AuthWrapper';
import AuthContent from '../../components/Auth/AuthContent';
import InputWithLable from '../../components/Auth/InputWithLable';
import AuthButton from '../../components/Auth/AuthButton';
import BottomLink from '../../components/Auth/BottomLink';

const Login = () => {
  return (
    <AuthWrapper>
      <AuthContent title='로그인'>
        <InputWithLable label='이메일' name='email' placeholder='이메일' />
        <InputWithLable label='비밀번호' name='password' placeholder='비밀번호' />
        <AuthButton>로그인</AuthButton>
        <BottomLink to='/auth/signup'>회원가입</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Login;
