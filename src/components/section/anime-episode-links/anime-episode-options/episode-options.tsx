
import './style.css';
import React, { useEffect, useState } from "react";
import SelectModal from "../../../form/select-modal/select-modal";
import { AnimeLinks } from "../../../../services/api/api-types";
import { getAnimeLinks } from "./episode-options-utils";

const serverLinksIS:AnimeLinks = {
  id: '', chapter:0,
  links: {
    watch_links:{}, download_links:{}
  }
}

const EpisodeOptionsModal = ({ setSelectedServer, serverEpisode }:{ 
  setSelectedServer:React.Dispatch<React.SetStateAction<string>>
  serverEpisode:{id:string, episode:number}
}) => {

  const [ serverLinks, setServerLinks ] = useState<AnimeLinks>(serverLinksIS);

  useEffect( () => {
    
    if (serverEpisode.id.length) getAnimeLinks(serverEpisode, setServerLinks);

  }, [serverEpisode]);

  return (
    <SelectModal id="episode-options-modal" title="Opciones">
      <button className="episode-option">Ver 
        <span className="material-icons"> chevron_right </span> 
      </button>
      <button className="episode-option">Descargar
        <span className="material-icons"> chevron_right </span> 
      </button>
    </SelectModal>
  );
}

export default EpisodeOptionsModal;