
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLoading from "../../components/others/loading";
import AnimeEpisodes from "../../components/section/anime-episodes/anime-episodes";
import AnimeInfoSection from "../../components/section/anime-info-section/anime-info-section";
import ReleatedAnimes from "../../components/section/anime-releated/releated-animes";
import AnimeReleated from "../../components/section/anime-releated/releated-animes";
import { fetchAnimeInfo, initialState } from "./anime.utils";

const AppAnime = () => {

  const [animeInfo, setAnimeInfo] = useState(initialState);

  const params = useParams();

  useEffect( () => {
    fetchAnimeInfo(params.id || '', setAnimeInfo);
  }, []);

  return (
    
    <div className="app-anime">

      <AnimeInfoSection item={animeInfo} />
      
      <AnimeEpisodes 
        item={{ 
          episodes: animeInfo.chapters,
          poster: animeInfo.episodePoster,
          id: animeInfo.anime_id,
          name: animeInfo.name,
          animePoster: animeInfo.poster
        }}
      />

      <ReleatedAnimes releated={animeInfo.releated} />
    </div> 

  );
  
}

export default AppAnime;