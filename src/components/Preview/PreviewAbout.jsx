import styled from 'styled-components';

const PreviewAbout = () => {
  return (
    <Wrapper>
      <MainTitleBox>
        <BigTitle className='title'>
          <p>ABOUT</p>
          <p className='aqua-text'>HyperCloud</p>
        </BigTitle>
        <span>
          하이퍼클러우드는 모두가 XR Contents를 보다 재미있고 쉽게 접하며 가상과 현실이 융합된
          공간에서 경계감 없이 매끄럽고 스마트한 삶이기를 바랍니다.
        </span>
      </MainTitleBox>
      <TemaVideoBox>
        <div className='content-title'>
          <SmallTitle className='title'>
            <p className='aqua-text'>TEAM</p>
            <p className='green-text'>Members</p>
          </SmallTitle>
          <span>하이퍼클라우드의 Team member를 소개합니다.</span>
        </div>
        <div className='merber-video-wrap'>
          <div className='rotation-text aqua-text'>
            Let's make it
            <br />
            together
          </div>
          <div className='video-card'>
            <div className='video'>video</div>
            <p className='merber-name'>
              <span>C.E.O</span>Ralph
            </p>
          </div>
          <div className='video-card'>
            <div className='video'>video</div>
            <p className='merber-name'>
              <span>C.E.O</span>Ralph
            </p>
          </div>
        </div>
      </TemaVideoBox>
      <TeamInfoBox>
        <div className='developement-wrap'>
          <div className='rotation-text'>Developement</div>
          <div className='text-card'>
            <span className='aqua-text title'>서비스 개발팀</span>
            <span className='aqua-text sub-title'>Service R&D Team</span>
            <ul>
              <li>Back & Front-end</li>
              <li>Back & Front-end</li>
            </ul>
          </div>
          <div className='text-card'>
            <span className='aqua-text title'>서비스 개발팀</span>
            <span className='aqua-text sub-title'>Service R&D Team</span>
            <ul>
              <li>Back & Front-end</li>
              <li>Back & Front-end</li>
            </ul>
          </div>
        </div>
        <div className='businessplan-wrap'>
          <div className='rotation-text'>Developement</div>
          <div className='text-card'>
            <span className='aqua-text title'>서비스 개발팀</span>
            <span className='aqua-text sub-title'>Service R&D Team</span>
            <ul>
              <li>Back & Front-end</li>
              <li>Back & Front-end</li>
            </ul>
          </div>
        </div>
      </TeamInfoBox>
      <HistoryBox>
        <SmallTitle className='title'>
          <p className='aqua-text'>Award</p>
          <p className='green-text'>History</p>
        </SmallTitle>
        <div className='history-list'>
          <div className='history-card'>
            <span>2022(4)</span>
            <div>+</div>
          </div>
          <div className='history-card'>
            <span>2022(4)</span>
            <div>+</div>
          </div>
        </div>
      </HistoryBox>
    </Wrapper>
  );
};

export default PreviewAbout;

const HistoryBox = styled.div`
  margin-top: 5rem;
  .history-list {
    margin-top: 3rem;
    .history-card {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      border-top: 1px solid white;
    }
  }
`;

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

const BigTitle = styled.div`
  p {
    font-size: 1rem;
  }
  margin-bottom: 1.5rem;
`;

const SmallTitle = styled.div`
  p {
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
`;

const MainTitleBox = styled.div`
  width: 60%;
  margin: 2rem auto;

  span {
    width: 50%;
    font-size: 0.7rem;
  }
`;

const TemaVideoBox = styled.div`
  margin-top: 5rem;

  .merber-video-wrap {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 2rem 0;

    .video-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 30%;
      margin-right: 20px;
      background-color: #b03333;

      .video {
        width: 100%;
        height: 200px;
        background-color: white;
        color: black;
      }
      .merber-name {
        margin: 10px auto;
        font-size: 0.6rem;
        color: aqua;
        span {
          color: white;
          margin-right: 5px;
        }
      }
    }
  }
`;

const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  .developement-wrap,
  .businessplan-wrap {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .text-card {
      display: flex;
      flex-direction: column;
      width: 30%;
      border: 1px solid green;
      border-top-right-radius: 20px;
      padding: 1rem;
      margin-right: 20px;

      .sub-title {
        margin-top: 1rem;
        font-size: 0.7rem;
      }

      ul {
        padding: 1rem 0.8rem;
        li {
          font-size: 0.7rem;
          list-style: inside;
          padding: 0.25rem 0;
        }
      }
    }
  }
`;
