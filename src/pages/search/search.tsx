
import './search.css';
import { useRef, useState } from "react";
import { AnimeSearch } from '../../services/api/api-types';
import { handlerLoadMore, queryItemsInitialState } from './search.utils';
import SearchSection from '../../components/section/search-section/search-section';
import { handlerClick } from '../../components/input/button/search-button/search-button.utils';
import SearchWrapper from '../../components/section/search-wrapper/search-wrapper';

const AppSearch = () => {

  const [ searching, setSearching ] = useState(Boolean);

  const [ queryItems, setQueryItems ] = useState<AnimeSearch>(queryItemsInitialState);

  const inputRef = useRef<HTMLInputElement>(null);

  return (

    <div className="app-search">

      <SearchSection 
        inputRef={inputRef}
        searchingState={[ searching, setSearching ]}
        setQueryItems={setQueryItems}
        handlerOnClick={handlerClick}
      />

      <SearchWrapper 
        searching={searching} 
        queryItemsState={[queryItems, setQueryItems]} 
        callbackLoadMore={() => handlerLoadMore(queryItems, setQueryItems)}
      />
      
    </div>
    
  );

}

export default AppSearch;
