
import { useEffect, useState } from "react";
import { SearchWrapperProps } from "./search-wrapper-types";
import { AnimeSearch, FiltersResult } from "../../../services/api/api-types";
import LoadingItems from "../../others/loading-items/loading-items";
import AnimeSearchItems from "../anime-search-items/anime-search-items";
import { setupSearchWrapper } from "./search-wrapper.utils";
import LoadingMore from "../../others/loading-more/loading-more";

const componentRenderItems = (searching:boolean, items:AnimeSearch|FiltersResult) => {
  return (
    !searching
    ? <AnimeSearchItems items={items}/>
    : <LoadingItems />
  );
}

const SearchWrapper = ({ queryItemsState, searching, callbackLoadMore }:SearchWrapperProps) => {

  const [ items ] = queryItemsState;

  const [ loading, setLoading ] = useState<boolean>(false);

  useEffect(() => {

    setupSearchWrapper({
      queryItemsState: queryItemsState,
      loadingState: [loading, setLoading]
    }, callbackLoadMore);

  }, [ items ]);

  return (
    <div className="search-wrapper"> 
      {componentRenderItems(searching, items)} 
      {loading && <LoadingMore />}
    </div>
  );

} 

export default SearchWrapper;