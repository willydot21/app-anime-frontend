
import ReleatedAnimes from "../anime-releated/releated-animes";
import AnimeEpisodes from "../anime-episodes/anime-episodes";
import { AnimeInfo } from "../../../services/api/tioanime/api-types";
import AnimeInfoSection from "../anime-info-section/anime-info-section";

const AnimeNavigationItems = ({ animeInfo }: { animeInfo: AnimeInfo }) => {

  return ({

    'Información': (<AnimeInfoSection animeInfo={animeInfo} />),

    'Episodios': (
      <AnimeEpisodes item={{
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