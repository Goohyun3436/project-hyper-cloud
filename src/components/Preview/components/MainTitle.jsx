import styled from 'styled-components';

const MainTitle = ({ mainTitle }) => {
  return (
    <Wrapper>
      <BigTitle className='title'>
        <p>{mainTitle.white}</p>
        <p className='aqua-text'>{mainTitle.aqua}</p>
      </BigTitle>
      <span>{mainTitle.content}</span>
    </Wrapper>
  );
};

export default MainTitle;

const Wrapper = styled.div`
  width: 60%;
  margin: 2rem auto;

  span {
    width: 50%;
    font-size: 0.7rem;
  }
`;

const BigTitle = styled.div`
  p {
    font-size: 1rem;
  }
  margin-bottom: 1.5rem;
`;
