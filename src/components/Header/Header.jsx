import HeaderWrapper from './HeaderWrapper';
import LoginButton from './contents/LoginButton';
import NavItem from './contents/NavItem';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavItem to='/about'>ABOUT</NavItem>
      <NavItem to='/xr-business'>XR BUSINESS</NavItem>
      <NavItem to='/news'>NEWS</NavItem>
      <LoginButton />
    </HeaderWrapper>
  );
};

export default Header;
