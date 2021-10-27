import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

const Container = styled.input`
  background: none;
  border: none;
  border-bottom: 0.1rem solid ${COLORS.BLUE_SECONDARY};
  padding-bottom: 0.3rem;
  width: 80%;
  outline: 0;
  transition: 0.2s ease-in-out;
  font-weight: 700;

  &:focus {
    border-bottom: 0.1rem solid ${COLORS.BLUE_TERNARY};
  }

  &::placeholder {
    color: ${COLORS.GRAY_PRIMARY};
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export { Container };
