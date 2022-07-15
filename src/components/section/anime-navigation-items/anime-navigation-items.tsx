
import ReleatedAnimes from "../anime-releated/releated-animes";
import AnimeEpisodes from "../anime-episodes/anime-episodes";
import { AnimeInfo } from "../../../services/api/tioanime/api-types";

const AnimeNavigationItems = ({ animeInfo }:{ animeInfo:AnimeInfo }) => {

  return ({

    'Relacionado': (<ReleatedAnimes name="Relacionado" releated={animeInfo.releated} />),

    'Episodios': (
      <AnimeEpisodes name="Episodios" item={{
        episodes: animeInfo.chapters,
        poster: animeInfo.episodePoster,
        id: animeInfo.anime_id,
        name: animeInfo.name,
        animePoster: animeInfo.poster
      }}
      />
    )

  });

}

export default AnimeNavigationItems;