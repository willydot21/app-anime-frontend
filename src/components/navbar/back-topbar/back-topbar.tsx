
import './style.css';
import { NavLink } from "react-router-dom";

const AppBackTopbar = ({ section_name }: { section_name: string }) => (
  <div className="app-back-topbar">
    <NavLink to=".." className="material-icons">chevron_left</NavLink>
    <h3>{section_name}</h3>
  </div>
);

export default AppBackTopbar