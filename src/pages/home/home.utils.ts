
import { AnimeAllLatest, ApiError } from "../../services/api/tioanime/api-types";
import React from "react";
import TioanimeApi from "../../services/api/tioanime/api";

const latestInitialState: AnimeAllLatest = {
  movies: [],
  ovas: [],
  specials: [],
  animes: [],
  chapters: []
}

const fetchLatest = async (
  setLatest:React.Dispatch<React.SetStateAction<AnimeAllLatest>>
) => {

  const req = await TioanimeApi.getLatest('*'); 
  // '*' only could return AnimeAllLatest or ApiError.

  if( (req as ApiError).message === undefined ) {

    setLatest((req as AnimeAllLatest));

  } else { console.log(req) }

}

export { 
  fetchLatest,
  latestInitialState
}