import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/StyleUtil';

const AuthButton = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default AuthButton;

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${oc.teal[6]};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.teal[5]};
    ${shadow(0)}
  }

  &:active {
    background: ${oc.teal[7]};
  }
`;