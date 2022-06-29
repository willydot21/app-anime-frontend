
import './style.css';
import { NavLink } from 'react-router-dom';
import SearchButton from '../../input/button/search-button/search-button';
import SearchInput from '../../input/text/search-input/search-input';
import { SearchSectionProps } from './search-section-types';

const SearchSection = ({
  inputRef,
  setQueryItems,
  searchingState,
  suggestionsRef,
  handlerOnClick
}:SearchSectionProps) => {

  const [ searching, setSearching ] = searchingState;

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
          () => { handlerOnClick(inputRef, searching, setQueryItems, setSearching) }
        }
      />
      </div>

      {/* InputSuggestions */}

    </div>
  );

}

export default SearchSection;