
import React from "react";
import { AnimeSearch } from "../../../../services/api/api-types";
import { fetchQueryItems } from "../../text/search-input/search-input.utils";

export const handlerClick = async (
  query: React.RefObject<HTMLInputElement>,
  searching: boolean,
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>,
  setSearching: React.Dispatch<React.SetStateAction<boolean>>
) => {

  if ( !searching && query.current ) {

    setSearching(true);

    const items = await fetchQueryItems(query.current.value, setQueryItems);

    setSearching(false);

  }

}