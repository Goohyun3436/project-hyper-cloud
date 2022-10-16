import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isEmail, isLength, isAlphanumeric } from 'validator';
import { localSignup } from '../../lib/api/auth';
import AuthWrapper from '../../components/Auth/AuthWrapper';
import AuthContent from '../../components/Auth/AuthContent';
import InputWithLable from '../../components/Auth/InputWithLable';
import AuthButton from '../../components/Auth/AuthButton';
import BottomLink from '../../components/Auth/BottomLink';
import AuthError from '../../components/Auth/AuthError';

const Signup = () => {
  const { email, userid, password, passwordConfirm } = useSelector(
    state => state.auth.toJS().signup.form,
  );
  const error = useSelector(state => state.auth.toJS().signup.error);
  const dispatch = useDispatch();

  const validate = {
    email: value => {
      if (!isEmail(value)) {
        setError('잘못된 이메일 형식 입니다.');
        return false;
      }
      setError(null);
      return true;
    },
    userid: value => {
      if (!isAlphanumeric(value) || !isLength(value, { min: 4, max: 15 })) {
        setError('아이디는 4 ~ 15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
        return false;
      }
      setError(null);
      return true;
    },
    password: value => {
      if (!isLength(value, { min: 6 })) {
        setError('비밀번호를 6자 이상 입력하세요.');
        return false;
      }
      setError(null);
      return true;
    },
    passwordConfirm: value => {
      if (password !== value) {
        setError('비밀번호확인이 일치하지 않습니다.');
        return false;
      }
      setError(null);
      return true;
    },
  };

  const setError = message => {
    dispatch({ type: 'auth/SET_ERROR', form: 'signup', message });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'auth/CHANGE_INPUT', name, value, form: 'signup' });

    const validation = validate[name](value);
    if (name.indexOf('password') > -1 || !validation) return;
  };

  const onSubmit = async () => {
    try {
      const { data } = await localSignup({ email, userid, password });
      localStorage.setItem('login-token', data.accessToken);
      localStorage.setItem('user', data.user);
    } catch (error) {
      switch (error.response.data) {
        case 'Email already exists':
          console.log('이미 존재하는 이메일 입니다.');
        default:
          console.log(error.response);
      }
    }
  };

  useEffect(() => {
    setError();
    return () => {
      dispatch({ type: 'auth/INITIALIZE_FORM', form: 'signup' });
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
        {error && <AuthError>{error}</AuthError>}
        <AuthButton onClick={onSubmit}>회원가입</AuthButton>
        <BottomLink to='/auth/login'>로그인</BottomLink>
      </AuthContent>
    </AuthWrapper>
  );
};

export default Signup;
