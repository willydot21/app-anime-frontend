
import './search.css';
import { useEffect, useRef, useState } from "react";
import { AnimeSearch } from '../../services/api/api-types';
import { queryItemsInitialState } from './search.utils';
import DefaultContainer from '../../components/container/default-container/default-container';
import SearchInput from '../../components/input/text/search-input/search-input';

const AppSearch = () => {

  const [ searching, setSearching ] = useState(Boolean);

  const [ queryItems, setQueryItems ] = useState<AnimeSearch>(queryItemsInitialState);

  return (

    <div className="app-search">

      <SearchInput 
        searchingState={ [searching, setSearching] }
        setQueryItems={ setQueryItems }
      />

      { queryItems.anime_results.map( item => <p>{item.name}</p> ) }
      
    </div>
    
  );

}

export default AppSearch;
