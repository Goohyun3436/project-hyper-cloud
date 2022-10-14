import styled from 'styled-components';
import AuthWrapper from '../../components/Auth/AuthWrapper';
import AuthContent from '../../components/Auth/AuthContent';
import InputWithLable from '../../components/Auth/InputWithLable';
import AuthButton from '../../components/Auth/AuthButton';
import BottomLink from '../../components/Auth/BottomLink';

const Signup = () => {
  return (
    <AuthWrapper>
      <AuthContent title='회원가입'>
        <InputWithLable label='이메일' name='email' placeholder='이메일' />
        <InputWithLable label='아이디' name='id' placeholder='아이디' />
        <InputWithLable label='비밀번호' name='password' placeholder='비밀번호' />
        <InputWithLable label='비밀번호 확인' name='passwordConfirm' placeholder='비밀번호 확인' />
        <AuthButton>회원가입</AuthButton>
        <BottomLink to='/auth/login'>로그인</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Signup;
