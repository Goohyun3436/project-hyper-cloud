import styled from 'styled-components';
import { media } from '../../lib/StyleUtil';

const AuthContent = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default AuthContent;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  margin-bottom: 1.5rem;

  ${media.phone`
    margin-bottom: 1rem;
    font-size: 1rem;
  `}
`;
