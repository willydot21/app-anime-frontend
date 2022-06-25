
import './style.css';
import { useRef } from 'react';
import { searchInputProps } from './search-input-types';
import { handlerOnKeyUp } from './search-input.utils';

const SearchInput = ( { searchingState, setQueryItems }: searchInputProps ) => {

  const [ searching, setSearching ] = searchingState;

  const $this = useRef<HTMLInputElement>(null);

  const fetchQuery = async () => {
    setSearching(true);
    handlerOnKeyUp( $this, setQueryItems, setSearching );
  }

  return ( 
    <input type="text" 
      className="normal-rect-input"
      onKeyUp={ fetchQuery }
      ref={ $this }
    />
  );

}

export default SearchInput;