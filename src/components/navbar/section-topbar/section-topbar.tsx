
import './section-topbar.css';
import { SectionTopbarProps } from "./section-topbar-types";
import { NavLink } from "react-router-dom";

const TopbarLink = ({link}:{link?:string}) => {

  if (link) {
    return (
      <NavLink to={link}>
        <span className="material-icons">
          chevron_right
        </span>
      </NavLink>
    );
  }

  return (<></>);
  
}

const SectionTopbar = ({section, link}:SectionTopbarProps) => {

  return (
    <div className="section-topbar">
      <h3>{section}</h3>
      <TopbarLink link={link} />
    </div>
  );

}

export default SectionTopbar;