import styled from 'styled-components';
import { media } from '../lib/StyleUtil';

const PagePositioner = ({ Children }) => {
  return <Wrapper>hihi{Children}</Wrapper>;
};

export default PagePositioner;

const Wrapper = styled.div`
  height: 500px;
  margin: 0;
  margin-left: 50px;

  ${media.phone`
    margin: 0;
    margin-top: 40px;
  `}
`;
