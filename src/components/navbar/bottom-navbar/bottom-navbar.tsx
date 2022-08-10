
import './bottom-navbar.css';
import { NavLink } from "react-router-dom";
import AlertAccount from '../../others/alert-account';

const AuthFollowing = ({ logged }: { logged: boolean }) => (
  logged
    ? <NavLink to="/following" className="bottom-navbar-link">
      <span className="material-icons">
        star_half
      </span>
      <p> Siguiendo </p>
    </NavLink>
    : <AlertAccount />
)

const BottomNavbar = ({ logged }: { logged: boolean }) => {
  return (
    <div className="bottom-navbar">

      <NavLink to="#" className="bottom-navbar-link">
        <span className="material-icons">
          home
        </span>
        <p> Principal </p>
      </NavLink>

      <NavLink to="/search" className="bottom-navbar-link">
        <span className="material-icons">
          search
        </span>
        <p> Buscar </p>
      </NavLink>

      <AuthFollowing logged={logged} />

    </div>
  )
}

export default BottomNavbar;