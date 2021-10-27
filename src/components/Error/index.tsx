import { Container } from './styles';

interface ErrorProps {
  title: string;
}

export function Error({ title }: ErrorProps) {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
}
