
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArticleItem } from '../../../services/api/api-types';
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
          <div className="loading-suggestions">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )

      }
    </section>
  );
  
}

export default InputSuggestions;