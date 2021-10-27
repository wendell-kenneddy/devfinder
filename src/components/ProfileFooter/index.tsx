import { Container } from './styles';
import { MdRoom } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import { useUser } from '../../hooks/user';
import { COLORS } from '../../theme/theme';

export function ProfileFooter() {
  const { user } = useUser();

  function getIconColor(propExists: any) {
    if (propExists) return COLORS.WHITE;

    return COLORS.GRAY_SECONDARY;
  }

  return (
    <Container
      location={user?.location}
      blog={user?.blog}
      twitter_url={user?.twitter_username}
      company={user?.company}
    >
      <ul>
        <li>
          <MdRoom size="24" color={getIconColor(user?.location)} />
          <p>{user?.location || 'Indisponível'}</p>
        </li>
        <li>
          <FaLink size="24" color={getIconColor(user?.blog)} />
          <a href={user?.blog || '#'} rel="noopener noreferrer" target="_blank">
            {user?.blog || 'Indisponível'}
          </a>
        </li>
        <li>
          <FaTwitter size="24" color={getIconColor(user?.twitter_username)} />
          <p>{user?.twitter_username || 'Indisponível'}</p>
        </li>
        <li>
          <BiBuildings size="24" color={getIconColor(user?.company)} />
          <p>{user?.company || 'Indisponível'}</p>
        </li>
      </ul>
    </Container>
  );
}
