import styled from 'styled-components';
import { media, shadow } from '../../lib/StyleUtil';
import { brightPupleColor, deepPupleColor, hoverPupleColor } from '../../Theme';

const AuthButton = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default AuthButton;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 0.8rem;
  border-radius: 5px;

  background: ${hoverPupleColor};
  color: white;

  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${deepPupleColor};
    ${shadow(0)}
  }

  &:active {
    background: ${deepPupleColor};
  }

  ${media.phone`
    font-size: 0.8rem;
  `}
`;
