
import './bottom-navbar.css';
import { NavLink } from "react-router-dom";

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

const AlertAccount = () => (
  <div className="alert alert-warning d-flex align-items-center account-alert" role="alert">
    <p> Crea una cuenta para poder hacer seguimiento de tus animes! </p>
  </div>
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