import { useUser } from '../../hooks/user';
import { Container } from './styles';

export function ProfileData() {
  const { user } = useUser();

  return (
    <Container>
      <p>{user?.bio || 'Este perfil não possui descrição.'}</p>

      <div>
        <div>
          <span>Repos</span>
          <span>{user?.public_repos}</span>
        </div>

        <div>
          <span>Seguidores</span>
          <span>{user?.followers}</span>
        </div>

        <div>
          <span>Seguindo</span>
          <span>{user?.following}</span>
        </div>
      </div>
    </Container>
  );
}
