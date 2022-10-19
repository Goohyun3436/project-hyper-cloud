import styled from 'styled-components';

const TeamVideo = ({ children, teamVideo }) => {
  return (
    <TemaVideoBox>
      <div className='content-title'>{children}</div>
      <div className='merber-video-wrap'>
        <div className='rotation-text aqua-text'>
          {teamVideo.rotateText.map(text => {
            return (
              <span key={text}>
                {text}
                <br />
              </span>
            );
          })}
        </div>
        {teamVideo.videoList.map(videoCard => {
          return (
            <div className='video-card' key={videoCard.memberName[1]}>
              <div className='video'>{videoCard.videoUrl}</div>
              <p className='merber-name'>
                <span>{videoCard.memberName[0]}</span>
                {videoCard.memberName[1]}
              </p>
            </div>
          );
        })}
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
