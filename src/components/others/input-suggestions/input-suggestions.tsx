
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArticleItem } from '../../../services/api/tioanime/api-types';
import './style.css';

const InputSuggestions = (
  { suggestions, searching, _ref }
  :{ suggestions:ArticleItem[], searching:boolean, _ref:React.RefObject<HTMLDivElement> }
) => {

  suggestions = suggestions.slice(0, 6);

  return (
    <section className="input-suggestions" ref={_ref}>
      {

        !searching? (
          suggestions.map(suggestion => (
            <NavLink className="input-suggestion" to={`/anime/${suggestion.id}`}>
              <img src={suggestion.poster} />
              <span className="input-suggestion-title"> {suggestion.name} </span>
            </NavLink>
          ))  
        )

        : (
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        )

      }
    </section>
  );
  
}

export default InputSuggestions;