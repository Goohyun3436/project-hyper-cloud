import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import oc from 'open-color';
import { shadow, media, sizes } from '../../lib/StyleUtil';
import LoginButton from './contents/LoginButton';
import { useState, useEffect } from 'react';

const HeaderWrapper = ({ children }) => {
  const location = useLocation();
  const [isToggle, setIsToggle] = useState(false);
  const { token, userInfo } = useSelector(state => state.header.toJS());
  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch({ type: 'header/REMOVE_TOKEN' });
  };

  useEffect(() => {
    setIsToggle(false);
  }, [location]);

  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <TogleMenu onClick={() => setIsToggle(!isToggle)}>menu</TogleMenu>
          <Logo $isToggle={isToggle} to={'/'}>
            HYPER CLOUD
          </Logo>
          <div className='wide-content'>
            {children}
            {userInfo && <span className='user-info'>{userInfo.userid} 님</span>}
          </div>
          {token ? (
            <LoginButton type={'로그아웃'} onClick={removeToken} />
          ) : (
            <LoginButton type={'로그인 / 가입'} />
          )}
        </HeaderContents>
      </WhiteBackground>
      <TogleMenuList isToggle={isToggle}>
        {children}
        {userInfo && <span className='user-info'>{userInfo.userid} 님</span>}
      </TogleMenuList>
      <GradientBorder />
    </Positioner>
  );
};

export default HeaderWrapper;

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0px;
  width: 100%;
  min-width: ${sizes.phone};
  ${shadow(1)};
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 95%;
  max-width: 1280px;
  height: 55px;

  .wide-content {
    display: flex;
    align-items: center;
    margin-left: auto;
    .user-info {
      font-size: 13px;
    }
  }

  ${media.tablet`
    .wide-content {
      display: none;
    }
  `}
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';

  ${media.tablet`
    position: absolute;
    top: ${props => (props.$isToggle ? '17%' : '50%')};
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const TogleMenu = styled.div`
  display: none;
  ${media.tablet`
    display: flex;
    justify-content: center;
    width: 50px;
    padding: 0.5rem;
    color: ${oc.cyan[6]};
    font-weight: bold;
    cursor: pointer;
  `}
`;

const TogleMenuList = styled.ul`
  display: none;
  ${media.tablet`
    display: ${props => (props.isToggle ? 'flex' : 'none')};
    flex-direction: column;
    background-color: white;
    .user-info {
      padding: 0.5rem 1.2rem;
      padding-top: 1.2rem;
      font-size: 12px;
    }
  `}
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;
