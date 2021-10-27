import { Container } from './styles';

interface DefaultProps {
  message: string;
}

export function Default({ message }: DefaultProps) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}
