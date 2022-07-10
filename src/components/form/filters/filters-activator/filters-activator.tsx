
import './style.css';
import { useEffect, useRef } from "react";
import { showFiltersForm, setupActivator } from "./filters-activator-utils";

const FiltersActivator = ({ form, formTop }:{ form:React.RefObject<HTMLFormElement>, formTop:number }) => {

  const $this = useRef<HTMLButtonElement>(null);

  useEffect(() => setupActivator($this), []);

  return (
    <button onClick={() => showFiltersForm(form, formTop)} className="filters-activator" ref={$this} >
      <span className="material-icons">
        filter_list
      </span>
      <p className="activator-text">FILTERS</p>
    </button>
  );

}

export default FiltersActivator;