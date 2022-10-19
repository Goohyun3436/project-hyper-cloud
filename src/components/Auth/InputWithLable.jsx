import styled from 'styled-components';
import { media } from '../../lib/StyleUtil';

const InputWithLable = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...rest} />
    </Wrapper>
  );
};

export default InputWithLable;

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: white;
  margin-bottom: 0.5rem;

  ${media.phone`
    font-size: 0.8rem;
  `}
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 5px;
  border-radius: 5px;
  font-size: 1.2rem;
  line-height: 2.5rem;

  ${media.phone`
    height: 30px;
    font-size: 0.9rem;
  `}
`;
