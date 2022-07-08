
import { Filters } from "../../../services/api/api-types"

export interface FormFiltersItems {

  refs: {
    checkboxCategory: React.RefObject<HTMLDivElement>
    checkboxTypes: React.RefObject<HTMLDivElement>
    inputStartYear: React.RefObject<HTMLInputElement>
    inputEndYear: React.RefObject<HTMLInputElement>
    filtersForm: React.RefObject<HTMLFormElement>
  }

  setStates: {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setSort: React.Dispatch<React.SetStateAction<string>>;
    setFiltersForm: React.Dispatch<React.SetStateAction<Filters>>;
  } 

  states: {
    sort: string;
    status: string;
  }

}

export interface FormFiltersItemsWithoutRef {

  refs: {
    checkboxCategory: HTMLDivElement
    checkboxTypes: HTMLDivElement
    inputStartYear: HTMLInputElement
    inputEndYear: HTMLInputElement
  }

  setStates: {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setSort: React.Dispatch<React.SetStateAction<string>>;
    setFiltersForm: React.Dispatch<React.SetStateAction<Filters>>;
  } 

}

export interface FormFiltersItemsWithStates extends FormFiltersItemsWithoutRef {
  states: {
    sort: string;
    status: string;
  }
}

export interface FiltersFormProps {
  externalState: [Filters, React.Dispatch<React.SetStateAction<Filters>>]
}