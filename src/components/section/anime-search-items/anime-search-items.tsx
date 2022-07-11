
import './style.css';
import { AnimeSearch, ArticleItem, FiltersResult } from "../../../services/api/api-types";
import DefaultContainer from "../../container/default-container/default-container";
import DefaultContainerItem from '../../container/default-container-item/default-container-item';

const renderContainerItems = (results: ArticleItem[]) => (
  <DefaultContainer>{
    results.map( (anime, index) => (<DefaultContainerItem item={anime} link={`/anime/${anime.id}`} index={index}/>) )
  }</DefaultContainer>
);

const AnimeSearchItems = ({ items }:{ items:AnimeSearch|FiltersResult }) => {

  const anime_results = (items as AnimeSearch).anime_results !== undefined
  ? (items as AnimeSearch).anime_results
  : (items as FiltersResult).results;

  const query = (items as AnimeSearch).query ? (items as AnimeSearch).query : null;

  return (
    <div className="anime-search-items">{
      renderContainerItems(anime_results)
    }</div>
  );
}

export default AnimeSearchItems;