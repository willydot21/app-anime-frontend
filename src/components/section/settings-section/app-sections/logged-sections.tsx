
import { NavLink } from "react-router-dom";

const Logged = ({ loginHandlers }: {
  loginHandlers: {
    userLogout: () => void
  }
}) => (
  <>
    <button className="setting-link" onClick={loginHandlers.userLogout}>
      <i className="material-icons">logout</i> Logout
    </button>
    <NavLink className="setting-link" to="/change-password">
      <i className="material-icons">lock_reset</i> Cambiar contraseña
    </NavLink>
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