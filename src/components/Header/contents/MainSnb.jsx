import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media, sizes } from '../../../lib/StyleUtil';
import headerContent from '../../../../public/data/header/headerContent.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MainSnb = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menuIcons, menuContents } = headerContent;
  const [isContentIconMenu, setIsContentIconMenu] = useState([false, false, false]);
  const [isOpenDetailSnb, setIsOpenDetailSnb] = useState(false);

  const menuSelect = e => {
    const targetId = Number(e.target.id);
    let result = [];

    if (targetId === 1) navigate('/images');

    for (let i = 0; i < isContentIconMenu.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }

    if (result.indexOf(true) === isContentIconMenu.indexOf(true)) {
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
      <IconSnb>
        <MainIcon onClick={() => navigate('/')} src={menuIcons.main.src} alt={menuIcons.main.alt} />
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
        </MenuSection>
      </IconSnb>
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

export default MainSnb;

const IconSnb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  width: 25%;
  height: 100%;
  background-color: #352e4d;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid white;
`;

const MainIcon = styled.img`
  width: 50%;
  padding: 1rem 0;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 55%;
  padding: 1rem 0;
  cursor: pointer;

  &:active {
    transform: translateX(3px);
  }
`;

const DetailSnb = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${props => (props.isOpen ? '25%' : '-100%')};
  width: 75%;
  height: 100%;
  padding: 1rem 0;
  background-color: #1c133a;
  transition: 0.5s all;
  .content {
    margin: 1rem 0;
    letter-spacing: 1px;
    p {
      padding: 1rem 1.5rem;
      color: #92a7de;
      letter-spacing: 1.5px;
    }
  }
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
`;

const Logo = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  letter-spacing: 2px;

  /* ${media.tablet`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  `} */
`;
