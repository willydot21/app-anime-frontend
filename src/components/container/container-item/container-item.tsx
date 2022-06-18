
import './container-item.css';
import { NavLink } from "react-router-dom";
import { ContainerItemProps } from "./container-item-types";

const ContainerItem = ({image, link}:ContainerItemProps) => {
  return (
    <NavLink to={link || '#'} className="container-item">
      <img src={image} />
    </NavLink>
  );
}

export default ContainerItem;