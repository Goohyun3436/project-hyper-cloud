import styled from 'styled-components';
import { Link } from 'react-router-dom';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';

const AuthWrapper = ({ children }) => {
  return (
    <Positioner>
      <ShadowedBox>
        <LogoWrapper>
          <Logo to='/'>HYPER CLOUD</Logo>
        </LogoWrapper>
        <Contents>{children}</Contents>
      </ShadowedBox>
    </Positioner>
  );
};

export default AuthWrapper;

const Positioner = styled.div`
  margin-left: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const ShadowedBox = styled.div`
  width: 500px;
  ${shadow(2)}
`;

const LogoWrapper = styled.div`
  background: black;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;
