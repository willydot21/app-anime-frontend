
import './anime-info-right.css';
import { AnimeInfo } from "../../../../../services/api/api-types";
import AnimeOtherInfo from "../other-info/anime-other-info";
import AnimeInfoGenres from "../genres/anime-info-genres";

const Synopsis = ({synopsis}:{synopsis:string}) => (
  synopsis
  ? <p className="anime-info-synopsis"> {synopsis} </p> 
  : <p className="no-synopsis"> No hay sinopsis. </p>
);

const AnimeInfoRight = ({ item }: { item: AnimeInfo }) => {
  return (
    <div className="anime-info-right">

      <h3 className="anime-info-title"> {item.name} </h3>
      
      <Synopsis synopsis={item.synopsis} />

      <AnimeOtherInfo
        season={item.season}
        type={item.type}
        year={item.year}
        status={item.status}
      />

      <AnimeInfoGenres genres={item.genres} />

    </div>
  )
}

export default AnimeInfoRight;