
import './style.css';
import { useEffect, useState } from "react";
import FiltersForm from "../../components/form/filters/filters";
import FilterTags from "../../components/section/filter-tags/filter-tags";
import SearchWrapper from "../../components/section/search-wrapper/search-wrapper";
import { FiltersResult } from "../../services/api/api-types";
import { filtersInitialState, handleLoadMore, handlerFindFilters, setItemInitialState } from "./series.utils";

const itemInitialState:FiltersResult = {url:'', page:0, total_pages:0, results:[]}

const AppSeries = () => {

  const [ filtersForm, setFiltersForm ] = useState(filtersInitialState);
  const [ filterItems, setFilterItems ] = useState(itemInitialState);
  const [ searching, setSearching ] = useState(false);

  useEffect(() => {
    handlerFindFilters(setFilterItems, [searching, setSearching], filtersForm);
  }, [filtersForm]);

  useEffect(() => {
    setItemInitialState(setFilterItems);
  }, []);

  return (
    <div className="app-series" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

      <FilterTags filters={filtersForm}/>

      <FiltersForm externalState={[filtersForm, setFiltersForm]} />

      <SearchWrapper 
        queryItemsState={[filterItems, setFilterItems]}
        searching={searching}
        callbackLoadMore={() => handleLoadMore({
          filterItemsState:[filterItems, setFilterItems], 
          filtersForm
        })}
      />

    </div>
  );
}

export default AppSeries;