
import { Navigate } from 'react-router-dom';
import useFollowing from '../../hooks/useFollowing/useFollowing';
import './style.css';

const AuthFollowing = () => (
  <div id="app-following">
    <div className="app-following-all">
      no.
    </div>
  </div>
)

const AppFollowing = ({ logged }: { logged: boolean }) => {

  const following = useFollowing();

  return (
    logged
      ? <AuthFollowing />
      : <Navigate to="/" />
  )
}

export default AppFollowing;