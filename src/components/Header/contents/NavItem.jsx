import styled from 'styled-components';
import { Link } from 'react-router-dom';
import oc from 'open-color';
import { shadow, media } from '../../../lib/StyleUtil';

const NavItem = ({ to, children }) => {
  return <BorderedButton to={to}>{children}</BorderedButton>;
};

export default NavItem;

const BorderedButton = styled(Link)`
  text-decoration: none;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    color: white;
    background: ${oc.cyan[6]};
  }

  &:active {
    transform: translateY(3px);
  }

  ${media.tablet`
    width: 100%;
    padding: 0.8rem 1.2rem;
    border-radius: 0;
    font-size: 12px;
    margin: 0;
  `}
`;