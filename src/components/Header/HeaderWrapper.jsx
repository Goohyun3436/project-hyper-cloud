import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../lib/StyleUtil';
import { Link } from 'react-router-dom';

const HeaderWrapper = ({ children }) => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo to={'/'}>HYPER CLOUD</Logo>
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackground>
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
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 95%;
  max-width: 1280px;
  height: 55px;
  display: flex;
  padding: 1rem 0;
  align-items: center;

  ${media.wide`
        width: 95%;
    `}

  ${media.tablet`
        /* background-color: black; */
    `}

  ${media.phone`
        background-color: black;
    `}
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;
