import styled from 'styled-components';
import { media } from '../lib/StyleUtil';

const PagePositioner = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PagePositioner;

const Wrapper = styled.div`
  margin: 0;
  margin-left: 50px;

  ${media.phone`
    margin: 0;
    margin-top: 40px;
  `}
`;
