
import { useEffect, useState } from "react";
import { SearchWrapperProps } from "./search-wrapper-types";
import { AnimeSearch, FiltersResult } from "../../../services/api/api-types";
import LoadingItems from "../../others/loading-items/loading-items";
import AnimeSearchItems from "../anime-search-items/anime-search-items";
import { setupSearchWrapper } from "./search-wrapper.utils";
import LoadingMore from "../../others/loading-more/loading-more";
import NoElements from "../no-elements/no-elements";

const componentRenderItems = (items:AnimeSearch|FiltersResult) => {
  return (
    ((items as FiltersResult).results || (items as AnimeSearch).anime_results).length
    ? <AnimeSearchItems items={items}/>
    : (items as AnimeSearch).query ? <LoadingItems /> : <NoElements />
  );
}

const SearchWrapper = ({ queryItemsState, callbackLoadMore }:SearchWrapperProps) => {

  const [ items ] = queryItemsState;

  const [ loading, setLoading ] = useState<boolean>(false);
  
  useEffect(() => {

    setupSearchWrapper({
      loadingState: [loading, setLoading]
    }, callbackLoadMore);

  }, [items]);

  return (
    <div className="search-wrapper"> 
      {componentRenderItems(items)} 
      {loading && <LoadingMore />}
    </div>
  );

} 

export default SearchWrapper;