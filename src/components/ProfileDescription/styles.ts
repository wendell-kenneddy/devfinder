import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    font-size: 1.3rem;
    line-height: 3rem;
    text-align: justify;
    color: ${COLORS.GRAY_PRIMARY};
  }

  > div {
    background: ${COLORS.BLUE_PRIMARY};
    border-radius: 2rem;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.6rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      span:nth-child(1) {
        color: ${COLORS.GRAY_PRIMARY};
      }

      span:nth-child(2) {
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export { Container };
