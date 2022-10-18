import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { media } from '../../lib/StyleUtil';

const BottomLink = ({ to, children }) => {
  return (
    <Aligner>
      <StyledLink to={to}>{children}</StyledLink>
    </Aligner>
  );
};

export default BottomLink;

const Aligner = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: #b8b7c6;
  &:hover {
    color: ${oc.gray[7]};
  }

  ${media.phone`
    font-size: 0.9rem;
  `}
`;
