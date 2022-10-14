import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from '../../../lib/StyleUtil';

const LoginButton = () => <BorderedButton to='/login'>로그인 / 가입</BorderedButton>;

export default LoginButton;

const BorderedButton = styled(Link)`
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  border: 1px solid ${oc.cyan[6]};
  border-radius: 2px;
  font-weight: 600;
  color: ${oc.cyan[6]};
  text-decoration: none;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    color: white;
    background: ${oc.cyan[6]};
    ${shadow(1)}
  }

  &:active {
    transform: translateY(3px);
  }
`;
