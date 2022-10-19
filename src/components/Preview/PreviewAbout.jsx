import styled from 'styled-components';
import History from './components/about/History';
import TeamInfo from './components/about/TeamInfo';
import TeamVideo from './components/about/TeamVideo';
import MainTitle from './components/MainTitle';

const PreviewAbout = () => {
  return (
    <Wrapper>
      <MainTitle />
      <TeamVideo>
        <SmallTitle className='title'>
          <p className='aqua-text'>TEAM</p>
          <p className='green-text'>Members</p>
        </SmallTitle>
      </TeamVideo>
      <TeamInfo />
      <History>
        <SmallTitle className='title'>
          <p className='aqua-text'>Award</p>
          <p className='green-text'>History</p>
        </SmallTitle>
      </History>
    </Wrapper>
  );
};

export default PreviewAbout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: black;
  color: white;

  .aqua-text {
    color: aqua;
  }
  .green-text {
    color: #91ff65;
  }

  .content-title {
    span {
      font-size: 0.4rem;
    }
  }

  .rotation-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-right: 30px;
  }
`;

const SmallTitle = styled.div`
  p {
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
`;
