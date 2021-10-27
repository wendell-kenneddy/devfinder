import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

interface ProfileProps {
  isLoading: boolean;
  hasSearched: boolean;
}

const Container = styled.section<ProfileProps>`
  background: ${COLORS.BLUE_SECONDARY};
  border-radius: 2rem;
  margin: 1.6rem auto;
  padding: 3.2rem 2rem;
  width: 90vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.isLoading || !props.hasSearched ? 'center' : 'flex-start'};
  gap: 2rem;
`;

export { Container };
