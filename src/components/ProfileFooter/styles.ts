import styled from 'styled-components';
import { COLORS } from '../../theme/theme';

interface FooterProps {
  twitter_url: string | undefined;
  location: string | undefined;
  blog: string | undefined;
  company: string | undefined;
}

const Container = styled.footer<FooterProps>`
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    li {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &:nth-child(1) {
        p,
        a {
          color: ${props =>
            props.location ? COLORS.WHITE : COLORS.GRAY_SECONDARY};
        }
      }

      &:nth-child(2) {
        p,
        a {
          color: ${props =>
            props.blog ? COLORS.WHITE : COLORS.GRAY_SECONDARY};
        }
      }

      &:nth-child(3) {
        p,
        a {
          color: ${props =>
            props.twitter_url ? COLORS.WHITE : COLORS.GRAY_SECONDARY};
        }
      }

      &:nth-child(4) {
        p,
        a {
          color: ${props =>
            props.company ? COLORS.WHITE : COLORS.GRAY_SECONDARY};
        }
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

export { Container };
