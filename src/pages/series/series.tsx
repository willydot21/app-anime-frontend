
import { useState } from "react";
import FiltersForm from "../../components/form/filters/filters";
import { filtersInitialState } from "./series.utils";

const AppSeries = () => {

  const [ filtersForm, setFiltersForm ] = useState(filtersInitialState);

  return (
    <div className="app-series">
    
      <FiltersForm externalState={[filtersForm, setFiltersForm]} />

    </div>
  );
}

export default AppSeries;