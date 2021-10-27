import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

const Container = styled.div`
  background: ${COLORS.BLUE_SECONDARY};
  border-radius: 2rem;
  margin: 1rem auto;
  padding: 1rem 1rem 1rem 1.6rem;
  width: 90vw;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Container };
