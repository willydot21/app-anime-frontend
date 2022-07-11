
import './anime-latest.css';
import LatestSection from "../../container/latest-section/latest-section";
import { AnimeLatestProps } from "./anime-latest-types";

const AnimeLatest = ({latestItems}:AnimeLatestProps) => {

  const {
    ovas, specials, movies
  } = latestItems;

  return (
    <div className="anime-latest">
      <LatestSection latestItems={movies} section_name="Películas" value="movie"/>
      <LatestSection latestItems={ovas} section_name="Ovas" value="ova"/>
      <LatestSection latestItems={specials} section_name="Especiales" value="special"/>
    </div>
  );

}

export default AnimeLatest;