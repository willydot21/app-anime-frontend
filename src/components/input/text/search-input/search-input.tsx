
import './style.css';
import { searchInputProps } from './search-input-types';
import { handlerOnFocus, handlerOnKeyUp } from './search-input.utils';

const SearchInput = ({ searchingState, setQueryItems, suggestionsRef, inputRef }: searchInputProps ) => {

  const [ searching, setSearching ] = searchingState;

  const fetchQuery = async () => {
    setSearching(true);
    handlerOnKeyUp( inputRef, setQueryItems, setSearching );
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