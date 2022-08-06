
import './anime-info-section.css';
import { AnimeInfo } from "../../../services/api/tioanime/api-types";
import AppDropdown from '../../dropdown/dropdown';
import AnimeGeneralInfoSection from './anime-info-items/general-info';
import ReleatedAnimes from '../anime-releated/releated-animes';
import usePlaylist from '../../../hooks/usePlaylist/usePlaylist';

const AnimeInfoSection = ({ animeInfo }: { animeInfo: AnimeInfo }) => {

  const playlist = usePlaylist({
    name: animeInfo.name,
    id: animeInfo.anime_id,
    poster: animeInfo.poster
  });

  return (
    <div className="anime-info navigation-hidden" section-name="Información" >
      <AnimeGeneralInfoSection animeInfo={animeInfo} />
      <AppDropdown options={['Siguiendo', 'Considerando', 'Finalizado']} name="Seguir" externalState={playlist.playlistState} />
      <ReleatedAnimes releated={animeInfo.releated} />
    </div>
  );
};

export default AnimeInfoSection;