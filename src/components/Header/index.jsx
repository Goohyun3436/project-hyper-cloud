import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderWrapper from './HeaderWrapper';
import LoginButton from './LoginButton/LoginButton';

const Header = () => {
  const { token, userInfo } = useSelector(state => state.header.toJS());
  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch({ type: 'header/REMOVE_TOKEN' });
  };

  return (
    <HeaderWrapper>
      {token ? (
        <LoginButton type={'로그아웃'} onClick={removeToken} />
      ) : (
        <LoginButton type={'로그인 / 가입'} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
