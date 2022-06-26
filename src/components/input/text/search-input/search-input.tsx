
import './style.css';
import { useRef } from 'react';
import { searchInputProps } from './search-input-types';
import { handlerOnFocus, handlerOnKeyUp } from './search-input.utils';

const SearchInput = ({ searchingState, setQueryItems, suggestionsRef }: searchInputProps ) => {

  const [ searching, setSearching ] = searchingState;

  const $this = useRef<HTMLInputElement>(null);

  const fetchQuery = async () => {
    setSearching(true);
    handlerOnKeyUp( $this, setQueryItems, setSearching );
  }

  return ( 
    <input type="text" 
      className="search-input"
      onKeyUp={ fetchQuery }
      onFocus={ () => handlerOnFocus(suggestionsRef) }
      ref={ $this }
      placeholder="search"
      name="search-input"
    />
  );

}

export default SearchInput;