
import TioanimeApi from "../../services/api/api";
import { AnimeSearch, ApiError } from "../../services/api/api-types";

export const queryItemsInitialState = {
  query: '',
  anime_results: [],
  page: 0,
  total_pages: 0
};

const fetchNextPage = async (previousQueryItems: AnimeSearch) => {

  const {
    query, page, total_pages
  } = previousQueryItems;

  if (page+1 < total_pages) {

    const nextPageItems = await TioanimeApi.getByQuery([
      { name: 'q', value: query },
      { name: 'p', value: `${page + 1}` }
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

  if (nextPage) {

    setQueryItems({
      ...nextPage,
      anime_results: [...queryItems.anime_results, ...nextPage.anime_results]
    });

  }

}