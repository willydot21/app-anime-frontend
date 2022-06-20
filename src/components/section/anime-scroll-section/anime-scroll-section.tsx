
import './anime-scroll-section.css';
import ContainerItem from "../../container/container-item/container-item";
import HorizontalScroll from "../../container/horizontal-scroll/horizontal-scroll";
import { AnimeScrollSectionProps } from "./anime-scroll-section-types";
import SectionTopbar from '../../navbar/section-topbar/section-topbar';

const ScrollAnimeSection = ({items, section, link}:AnimeScrollSectionProps) => {

  return (
    <div className="scroll-anime-section">

      <SectionTopbar 
        link={link || ''}
        section={section}
      />

      <HorizontalScroll>
        <>
        { 
          items.map( item => (
            <ContainerItem 
              item={item} 
              link={`watch/${item.id}`} 
            /> 
          )) 
        }
        </>
      </HorizontalScroll>

    </div>
  );

}

export default ScrollAnimeSection;