
import './anime.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import AppLoading from "../../components/others/loading";
import AnimeInfoBanner from '../../components/section/anime-info-section/anime-info-items/banner/anime-info-banner';
import AnimeNavigationItems from "../../components/section/anime-navigation-items/anime-navigation-items";
import { fetchAnimeInfo, initialState } from "./anime.utils";
import { AnimeInfo } from '../../services/api/tioanime/api-types';

const RenderAppAnime = ({ animeInfo }: { animeInfo: AnimeInfo }) => (
  <div className="app-anime">
    <AnimeInfoBanner banner={animeInfo.banner} poster={animeInfo.poster} animeid={animeInfo.anime_id} />
    <div className="small-margin">
      <Navigation elements={AnimeNavigationItems({ animeInfo })} defaultItem="Información" />
    </div>
  </div>
)

const AppAnime = () => {

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
      ? <RenderAppAnime animeInfo={animeInfo} />
      : <AppLoading />
  );

}

export default AppAnime;