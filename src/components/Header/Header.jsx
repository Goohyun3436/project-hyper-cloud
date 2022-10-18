import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { media } from '../../lib/StyleUtil';
import headerContent from '../../../public/data/header/headerContent.json';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menuIcons, menuContents } = headerContent;
  const [isContentIconMenu, setIsContentIconMenu] = useState([false, false, false]);
  const [isOpenDetailSnb, setIsOpenDetailSnb] = useState(false);

  const { token, userInfo } = useSelector(state => state.header.toJS());
  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch({ type: 'header/REMOVE_TOKEN' });
  };

  const menuSelect = e => {
    const targetId = Number(e.target.id);
    let result = [];

    if (targetId === 1) navigate('/images');

    for (let i = 0; i < isContentIconMenu.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }

    if (result.indexOf(true) === isContentIconMenu.indexOf(true) && targetId !== 1) {
      setIsOpenDetailSnb(!isOpenDetailSnb);
      return;
    }
    setIsContentIconMenu(result);
  };

  useEffect(() => {
    if (isContentIconMenu[0] || isContentIconMenu[2]) setIsOpenDetailSnb(true);
  }, [isContentIconMenu]);

  useEffect(() => {
    setIsOpenDetailSnb(false);
    if (location.pathname === '/') setIsContentIconMenu([false, false, false]);
  }, [location]);

  return (
    <>
      <Positioner>
        <IconSnb>
          <MainIcon
            onClick={() => navigate('/')}
            src={menuIcons.main.src}
            alt={menuIcons.main.alt}
          />
          <MenuSection>
            {menuIcons.content.map(iconInfo => {
              return (
                <MenuIcon
                  key={iconInfo.alt}
                  id={iconInfo.id}
                  onClick={menuSelect}
                  src={isContentIconMenu[iconInfo.id] ? iconInfo.clickedSrc : iconInfo.src}
                  alt={iconInfo.alt}
                />
              );
            })}
          </MenuSection>
          <MenuSection>
            {menuIcons.user.map(iconInfo => {
              return (
                <MenuIcon
                  key={iconInfo.alt}
                  id={iconInfo.id}
                  onClick={menuSelect}
                  src={isContentIconMenu[iconInfo.id] ? iconInfo.clickedSrc : iconInfo.src}
                  alt={iconInfo.alt}
                />
              );
            })}
            {token ? (
              <MenuIcon src={menuIcons.token.logout} alt={'logout-icon'} onClick={removeToken} />
            ) : (
              <MenuIcon
                src={menuIcons.token.login}
                alt={'login-icon'}
                onClick={() => navigate('/auth/login')}
              />
            )}
          </MenuSection>
        </IconSnb>
      </Positioner>
      <DetailSnb isOpen={isOpenDetailSnb}>
        <Logo>HYPER CLOUD</Logo>
        <div className='detail-menu'>
          {isContentIconMenu[0] && (
            <div className='content pages'>
              {menuContents.content.pages.map(detailMenu => {
                return (
                  <div key={detailMenu.title}>
                    <p>{detailMenu.title}</p>
                    <ul>
                      {detailMenu.content.map(subMenu => {
                        return (
                          <NavItem to={subMenu.pathName} key={subMenu.subTitle}>
                            {subMenu.subTitle}
                          </NavItem>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
          {isContentIconMenu[2] && (
            <div className='content setting'>
              {menuContents.user.setting.map(detailMenu => {
                return (
                  <div key={detailMenu.title}>
                    <p>{detailMenu.title}</p>
                    <ul>
                      {detailMenu.content.map(subMenu => {
                        return (
                          <NavItem to={subMenu.pathName} key={subMenu.subTitle}>
                            {subMenu.subTitle}
                          </NavItem>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </DetailSnb>
    </>
  );
};

export default Header;

const Positioner = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 50px;
  min-width: 50px;
  height: 100%;

  ${media.phone`
    width: 100%;
    max-width: 100%;
    height: 40px;
  `}
`;

const IconSnb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #352e4d;
  padding: 0 0.5rem;

  ${media.phone`
    flex-direction: row;
    padding: 0;
  `}
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid white;
  border-left: 0;

  ${media.phone`
    flex-direction: row;
    padding: 0 1rem;
    border-top: 0;
    border-left: 1px solid white;
  `}
`;

const MainIcon = styled.img`
  width: 80%;
  height: auto;
  padding: 1rem 0;
  cursor: pointer;

  ${media.phone`
    width: auto;
    height: 70%;
    padding: 0 1rem;
  `}
`;

const MenuIcon = styled.img`
  width: 70%;
  height: auto;
  padding: 1rem 0;
  cursor: pointer;

  &:active {
    transform: translateX(3px);
  }

  ${media.phone`
    width: auto;
    height: 25px;
    padding: 0 0.5rem;
   
    &:active {
      transform: translateY(3px);
    }
  `}
`;

const DetailSnb = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${props => (props.isOpen ? '50px' : '-100%')};
  width: 20%;
  min-width: 240px;
  height: 100%;
  padding: 1rem 0;
  background-color: #1c133a;
  transition: 0.5s all;
  .content {
    margin: 1rem 0;
    background-color: #1c133a;
    letter-spacing: 1px;
    p {
      padding: 1rem 1.5rem;
      color: #92a7de;
      letter-spacing: 1.5px;
    }
  }

  ${media.phone`
    left: ${props => (props.isOpen ? '0%' : '-100%')};
    top: 40px;
    width: 50%;
    min-width: 180px; 
    font-size: 14px;
  `}
`;

const NavItem = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background: #281e49;
  }

  &:active {
    transform: translateY(3px);
  }

  ${media.phone`
    font-size: 12px;
  `}
`;

const Logo = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  letter-spacing: 2px;

  ${media.phone`
    font-size: 1rem;
  `}
`;
