
import { v4 as uuid } from 'uuid';
import { useRef, useState } from 'react';
import { AppDropdownProps } from './dropdown-types';
import { dropdownClick } from './dropdown.util';
import './style.css';

const AppDropdown = ({ options, name, externalState }: AppDropdownProps) => {

  const dropdownOptions = useRef<HTMLUListElement>(null);

  const dropdown = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = externalState || useState(options[0]);

  const selectArticle = () => {

    dropdownClick(dropdownOptions, dropdown);

  }

  return (
    <div className="app-dropdown" ref={dropdown} >

      <p className="app-dropdown-name"> {name} : </p>

      <div className="app-dropdown-select" onClick={selectArticle}>
        <span className="app-dropdown-selected"> {selected} </span>
        <span className="material-icons app-dropdown-arrow"> arrow_drop_down </span>
      </div>

      <ul className="app-dropdown-options" ref={dropdownOptions}>
        {
          options.map(option => (
            <li key={uuid()} onClick={() => setSelected(option)}>{option}</li>
          ))
        }
      </ul>

    </div>
  );

}

export default AppDropdown;