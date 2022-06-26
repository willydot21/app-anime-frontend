
import './style.css';
import { NavLink } from "react-router-dom";
import { ContainerItemProps } from "./container-item-types";

const ContainerItem = ({item, link}:ContainerItemProps) => {
  return (
    <NavLink to={link || '#'} className="container-item">
      <img src={item.poster} alt="" />
      <span>{item.name}</span>
    </NavLink>
  );
}

export default ContainerItem;