
import './search.css';
import { useRef, useState } from "react";
import { AnimeSearch } from '../../services/api/api-types';
import { queryItemsInitialState } from './search.utils';
import SearchInput from '../../components/input/text/search-input/search-input';
import AnimeSearchItems from '../../components/section/anime-search-items/anime-search-items';
import InputSuggestions from '../../components/others/input-suggestions/input-suggestions';

const AppSearch = () => {

  const [ searching, setSearching ] = useState(Boolean);

  const [ queryItems, setQueryItems ] = useState<AnimeSearch>(queryItemsInitialState);

  const inputSuggestions = useRef<HTMLDivElement>(null);

  return (

    <div className="app-search">

      <div className="input-suggestions-wrapper">

        <SearchInput 
          searchingState={ [searching, setSearching] }
          setQueryItems={ setQueryItems }
          suggestionsRef={ inputSuggestions }
        />

        <InputSuggestions 
          _ref={inputSuggestions}
          suggestions={queryItems.anime_results} 
          searching={searching}
        />
        
      </div>

      <AnimeSearchItems items={queryItems} />
      
    </div>
    
  );

}

export default AppSearch;
