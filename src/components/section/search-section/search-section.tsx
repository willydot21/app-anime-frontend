
import './style.css';
import { NavLink } from 'react-router-dom';
import SearchButton from '../../input/button/search-button/search-button';
import SearchInput from '../../input/text/search-input/search-input';
import { SearchSectionProps } from './search-section-types';
import { handlerSearchClick } from '../../input/button/search-button/search-button.utils';
import { useRef } from 'react';

const SearchSection = ({
  externalInputRef,
  setQueryItems,
  searchingState,
  suggestionsRef
}:SearchSectionProps) => {

  const [ searching, setSearching ] = searchingState;
  const inputRef = externalInputRef || useRef<HTMLInputElement>(null);

  return (
    <div className="search-section">

      <NavLink to="/" className="material-icons">
        west
      </NavLink>

      <div className="separator">
      <SearchInput
        inputRef={inputRef}
        searchingState={[searching, setSearching]}
        setQueryItems={setQueryItems}
        suggestionsRef={suggestionsRef}
      />

      <SearchButton
        handlerClick={
          () => { handlerSearchClick(inputRef, searching, setQueryItems, setSearching) }
        }
      />
      </div>

      {/* InputSuggestions */}

    </div>
  );

}

export default SearchSection;