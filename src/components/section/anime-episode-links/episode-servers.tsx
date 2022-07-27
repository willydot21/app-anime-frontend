
import './style.css';
import React, { useEffect, useState } from "react";
import SelectModal from "../../form/select-modal/select-modal";
import { AnimeLinks } from "../../../services/api/tioanime/api-types";
import { getAnimeLinks, MapAnimeLinks } from "./episode-servers.utils";
import AppLoading from '../../others/loading';

const serverLinksIS:AnimeLinks = {
  id: '', chapter:0,
  links: {
    watch_links:{}, download_links:{}
  }
}

const EpisodeServersModal = ({ setSelectedServer, serverEpisode }:{ 
  setSelectedServer:React.Dispatch<React.SetStateAction<{src:string, server:string, episode:number}>>
  serverEpisode:{id:string, episode:number}
}) => {

  const [ serverLinks, setServerLinks ] = useState<AnimeLinks>(serverLinksIS);
  const [ loading, setLoading ] = useState(false);

  useEffect( () => {
    
    if (serverEpisode.id.length) getAnimeLinks(serverEpisode, setServerLinks, setLoading);

  }, [serverEpisode]);

  return (
    <SelectModal id="episode-servers-modal" title="Servidores">{
      loading
      ? <AppLoading />
      : <ul className="episode-servers"> {MapAnimeLinks(serverLinks, setSelectedServer)} </ul>
    }</SelectModal>
  );
}

export default EpisodeServersModal;