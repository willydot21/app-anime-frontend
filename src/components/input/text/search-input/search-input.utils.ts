
import { AnimeSearch, ApiError } from "../../../../services/api/api-types";
import TioanimeApi from "../../../../services/api/api";
import React from "react";

let timer: NodeJS.Timeout;

const waitTime = 1000;

const fetchItems = async ( 
  query: string,
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>
) => {
  
  const items = await TioanimeApi.getByQuery([{
    name: 'q', value: query
  }]);

  if ((items as ApiError).message === undefined) {

    setQueryItems(items as AnimeSearch);

  } else { console.log(items); }

}

export const handlerOnKeyUp = async (
  inputRef: React.RefObject<HTMLInputElement>,
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>,
  setSearching: React.Dispatch<React.SetStateAction<boolean>>
) => {
  
  clearTimeout(timer);

  const $this = inputRef;

  if ($this.current) {
    
    const query = $this.current.value;

    timer = setTimeout( async () => {
      await fetchItems(query, setQueryItems);
      setSearching(false);
    }, waitTime);

  }

}