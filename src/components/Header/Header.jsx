import HeaderWrapper from './HeaderWrapper';
import NavItem from './contents/NavItem';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavItem to='/about'>ABOUT</NavItem>
      <NavItem to='/xr-business'>XR BUSINESS</NavItem>
      <NavItem to='/news'>NEWS</NavItem>
    </HeaderWrapper>
  );
};

export default Header;
