import { useEffect } from 'react';
import { useUser } from '../../hooks/user';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './styles';

export function SearchBar() {
  const { updateUsername, username, isLoading, getUser } = useUser();

  useEffect(() => {
    function searchOnEnter(e: KeyboardEvent) {
      const key = e.key;

      if (key === 'Enter') {
        getUser(username);
      }
    }

    window.addEventListener('keydown', searchOnEnter);

    return () => window.removeEventListener('keydown', searchOnEnter);
  });

  return (
    <Container>
      <Input
        placeholder="Nome de usuário do Github..."
        id="user"
        name="user"
        onChange={e => updateUsername(e.target.value)}
        value={username}
      />
      <Button
        disabled={isLoading}
        onClick={() => getUser(username)}
        name="search"
        type="button"
        role="button"
        aria-label="Pesquisar"
      />
    </Container>
  );
}
