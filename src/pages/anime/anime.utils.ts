
import TioanimeApi from "../../services/api/tioanime/api";
import { AnimeInfo, ApiError } from "../../services/api/tioanime/api-types";

export const initialState: AnimeInfo = {
  name: '',
  anime_id:  '',
  malId: '',
  episodePoster: '',
  poster: '',
  banner: '',
  genres: [],
  synopsis: '',
  chapters: 0,
  type: '',
  year: '',
  status: '',
  season: '',
  releated: []
}

export const fetchAnimeInfo = async (id:string, setAnimeInfo:React.Dispatch<React.SetStateAction<AnimeInfo>>) => {

  const items = await TioanimeApi.getAnime(id);
  // it's only could return AnimeInfo type object.

  if( (items as ApiError).message === undefined ){

    setAnimeInfo((items as AnimeInfo));
    
  } else { console.log(items) }

}