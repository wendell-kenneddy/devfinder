import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

const Container = styled.button`
  background: ${COLORS.BLUE_TERNARY};
  border: 0.1rem solid ${COLORS.BLUE_QUARTERNARY};
  border-radius: 1.2rem;
  padding: 1.6rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    opacity: 0.3;
    cursor: wait;

    &:hover {
      filter: brightness(1);
    }
  }
`;

export { Container };
