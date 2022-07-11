
import './style.css';
import { useEffect, useState } from "react";
import FiltersForm from "../../components/form/filters/filters";
import FilterTags from "../../components/section/filter-tags/filter-tags";
import SearchWrapper from "../../components/section/search-wrapper/search-wrapper";
import { FiltersResult, Filters } from "../../services/api/api-types";
import { handleFiltersLoadMore, handlerFindFilters, setQueryParams } from "./directory.utils";
import { useSearchParams } from 'react-router-dom';

const itemInitialState:FiltersResult = {url:'', page:0, total_pages:0, results:[]}

const AppDirectory = () => {

  const [ searchParams ] = useSearchParams();
  const [ filtersForm, setFiltersForm ] = useState<Filters>(setQueryParams(searchParams));
  const [ filterItems, setFilterItems ] = useState<FiltersResult>(itemInitialState);
  const [ searching, setSearching ] = useState(false);

  const handleFindFilters = () => handlerFindFilters(setFilterItems, [searching, setSearching], filtersForm);

  useEffect(() => {

    setFilterItems(itemInitialState);
    
    handleFindFilters();

    //setFilterItems(itemInitialState);

  }, [filtersForm]);

  return (
    <div className="app-series" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

      <FilterTags filters={filtersForm}/>

      <FiltersForm externalSetForm={setFiltersForm} />

      <SearchWrapper 
        queryItemsState={[filterItems, setFilterItems]}
        callbackLoadMore={() => handleFiltersLoadMore({
          filterItemsState:[filterItems, setFilterItems], 
          filtersForm
        })}
      />

    </div>
  );
}

export default AppDirectory;