import { useUser } from '../../hooks/user';
import { Error } from '../Error';
import { ProfileData } from '../ProfileDescription';
import { ProfileFooter } from '../ProfileFooter';
import { ProfileHeader } from '../ProfileHeader';
import Loader from 'react-loader-spinner';
import { COLORS } from '../../theme/theme';

export function DefaultProfileContent() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <Loader type="Grid" width={48} height={48} color={COLORS.BLUE_TERNARY} />
    );
  }

  if (user) {
    return (
      <>
        <ProfileHeader />
        <ProfileData />
        <ProfileFooter />
      </>
    );
  }

  return <Error title="Sem resultados :(" />;
}
