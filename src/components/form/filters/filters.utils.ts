
import { Filters } from "../../../services/api/api-types";
import { filtersInitialState } from "../../../pages/series/series.utils";
import { FormFiltersItems, FormFiltersItemsWithoutRef, FormFiltersItemsWithStates } from "./filters-types";

// clear functionality.
const resetCheckbox = (checkboxContainers:HTMLDivElement[]) => {

  checkboxContainers.forEach(checkboxContainer => {

    checkboxContainer.querySelectorAll('.app-checkbox:checked').forEach( checkbox => {

      (checkbox as HTMLInputElement).checked = false;

    } ); 

  } );

}

const resetInput = (inputs:HTMLInputElement[]) => {
  inputs.forEach( input => {
    input.value = '';
  } );
}

const resetFiltersForm = ({ setStates, refs }:FormFiltersItemsWithoutRef) => {

  const {
    setSort,
    setStatus,
    setFiltersForm
  } = setStates;

  const {
    inputEndYear,
    inputStartYear,
    checkboxCategory, 
    checkboxTypes
  } = refs;

  resetCheckbox([checkboxCategory, checkboxTypes]);
  resetInput([inputStartYear, inputEndYear]);
  setSort('Más recientes');
  setStatus('Finalizado');
  setFiltersForm(filtersInitialState);

}
// clear functionality.


// apply functionality.
const parseState = (state:string) => {
  
  return {
    'Más recientes': 'recent',
    'Menos recientes': '-recent',
    'Finalizado': 'finished',
    'En emisión': 'broadcast',
    'Proximamente': 'coming-soon'
  }[state]
  
}

const getInputValue = (inputs:HTMLInputElement[]) => {
  return inputs.map( input => input.value );
}

const getCheckBoxes = (checkboxContainers:HTMLDivElement[]) => {

  return checkboxContainers.map( checkboxContainer => {

    const checkboxName = checkboxContainer.getAttribute('data-checkbox-name');

    return [ checkboxName || '', 
      [...checkboxContainer.querySelectorAll('.app-checkbox:checked')].map( checkbox => (checkbox as HTMLInputElement).value )
    ];

  });

}

const getArrayByName = (checkboxValues:[string, string[]][], itemName:string) => {

  var auxArr:string[] = [];

  checkboxValues.forEach( item => {

    if (item[0] === itemName) {
      auxArr = item[1];
    }

  });

  return auxArr;

}

const areValidYears = (years:string[]) => {
  return years.every( year => ( 
    (parseInt(year) >= 1950) && 
    (parseInt(year) <= new Date().getFullYear()) 
  ));
  // if year greater or equal than 1950 and smaller than actual date, returns year
  // otherwise doesn't return.
}

const applyFormChanges = ({ setStates, refs, states }:FormFiltersItemsWithStates) => {

  const {
    setFiltersForm
  } = setStates;

  const {
    sort, status
  } = states;

  const {
    inputEndYear,
    inputStartYear,
    checkboxCategory, 
    checkboxTypes
  } = refs;

  const inputYears = getInputValue([inputStartYear, inputEndYear]);

  const checkboxValues = getCheckBoxes([checkboxCategory, checkboxTypes]);

  const types = getArrayByName(checkboxValues as [string, string[]][], 'types');

  const genres = getArrayByName(checkboxValues as [string, string[]][], 'genres');

  setFiltersForm({
    years: areValidYears(inputYears) ? inputYears : [],
    sort: parseState(sort) || '',
    status: parseState(status) || '',
    types,
    genres
  });

}
// apply functionality.

export const formFiltersAction = (filterItems:FormFiltersItems, action:string) => {

  const {
    inputEndYear,
    inputStartYear,
    checkboxCategory, 
    checkboxTypes
  } = filterItems.refs;

  if (
    inputEndYear.current && 
    inputStartYear.current && 
    checkboxCategory.current && 
    checkboxTypes.current 
  ) {

    const refs = {
      inputEndYear: inputEndYear.current,
      inputStartYear: inputStartYear.current,
      checkboxCategory: checkboxCategory.current,
      checkboxTypes: checkboxTypes.current
    }
  
    switch(action) {

      case 'clear':
        resetFiltersForm({refs, setStates:filterItems.setStates});
        break;

      case 'set-form-filters':
        applyFormChanges({refs, setStates:filterItems.setStates, states:filterItems.states});
        break;

    } // end switch
  
  } // end if

}