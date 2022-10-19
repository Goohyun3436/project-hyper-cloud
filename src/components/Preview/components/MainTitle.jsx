import styled from 'styled-components';

const MainTitle = () => {
  return (
    <Wrapper>
      <BigTitle className='title'>
        <p>ABOUT</p>
        <p className='aqua-text'>HyperCloud</p>
      </BigTitle>
      <span>
        하이퍼클러우드는 모두가 XR Contents를 보다 재미있고 쉽게 접하며 가상과 현실이 융합된
        공간에서 경계감 없이 매끄럽고 스마트한 삶이기를 바랍니다.
      </span>
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
