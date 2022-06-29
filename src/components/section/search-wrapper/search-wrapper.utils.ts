
import TioanimeApi from "../../../services/api/api";
import { AnimeSearch, ApiError } from "../../../services/api/api-types";
import { SearchWrapperStates } from "./search-wrapper-types";

export const isWindowInBottom = () => {

  const windowTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  return (windowTop+windowHeight) >= (documentHeight - 50);

}

const fetchNextPage = async ( previousQueryItems:AnimeSearch ) => {

  const { 
    query, page, total_pages
  } = previousQueryItems;

  if (page+1 < total_pages) {

    const nextPageItems = await TioanimeApi.getByQuery([
      { name:'q', value:query },
      { name:'p', value:`${page+1}` }
    ]);

    if (!(nextPageItems as ApiError).message) {

      return (nextPageItems as AnimeSearch);

    } // if page exists.

  }

  return null;

}

export const handlerLoadMore = async (
  queryItems: AnimeSearch, 
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>
) => {

  const nextPage = await fetchNextPage(queryItems);

  if ( nextPage ) {

    setQueryItems({
      ...nextPage,
      anime_results: [ ...queryItems.anime_results, ...nextPage.anime_results ]
    });

  }

}

export const setupSearchWrapper = (states:SearchWrapperStates) => {

  const [ loading, setLoading ] = states.loadingState;

  const [ queryItems, setQueryItems ] = states.queryItemsState;

  window.onscroll = async () => {

    if (isWindowInBottom() && !loading) {

      window.onscroll = null;

      setLoading(true);

      await handlerLoadMore(queryItems, setQueryItems);

      setLoading(false);

    }

  } 

}