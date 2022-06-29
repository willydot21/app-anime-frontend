
import './style.css';

const SearchButton = ({ handlerClick }:{ handlerClick:React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button className="search-button" onClick={ handlerClick }>
      <span className="material-icons">
        search
      </span>
    </button>
  );
}

export default SearchButton;