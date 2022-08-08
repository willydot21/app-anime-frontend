
import './anime-info-section.css';
import { AnimeInfo } from "../../../services/api/tioanime/api-types";
import AppDropdown from '../../dropdown/dropdown';
import AnimeGeneralInfoSection from './anime-info-items/general-info';
import ReleatedAnimes from '../anime-releated/releated-animes';
import usePlaylist from '../../../hooks/usePlaylist/usePlaylist';
import { NavLink } from 'react-router-dom';

const AuthAppDropDown = ({ animeInfo }: { animeInfo: AnimeInfo }) => {

  const logged = window.localStorage.getItem('refresh-token') !== null;

  if (logged) {
    const playlist = usePlaylist({
      name: animeInfo.name,
      id: animeInfo.anime_id,
      poster: animeInfo.poster
    }, logged);

    return <AppDropdown options={['Siguiendo', 'Considerando', 'Finalizado']} name="Seguir" externalState={playlist.playlistState} />
  }

  return <NavLink className="anime-info-alert anime-info-text" to="/login">
    <i className="material-icons">warning</i>
    Necesita una cuenta para poder seguir este anime.
  </NavLink>

}

const AnimeInfoSection = ({ animeInfo }: { animeInfo: AnimeInfo }) => {
  return (
    <div className="anime-info navigation-hidden" section-name="Información" >
      <AnimeGeneralInfoSection animeInfo={animeInfo} />
      <AuthAppDropDown animeInfo={animeInfo} />
      <ReleatedAnimes releated={animeInfo.releated} />
    </div>
  );
};

export default AnimeInfoSection;