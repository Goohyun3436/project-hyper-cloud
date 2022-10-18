import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import oc from 'open-color';
import { shadow, media, sizes } from '../../lib/StyleUtil';
import LoginButton from './contents/LoginButton';
import { useState, useEffect } from 'react';
import MainSnb from './contents/MainSnb';

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
      <MainSnb />
      {/* <HeaderContents>
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
      </HeaderContents> */}
      {/* <TogleMenuList isToggle={isToggle}>
        {children}
        {userInfo && <span className='user-info'>{userInfo.userid} 님</span>}
      </TogleMenuList> */}
    </Positioner>
  );
};

export default HeaderWrapper;

const Positioner = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 30%;
  min-width: 310px;
  height: 100%;
  /* min-width: ${sizes.phone}; */
  /* ${shadow(1)}; */
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
