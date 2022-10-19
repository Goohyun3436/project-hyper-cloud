import styled from 'styled-components';

const History = ({ history, children }) => {
  return (
    <HistoryBox>
      {children}
      <div className='history-list'>
        {history.historyList
          .slice(0)
          .reverse()
          .map(historyInfo => {
            return (
              <div className='history-card' key={historyInfo.id + 1}>
                <span>
                  {historyInfo.year} ({historyInfo.id + 1})
                </span>
                <div>+</div>
              </div>
            );
          })}
      </div>
    </HistoryBox>
  );
};

export default History;

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
