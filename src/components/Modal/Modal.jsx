import styled from 'styled-components';

const Modal = ({ navigate, setIsModal, alertMessage }) => {
  return (
    <Background>
      <Wrapper>
        <Title>{alertMessage[0]}</Title>
        <Message>{alertMessage[1]}</Message>
        <CloseButton onClick={() => setIsModal(false)}>x</CloseButton>
        <SubmitButton onClick={navigate}>{alertMessage[2]}</SubmitButton>
      </Wrapper>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.p`
  padding: 10px 20px;
  border-bottom: 2px solid gray;
  font-size: 18px;
  font-weight: bold;
`;

const Message = styled.p`
  padding: 20px;
  font-size: 17px;
`;

const CloseButton = styled.div`
  position: absolute;
  left: 97%;
  top: -4.5%;
  width: 20px;
  height: 20px;
  color: white;
  background-color: black;
  border-radius: 20px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 5px 30px;
  margin: 20px auto;
  border: 0;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-size: 16px;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
