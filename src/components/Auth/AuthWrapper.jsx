import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, shadow } from '../../lib/styleUtil';
import { deepPupleColor, brightPupleColor, hoverPupleColor } from '../../Theme';

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  margin-left: 28px;
  border-radius: 15px;

  ${media.phone`
    min-width: 260px;
    margin: 0;
    margin-top: 40px;
  `}
`;

const ShadowedBox = styled.div`
  border-radius: 15px;
  ${shadow(2)}
`;

const LogoWrapper = styled.div`
  background: ${brightPupleColor};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  ${media.phone`
    height: 3.5rem;
  `}
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;

  ${media.phone`
    font-size: 1.5rem;
  `}
`;

const Contents = styled.div`
  background: #4c4562;
  padding: 2rem;
  height: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  ${media.phone`
    padding: 1rem 1.5rem;
  `}
`;
