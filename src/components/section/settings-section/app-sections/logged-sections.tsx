
import { NavLink } from "react-router-dom";
import { handleLogout } from "../../../../services/database/registration/utils";

const Logged = ({ userLogout }:{
  userLogout: () => void
}) => (
  <>
  <button className="setting-link" onClick={userLogout}>
    <i className="material-icons">logout</i> Logout
  </button>
  <button className="setting-link">
    <i className="material-icons">lock_reset</i> Cambiar contraseña
  </button>
  </>
);

const NotLogged = () => (
  <>
  <NavLink to="/register" className="setting-link">
    <i className="material-icons">app_registration</i> Register
  </NavLink>
  <NavLink to="/login" className="setting-link">
    <i className="material-icons">login</i> Login
  </NavLink>
  </>
);

export {
  Logged, NotLogged
}