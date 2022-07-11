
import './search.css';
import { useEffect, useState } from "react";
import { AnimeSearch } from '../../services/api/api-types';
import { handlerSearchMore, queryItemsInitialState } from './search.utils';
import SearchSection from '../../components/section/search-section/search-section';
import SearchWrapper from '../../components/section/search-wrapper/search-wrapper';

const AppSearch = () => {

  const [ searching, setSearching ] = useState(Boolean);

  const [ queryItems, setQueryItems ] = useState<AnimeSearch>(queryItemsInitialState);

  return (

    <div className="app-search">

      <SearchSection 
        searchingState={[ searching, setSearching ]}
        setQueryItems={setQueryItems}
      />

      <SearchWrapper 
        searching={searching} 
        queryItemsState={[queryItems, setQueryItems]} 
        callbackLoadMore={() => handlerSearchMore(queryItems, setQueryItems)}
      />
      
    </div>
    
  );

}

export default AppSearch;
