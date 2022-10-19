import styled from 'styled-components';
import { media } from '../../lib/StyleUtil';
import {
  backgroundPupleColor,
  brightPupleColor,
  deepPupleColor,
  hoverPupleColor,
} from '../../Theme';

const Modal = ({ navigate, setIsModal, alertMessage }) => {
  return (
    <Background>
      <Wrapper>
        <Title>{alertMessage.title}</Title>
        <Message>{alertMessage.message}</Message>
        {setIsModal && <CloseButton onClick={() => setIsModal(false)}>x</CloseButton>}
        <SubmitButton onClick={navigate}>{alertMessage.button}</SubmitButton>
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
  margin-left: 28px;
  width: 300px;
  border-radius: 5px;
  background-color: #2b262e;
  text-align: center;

  ${media.phone`
    margin: 0;
    margin-top: 40px;
  `}
`;

const Title = styled.p`
  padding: 10px 20px;
  border-bottom: 2px solid #a298a8;
  color: #d8d8d8;
  font-size: 18px;
  font-weight: bold;
`;

const Message = styled.p`
  padding: 20px;
  color: #a298a8;
  font-size: 17px;
`;

const CloseButton = styled.div`
  position: absolute;
  left: 97%;
  top: -4.5%;
  width: 20px;
  height: 20px;
  color: #a298a8;
  background-color: ${brightPupleColor};
  border-radius: 20px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 5px 0;
  margin: 20px auto;
  border: 0;
  border-radius: 5px;
  background-color: #a298a8;
  color: ${deepPupleColor};
  font-size: 16px;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
