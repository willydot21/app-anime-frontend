
import { v4 as uuid } from 'uuid';
import { AnimeInfo } from "../../../../services/api/tioanime/api-types";
import AnimeInfoGenres from "./genres/anime-info-genres";

const sectionDetailWrapper = {
  type: 'Tipo',
  status: 'Estado',
  malId: 'ID',
  season: 'Temporada',
  name: 'Título',
  synopsis: 'Descripción'
}

const AnimePoster = ({ poster }: { poster: string }) => (
  <div className="anime-info-poster">
    <img src={poster} />
  </div>
); // idk where to use this.


const AnimeGenres = ({ genres }: { genres: AnimeInfo['genres'] }) => (
  <div className="anime-info-margin">
    <h6 className="anime-info-subtitle">Géneros</h6>
    {
      genres.length
        ? <AnimeInfoGenres genres={genres} />
        : <p className="anime-info-text"> Sin generos </p>
    }
  </div>
);

const AnimeDetails = ({ animeInfo }: { animeInfo: AnimeInfo }) => (<>{
  ['type', 'status', 'malId', 'season'].map(prop => (
    <div className="anime-info-margin" key={uuid()} >
      <h6 className="anime-info-subtitle"> {sectionDetailWrapper[prop as keyof typeof sectionDetailWrapper]} </h6>
      <p className="anime-info-text">
        {animeInfo[prop as keyof typeof animeInfo] as string | undefined || 'Indefinido'}
      </p>
    </div>
  ))
}</>);

const AnimeMainInfo = ({ animeInfo }: { animeInfo: AnimeInfo }) => (<>{
  ['name', 'synopsis'].map(prop => (
    <div className="anime-info-section" key={uuid()}>
      <h5 className="anime-info-title"> {sectionDetailWrapper[prop as keyof typeof sectionDetailWrapper]}</h5>
      <p className="anime-info-text">
        {animeInfo[prop as keyof typeof animeInfo] as string | undefined || `No hay ${sectionDetailWrapper[prop as keyof typeof sectionDetailWrapper]}`}
      </p>
    </div>
  ))
}</>);

const AnimeGeneralInfoSection = ({ animeInfo }: { animeInfo: AnimeInfo }) => (
  <>
    <div className="anime-info-section">
      <AnimeMainInfo animeInfo={animeInfo} />
      <h5 className="anime-info-title"> Detalles </h5>
      <AnimeDetails animeInfo={animeInfo} />
      <AnimeGenres genres={animeInfo.genres} />
    </div>
  </>
);

export default AnimeGeneralInfoSection;