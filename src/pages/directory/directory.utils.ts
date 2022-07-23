
import TioanimeApi from "../../services/api/tioanime/api";
import { ApiError, Filters, FiltersResult } from "../../services/api/tioanime/api-types";
import { LoadMoreParams } from "./directory-types";

const parseQueryParams = (queryParams:URLSearchParams) => {

  let filters: { [query: string]: string | string[] } = {}

  queryParams.forEach((value, query) => {

    if (['years', 'genres', 'types'].includes(query) && !filters[query]) {
      filters[query] = [];
    }

    (Array.isArray(filters[query])
    ? (filters[query] as string[]).push(value)
    : filters[query] = value);

  });

  return filters;

}

const toSingularQuery = (key:string) => {
  if (key[key.length-1] === 's') return key.slice(0, key.length-1);
  return key;
}

const getFilterQueries = (filters:Filters):Array<{name:string, value:string}> => {

  var auxParsedQueries:Array<{name:string, value:string}> = [];

  const queryKeys = Object.keys(filters);

  const queries = queryKeys.map( queryKey => {

    const queryItems = filters[queryKey as keyof typeof filters];
    
    if (Array.isArray(queryItems)) {
      return queryItems.map( item => {
        return { name:toSingularQuery(queryKey), value:item }
      } );
    }

    return { 
      name:queryKey, 
      value:(Number.isInteger(queryItems)) || (queryItems===undefined)? '':queryItems as string
    }

  } );

  queries.forEach((query) => {

    if (Array.isArray(query)) {
      auxParsedQueries = auxParsedQueries.concat(query);

    } else {
      auxParsedQueries.push(query as {name:string, value:string});
    }

  });

  return auxParsedQueries;

}

const fetchNextPage = async (previousQueryItems:FiltersResult, prevFilters:Filters) => {

  const {
    page, total_pages
  } = previousQueryItems;

  if (page+1 <= total_pages) {

    const nextPageItems = await TioanimeApi.getByFilters([
      ...getFilterQueries(prevFilters),
      { name: 'p', value: `${page + 1}` }
    ]);

    if (!(nextPageItems as ApiError).message) {

      return (nextPageItems as FiltersResult);

    } // if page exists.

  }

  return null;

}

export const handleFiltersLoadMore = async ({
  filterItemsState,
  filtersForm
}: LoadMoreParams) => {

  const [ items, setItems ] = filterItemsState;

  const nextPage = await fetchNextPage(items, filtersForm);

  if (nextPage) {
    setItems({
      ...nextPage,
      results: [...items.results, ...nextPage.results]
    });
  }

}

export const handlerFindFilters = async(
  setItems: React.Dispatch<React.SetStateAction<FiltersResult>>,
  filters: Filters
) => {

  const newItems = await TioanimeApi.getByFilters(
    getFilterQueries(filters)
  );

  if (!(newItems as ApiError).message) setItems(newItems as FiltersResult);

}

export const setQueryParams = (
  queryParams:URLSearchParams
) => {

  const parsedParams = parseQueryParams(queryParams);

  if (Object.keys(parsedParams).length>0) return parsedParams;

  return filtersInitialState;
  
}

export const filtersInitialState:Filters = {
  types: [],
  genres: [],
  years: ['1950', '2022'],
  status: 'finished',
  sort: 'recent',
  page: 0
}