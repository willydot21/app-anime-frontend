
import { useEffect, useState } from "react";
import { ArticleItem } from "../../services/api/tioanime/api-types";
import { handleGetRefreshToken } from "../useUserHook/utils";
import { UsePlaylist } from "./hook-types";
import { addAnimeToPlaylist, handleGetFollowingList, parseEnglishPlaylist, removeAnimeFromPlaylist } from "./utils";

export default function usePlaylist(anime: ArticleItem): UsePlaylist {

  const [isChanged, setIsChanged] = useState(false);

  const [playlist, setPlaylist] = useState('Seleccionar');

  const [oldPlaylist, setOldPlaylist] = useState(playlist);

  const updatePlaylist = async () => {

    await handleGetRefreshToken();

    if (playlist !== oldPlaylist) {

      console.log('new: ', playlist, ' old:', oldPlaylist);

      if (oldPlaylist !== 'Seleccionar') await removeAnimeFromPlaylist(oldPlaylist, anime.id);

      await addAnimeToPlaylist(playlist, anime);

    }

  }

  const setupPlaylist = async () => {

    await handleGetRefreshToken();

    const followedList = await handleGetFollowingList();

    const results = followedList.data.filter((el: any) => el.id === anime.id)[0];

    if (results) {

      const parsedPlaylist = parseEnglishPlaylist[results.playlist[0] as keyof typeof parseEnglishPlaylist];

      setPlaylist(parsedPlaylist);

    }

  }

  useEffect(() => {

    updatePlaylist();

    setOldPlaylist(playlist);

  }, [playlist]);

  useEffect(() => {

    setupPlaylist();

  }, []);

  return {
    playlistState: [playlist, setPlaylist],
    isChanged
  }

}