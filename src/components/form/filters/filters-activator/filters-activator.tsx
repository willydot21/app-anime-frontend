
import './style.css';
import React, { useEffect, useRef, useState } from "react";
import { showFiltersForm, setupActivator } from "./filters-activator-utils";

const FiltersActivator = (
  { form, formTop, formActiveState }:
  { form:React.RefObject<HTMLFormElement>, 
    formTop:number, 
    formActiveState:[boolean, React.Dispatch<React.SetStateAction<boolean>>] }
) => {

  const [ formActive, setFormActive ] = formActiveState;

  const $this = useRef<HTMLButtonElement>(null);

  const $className = `filters-activator ${formActive? 'active':''}`;

  useEffect(() => setupActivator($this), []);

  return (
    <button onClick={() => showFiltersForm(form, formTop, setFormActive)} className={$className} ref={$this} >
      <span className="material-icons">
        filter_list
      </span>
      <p className="activator-text">FILTERS</p>
    </button>
  );

}

export default FiltersActivator;