
import './style.css';
import { ContainerItemProps } from "../container-item/container-item-types";
import { NavLink } from "react-router-dom";

const DefaultContainerItem = ({item, link}:ContainerItemProps) => {
  return (
    <NavLink to={link || '#'} className="default-container-item">
      <img src={item.poster} alt="" />
      <span>{item.name}</span>
    </NavLink>
  )
}

export default DefaultContainerItem;