import { useEffect, useState } from "react";
import ContainerItem from "../../components/container/container-item/container-item";
import HorizontalScroll from "../../components/container/horizontal-scroll/horizontal-scroll";
import ScrollAnimeSection from "../../components/section/anime-scroll-section/anime-scroll-section";
import { fetchProgramming, ProgrammingInitialState } from "./programming.utils";

const AppProgramming = () => {

  const [ programming, setProgramming ] = useState(ProgrammingInitialState);

  useEffect(() => {

    fetchProgramming(setProgramming);

  }, []);

  return (
    
    <div className="app-programming">
      {
        Object.keys(programming).map( day => {

          const items = (programming[day as keyof typeof programming]).map( item => {

            return { ...item, image:undefined, poster: item.image }

          } );
          

          return (
            <ScrollAnimeSection 
              items={ items }
              section={ day }
            />
          );

        })
      }
    </div>
    
  );

}

export default AppProgramming