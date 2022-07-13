
import TioanimeApi from "../../../../services/api/api";
import { AnimeLinks, ApiError } from "../../../../services/api/api-types";

export const getAnimeLinks = async (
  { id, episode }:{ id:string, episode:number },
  setServerLinks:React.Dispatch<React.SetStateAction<AnimeLinks>>
) => {
  
  const links = await TioanimeApi.getAnimeChapter(id, episode);

  if (!(links as ApiError).message) { 

    setServerLinks(links as AnimeLinks);

  } else {

    setServerLinks({id, chapter:episode, links:{ download_links:{}, watch_links:{} }} as AnimeLinks);
    
  }

}