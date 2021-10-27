import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > img {
    border-radius: 50%;
    width: 7.2rem;
    height: 7.2rem;
  }

  div p:nth-child(2) {
    color: ${COLORS.BLUE_QUARTERNARY};
  }

  div p:nth-child(3) {
    color: ${COLORS.GRAY_PRIMARY};
  }

  @media (min-width: 768px) {
    gap: 4rem;

    img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media (min-width: 1000px) {
    justify-content: space-around;

    img {
      width: 12.8rem;
      height: 12.8rem;
    }
  }
`;

export { Container };
