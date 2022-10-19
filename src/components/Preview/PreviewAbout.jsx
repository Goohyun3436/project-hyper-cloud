import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchPreviewData } from '../../lib/api/preview';
import MainTitle from './components/MainTitle';
import TeamVideo from './components/about/TeamVideo';
import TeamInfo from './components/about/TeamInfo';
import History from './components/about/History';
import { media } from '../../lib/StyleUtil';

const PreviewAbout = () => {
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchPreviewData();
        setAboutData(data[0].about);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {aboutData && (
        <Wrapper>
          <MainTitle mainTitle={aboutData.mainTitle} />
          <TeamVideo teamVideo={aboutData.teamVideo}>
            <SmallTitle className='title'>
              <p className='aqua-text'>{aboutData.teamVideo.subTitle.aqua}</p>
              <p className='green-text'>{aboutData.teamVideo.subTitle.green}</p>
              <span>{aboutData.teamVideo.subTitle.content}</span>
            </SmallTitle>
          </TeamVideo>
          <TeamInfo teamInfo={aboutData.teamInfo} />
          <History history={aboutData.history}>
            <SmallTitle className='title'>
              <p className='aqua-text'>{aboutData.history.subTitle.aqua}</p>
              <p className='green-text'>{aboutData.history.subTitle.green}</p>
            </SmallTitle>
          </History>
        </Wrapper>
      )}
    </>
  );
};

export default PreviewAbout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 2rem;
  background-color: black;
  color: white;
  .aqua-text {
    color: aqua;
  }
  .green-text {
    color: #91ff65;
  }

  .rotation-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-right: 30px;
  }

  ${media.desktop`
    transform: scale(0.9)translate(0px, -50px);;
  `}
  ${media.tablet`
    transform: scale(0.8)translate(0px, -150px);;
  `}
  ${media.phone`
    transform: scale(0.6)translate(-150px, -400px);;
  `}
`;

const SmallTitle = styled.div`
  p {
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
  span {
    font-size: 0.4rem;
  }
`;
