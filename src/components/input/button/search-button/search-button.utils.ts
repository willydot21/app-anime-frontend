
import React from "react";
import { queryItemsInitialState } from "../../../../pages/search/search.utils";
import { AnimeSearch } from "../../../../services/api/tioanime/api-types";
import { fetchQueryItems } from "../../text/search-input/search-input.utils";

export const handlerSearchClick = async (
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