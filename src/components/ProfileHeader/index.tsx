import { Container } from './styles';
import { useUser } from '../../hooks/user';
import { formatDate } from '../../utils/formatDate';

export function ProfileHeader() {
  const { user } = useUser();

  return (
    <Container>
      <img
        src={user?.avatar_url}
        alt="Imagem de perfil"
        width="72"
        height="72"
      />

      <div>
        <h3>{user?.name}</h3>
        <p>@{user?.login}</p>
        <p>Entrou em {formatDate(user?.created_at as string)}</p>
      </div>
    </Container>
  );
}
