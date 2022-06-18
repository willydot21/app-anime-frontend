
import ScrollAnimeSection from "../components/section/anime-scroll-section/anime-scroll-section";
import AppCarousel from "../components/carousel/home-carousel";
import HomeNavbar from "../components/navbar/home-navbar";
import { useEffect, useState } from "react";
import { ApiError, AnimeAllLatest} from "../services/api/api-types";
import TioanimeApi from "../services/api/api";

const initialState: AnimeAllLatest = {
  movies: [],
  ovas: [],
  specials: [],
  animes: [],
  chapters: []
}

const fetchLatest = async (
  setLatest:React.Dispatch<React.SetStateAction<AnimeAllLatest>>
) => {

  const req = await TioanimeApi.getLatest('*'); 
  // '*' only could return AnimeAllLatest or ApiError.

  if( (req as ApiError).message === undefined ) {

    setLatest((req as AnimeAllLatest));

  } else { console.log(req) }

}

const AppHome = () => {

  const [latest, setLatest] = useState<AnimeAllLatest>(initialState);

  useEffect( () => {
    fetchLatest(setLatest);
  }, [] );

  return (
    <div className="app-home">
      <HomeNavbar />
      <AppCarousel />
      <ScrollAnimeSection section="latest animes" items={latest.animes} />
      <ScrollAnimeSection section="latest animes" items={latest.chapters} />
      <ScrollAnimeSection section="latest animes" items={latest.movies} />
    </div>
  )
}

export default AppHome;