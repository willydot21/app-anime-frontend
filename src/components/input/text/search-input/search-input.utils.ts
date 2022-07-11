
import { AnimeSearch, ApiError } from "../../../../services/api/api-types";
import TioanimeApi from "../../../../services/api/api";
import React from "react";
import { queryItemsInitialState } from "../../../../pages/search/search.utils";

let timer: NodeJS.Timeout;

const waitTime = 300;

export const fetchQueryItems = async ( 
  query: string,
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>
) => {
  
  const items = await TioanimeApi.getByQuery([{
    name: 'q', value: query
  }]);

  if (!((items as ApiError).message)) {

    setQueryItems(items as AnimeSearch);

  } else { console.log('aaaaaaaaaaaaaaaaaaa'); setQueryItems(queryItemsInitialState); }

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

      await fetchQueryItems(query, setQueryItems);
      
      setSearching(false);
      
    }, waitTime);

  }

}

export const clickOutside = (
  ev: MouseEvent,
  suggestionsRef:React.RefObject<HTMLDivElement>
) => {

  if ( 
    suggestionsRef.current && 
    (ev.target as HTMLInputElement).name !== 'search-input' &&
    !suggestionsRef.current.contains(ev.target as HTMLInputElement)
  ) {

    suggestionsRef.current.style.opacity='0%';
    
  } // check if click outside.

  document.onmousedown = null;
}

export const handlerOnFocus = (suggestionsRef:React.RefObject<HTMLDivElement>) => {

  if (suggestionsRef.current) {

    suggestionsRef.current.style.opacity='100%';

    document.addEventListener('mousedown', (ev) => clickOutside(ev, suggestionsRef));

  }

}