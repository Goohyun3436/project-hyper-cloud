import styled from 'styled-components';

const History = ({ children }) => {
  return (
    <HistoryBox>
      {children}
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
