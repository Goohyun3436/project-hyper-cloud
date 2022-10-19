import styled from 'styled-components';
import PagePositioner from '../components/PagePositioner';
import PreviewAbout from '../components/Preview/PreviewAbout';

const About = () => {
  return (
    <PagePositioner>
      <Wrapper>
        <PreviewBox>
          <PreviewAbout />
        </PreviewBox>
        <EditerBox>editer</EditerBox>
      </Wrapper>
    </PagePositioner>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PreviewBox = styled.div`
  width: 50%;
  background-color: aqua;
`;

const EditerBox = styled.div`
  width: 40%;
  background-color: aqua;
`;
