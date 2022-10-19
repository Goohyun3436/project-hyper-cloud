import styled from 'styled-components';

const TeamInfo = ({ teamInfo }) => {
  return (
    <TeamInfoBox>
      {teamInfo.map(team => {
        return (
          <div className='developement-wrap' key={team.teamName}>
            <div className='rotation-text'>{team.rotateText}</div>
            {team.infoList.map(teamInfo => {
              return (
                <div className='text-card' key={teamInfo.teamName}>
                  <span className='aqua-text title'>{teamInfo.teamName}</span>
                  <span className='aqua-text sub-title'>{teamInfo.englishTeamName}</span>
                  <ul>
                    {teamInfo.affiliatedTeam.map(affiliatedTeam => {
                      return <li key={affiliatedTeam}>{affiliatedTeam}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
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
