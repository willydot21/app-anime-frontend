
import './anime.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import AppLoading from "../../components/others/loading";
import AnimeInfoSection from "../../components/section/anime-info-section/anime-info-section";
import AnimeNavigationItems from "../../components/section/anime-navigation-items/anime-navigation-items";
import { fetchAnimeInfo, initialState } from "./anime.utils";

const AppAnime = ({ }) => {

  const [animeInfo, setAnimeInfo] = useState(initialState);

  const params = useParams();

  useEffect(() => {

    fetchAnimeInfo(params.id || '', setAnimeInfo);
    // fetch elements, when params change.

    setAnimeInfo(initialState);
    // set loading.

  }, [params]);

  return (
    animeInfo.anime_id
      ? <div className="app-anime">
        <AnimeInfoSection item={animeInfo} />
        <div className="small-margin">
          <Navigation elements={AnimeNavigationItems({ animeInfo })} defaultItem="Episodios" />
        </div>
      </div>
      : <AppLoading />
  );

}

export default AppAnime;