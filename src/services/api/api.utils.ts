
import { QueryParamsObject } from "./api-types"

const setQueryParams = (route:string, queryParams:QueryParamsObject[]) => {

  const queries:string[] = [];

  queryParams.forEach(query => {

    queries.push(`${query.name}=${query.value}`);

  });

  return `${route}?${queries.join('&')}`;

}

export const apiRoutes = {

  api:'https://tioanime-api-v1.herokuapp.com/api/',

  programming: 'programming/',

  latest: (article:string) => `latest/${article}`,

  anime: (id:string) => `anime/${id}`,

  chapter: (id:string, chapter:string|number) => `anime/${id}/${chapter}`,

  search: (queryParams:QueryParamsObject[]) => setQueryParams('search', queryParams),

  category: (category:string, queryParams:QueryParamsObject[]) => setQueryParams(`category/${category}`, queryParams),

  filters: (queryParams:QueryParamsObject[]) => setQueryParams('filters', queryParams)

}