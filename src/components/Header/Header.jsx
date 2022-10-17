import { useSelector, useDispatch } from 'react-redux';
import HeaderWrapper from './HeaderWrapper';
import LoginButton from './contents/LoginButton';
import NavItem from './contents/NavItem';

const Header = () => {
  const { token, userInfo } = useSelector(state => state.header.toJS());
  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch({ type: 'header/REMOVE_TOKEN' });
  };

  return (
    <HeaderWrapper>
      <NavItem to='/about'>ABOUT</NavItem>
      <NavItem to='/xr-business'>XR BUSINESS</NavItem>
      <NavItem to='/news'>NEWS</NavItem>
      {userInfo && <span>{userInfo.userid} 님</span>}
      {token ? (
        <LoginButton type={'로그아웃'} onClick={removeToken} />
      ) : (
        <LoginButton type={'로그인 / 가입'} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
