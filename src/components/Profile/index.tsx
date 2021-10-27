import { Container } from './styles';
import { useUser } from '../../hooks/user';
import { Default } from '../Default';
import { DefaultProfileContent } from '../DefaultProfileContext';

export function Profile() {
  const { hasSearched, isLoading } = useUser();

  return (
    <Container isLoading={isLoading} hasSearched={hasSearched}>
      {!hasSearched ? (
        <Default message="O resultado aparecerá aqui." />
      ) : (
        <DefaultProfileContent />
      )}
    </Container>
  );
}
