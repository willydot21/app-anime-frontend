
import './bottom-navbar.css';
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
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

      <NavLink to="#" className="bottom-navbar-link">
        <span className="material-icons">
          star_half
        </span>
        <p> Siguiendo </p>
      </NavLink>

    </div>
  )
}

export default BottomNavbar;