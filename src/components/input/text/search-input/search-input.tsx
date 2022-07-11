
import './style.css';
import { searchInputProps } from './search-input-types';
import { handlerOnFocus, handlerOnKeyUp } from './search-input.utils';
import { queryItemsInitialState } from '../../../../pages/search/search.utils';

const SearchInput = ({ searchingState, setQueryItems, suggestionsRef, inputRef }: searchInputProps ) => {

  const [ _searching, setSearching ] = searchingState;

  const fetchQuery = async () => {
    setSearching(true);
    handlerOnKeyUp( inputRef, setQueryItems, setSearching );
    setQueryItems((prev) => { return {...prev, anime_results:[]} });
  }

  return ( 
    <input type="text" 
      className="search-input"
      onKeyUp={ fetchQuery }
      onFocus={ 
        suggestionsRef
        ? () => {handlerOnFocus(suggestionsRef)}
        : undefined 
      }
      ref={ inputRef }
      placeholder="search"
      name="search-input"
    />
  );

}

export default SearchInput;