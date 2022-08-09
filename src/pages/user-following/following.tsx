
import './style.css';
import { Navigate } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation';
import FollowingList from '../../components/section/following-playlist/following-list';
import useFollowing from '../../hooks/useFollowing/useFollowing';
import LoadingItems from '../../components/others/loading-items/loading-items';
import AppBackTopbar from '../../components/navbar/back-topbar/back-topbar';

const AuthFollowing = () => {

  const following = useFollowing();

  const followingSections = {
    'Todos': <FollowingList followingList={following.allFollowing} active section_name='Todos' />,
    'Considerando': <FollowingList followingList={following.considering} section_name='Considerando' />,
    'Siguiendo': <FollowingList followingList={following.watching} section_name='Siguiendo' />,
    'Finalizado': <FollowingList followingList={following.watched} section_name='Finalizado' />
  };

  return (
    following.isLoaded
      ? <div id="app-following">
        <AppBackTopbar section_name="Siguiendo" />
        <div className="separator">
          <div className="fill-logo">
            <img src="https://i.pinimg.com/originals/e0/35/f1/e035f1b9fd4042457f76e18c40799069.png" />
          </div>
          <Navigation elements={followingSections} />
        </div>
      </div>
      : <LoadingItems />
  );
}

const AppFollowing = ({ logged }: { logged: boolean }) => {

  return (
    logged
      ? <AuthFollowing />
      : <Navigate to="/" />
  )
}

export default AppFollowing;