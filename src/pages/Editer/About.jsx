import styled from 'styled-components';
import PreviewAbout from '../../components/Preview/PreviewAbout';
import EditerWrapper from '../../components/Editer/EditerWrapper';
import Editer from '../../components/Editer/Editer';

const About = () => {
  return (
    <EditerWrapper>
      <PreviewAbout />
      <Editer />
    </EditerWrapper>
  );
};

export default About;
