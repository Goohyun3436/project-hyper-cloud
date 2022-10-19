import styled from 'styled-components';
import PagePositioner from '../../components/PagePositioner';
import PreviewAbout from '../../components/Preview/PreviewAbout';
import { media } from '../../lib/StyleUtil';

const About = ({ children }) => {
  return (
    <PagePositioner>
      <Wrapper>
        <PreviewBox>{children[0]}</PreviewBox>
        <EditerBox>{children[1]}</EditerBox>
      </Wrapper>
    </PagePositioner>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0;

  ${media.desktop`
    flex-direction: column;
    align-items: center;
  `}
`;

const PreviewBox = styled.div`
  width: 50%;
  height: 540px;
  overflow: scroll;

  ${media.desktop`
    width: 90%;
    height: 300px;
    flex-direction: column;
  `}
`;

const EditerBox = styled.div`
  width: 40%;
  height: 540px;
  background-color: aqua;
  overflow: scroll;

  ${media.desktop`
  flex-direction: column;
    width: 90%;
    height: 300px;
    margin-top: 30px;
  `}
`;
