import styled from 'styled-components';
import { Link } from 'react-router-dom';
import oc from 'open-color';
import { shadow } from '../../../lib/StyleUtil';

const NavItem = ({ to, children }) => {
  return <BorderedButton to={to}>{children}</BorderedButton>;
};

export default NavItem;

const BorderedButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  padding-bottom: 0.4rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  font-weight: 600;
  color: ${oc.cyan[6]};
  text-decoration: none;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    border: 1px solid ${oc.cyan[6]};
    color: white;
    background: ${oc.cyan[6]};
    ${shadow(1)}
  }

  &:active {
    transform: translateY(3px);
  }
`;
