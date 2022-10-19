import styled from 'styled-components';

const TeamVideo = ({ children }) => {
  return (
    <TemaVideoBox>
      <div className='content-title'>
        {children}
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
  );
};

export default TeamVideo;

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
