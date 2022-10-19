import styled from 'styled-components';
import { media } from '../lib/StyleUtil';

const PagePositioner = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PagePositioner;

const Wrapper = styled.div`
  width: 93%;
  height: auto;
  margin: 0;
  margin-left: 60px;

  ${media.phone`
    width: 100%;
    height: 93%;
    margin: 0;
    margin-top: 40px;
  `}
`;
