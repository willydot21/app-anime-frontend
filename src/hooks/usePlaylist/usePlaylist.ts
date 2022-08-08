
import { useEffect, useState } from "react";
import { ArticleItem } from "../../services/api/tioanime/api-types";
import { fetchAnimeFollowing } from "../useFollowing/utils";
import { handleGetRefreshToken } from "../useUserHook/utils";
import { UsePlaylist } from "./hook-types";
import { addAnimeToPlaylist, parseEnglishPlaylist, removeAnimeFromPlaylist } from "./utils";

export default function usePlaylist(anime: ArticleItem, logged: boolean): UsePlaylist {

  const [changed, setChanged] = useState(false);

  const [playlist, setPlaylist] = useState('Seleccionar');

  const [oldPlaylist, setOldPlaylist] = useState(playlist);

  const updatePlaylist = async () => {

    await handleGetRefreshToken();

    if (playlist !== oldPlaylist) {

      if (oldPlaylist !== 'Seleccionar') {

        await removeAnimeFromPlaylist(oldPlaylist, anime.id);

      }

      await addAnimeToPlaylist(playlist, anime);

    }

  }

  const setupPlaylist = async () => {

    await handleGetRefreshToken();

    const followingAnime = await fetchAnimeFollowing(anime.id);

    if (followingAnime) {

      const parsedPlaylist = parseEnglishPlaylist[followingAnime.playlist[0] as keyof typeof parseEnglishPlaylist];

      setChanged(true);

      setPlaylist(parsedPlaylist);

    }

  }

  useEffect(() => {

    setupPlaylist();

  }, []);

  useEffect(() => {

    if (!changed) updatePlaylist();

    if (changed) setChanged(false);

    setOldPlaylist(playlist);

  }, [playlist]);

  return {
    playlistState: [playlist, setPlaylist]
  }

}