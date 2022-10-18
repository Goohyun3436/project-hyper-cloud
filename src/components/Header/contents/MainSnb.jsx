import { useState } from 'react';
import styled from 'styled-components';
import { shadow, media, sizes } from '../../../lib/StyleUtil';
import headerContent from '../../../../public/data/header/headerContent.json';

const MainSnb = () => {
  const { menuIcons, menuContents } = headerContent;
  const [isContentIconMenu, setIsContentIconMenu] = useState([false, false, false]);

  const menuSelect = e => {
    const targetId = Number(e.target.id);
    let result = [];
    for (let i = 0; i < isContentIconMenu.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }
    setIsContentIconMenu(result);
  };

  return (
    <>
      <IconSnb>
        <MainIcon src={menuIcons.main.src} alt={menuIcons.main.alt} />
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
      <DetailSnb isOpen={isContentIconMenu[0] || isContentIconMenu[2]}>
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
                        return <li key={subMenu.subTitle}>{subMenu.subTitle}</li>;
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
                        return <li key={subMenu.subTitle}>{subMenu.subTitle}</li>;
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
  width: 25%;
  height: 100%;
  position: absolute;
  z-index: 2;
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
`;

const MenuIcon = styled.img`
  width: 55%;
  padding: 1rem 0;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
  }
`;

const DetailSnb = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  position: absolute;
  left: ${props => (props.isOpen ? '25%' : '-100%')};
  padding: 1rem 0;
  background-color: #1c133a;
  overflow: hidden;
  transition: 0.5s all;
  .content {
    margin: 1rem 0;
    letter-spacing: 1px;
    p {
      padding: 1rem 1rem;
      color: #92a7de;
      cursor: pointer;
    }
    li {
      padding: 1rem 1rem;
      padding-left: 1.5rem;
      color: white;
      font-size: 14px;
      font-weight: 300;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  letter-spacing: 2px;
  color: white;
  font-size: 1.4rem;
  font-family: 'Rajdhani';

  /* ${media.tablet`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  `} */
`;
