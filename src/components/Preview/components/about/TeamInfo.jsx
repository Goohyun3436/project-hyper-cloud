import styled from 'styled-components';

const TeamInfo = () => {
  return (
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
  );
};

export default TeamInfo;

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
