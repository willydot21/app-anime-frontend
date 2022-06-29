
import './style.css';
import { AnimeSearch } from "../../../services/api/api-types";
import DefaultContainer from "../../container/default-container/default-container";
import DefaultContainerItem from '../../container/default-container-item/default-container-item';
import NoElements from '../no-elements/no-elements';

const AnimeSearchItems = ({ items }:{ items:AnimeSearch }) => {
  return (
    <div className="anime-search-items">

      {
        items.anime_results.length
        ? (
          <DefaultContainer>
          { 
            items.anime_results.map( anime => (
              <DefaultContainerItem 
                item={ anime }
                link={ `/anime/${anime.id}` }
              />
            ) ) 
          }
          </DefaultContainer>
        ): <NoElements />
      }

    </div>
  )
}

export default AnimeSearchItems;