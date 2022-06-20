
import './anime-latest.css';
import LatestSection from "../../container/latest-section/latest-section";
import { AnimeLatestProps } from "./anime-latest-types";

const AnimeLatest = ({latestItems}:AnimeLatestProps) => {

  const {
    ovas, specials, movies
  } = latestItems;

  return (
    <div className="anime-latest">
      <LatestSection latestItems={movies} section_name="Películas" />
      <LatestSection latestItems={ovas} section_name="Ovas" />
      <LatestSection latestItems={specials} section_name="Especiales" />
    </div>
  );

}

export default AnimeLatest;