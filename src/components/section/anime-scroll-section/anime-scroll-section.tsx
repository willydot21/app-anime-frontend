
import './anime-scroll-section.css';
import { NavLink } from "react-router-dom";
import ContainerItem from "../../container/container-item/container-item";
import HorizontalScroll from "../../container/horizontal-scroll/horizontal-scroll";
import { AnimeScrollSectionProps } from "./anime-scroll-section-types";

const ScrollAnimeSection = ({items, section}:AnimeScrollSectionProps) => {

  return (
    <div className="scroll-anime-section">

      <div className="scroll-section-topbar">
        <h3>{section}</h3>
        <NavLink to={`category/${section}`}>
          <span className="material-icons">
            chevron_right
          </span>
        </NavLink>
      </div>

      <HorizontalScroll>
        <>
        { 
          items.map( item => (
            <ContainerItem 
              image={item.poster} 
              link={`anime/${item.id}`} 
            /> 
          )) 
        }
        </>
      </HorizontalScroll>

    </div>
  );

}

export default ScrollAnimeSection;