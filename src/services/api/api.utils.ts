
import { QueryParamsObject } from './api-types';

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

export const animeCategories = {
  'Acción':'accion', 
  'Artes marciales':'artes-marciales',
  'Aventuras':'aventuras', 
  'Carreras':'carreras',
  'Ciencia ficción':'ciencia-ficcion', 
  'Comedia':'comedia',
  'Demencia':'demencia', 
  'Demonios':'demonios',
  'Deportes':'deportes', 
  'Drama':'drama',
  'Ecchi':'ecchi', 
  'Escolares':'escolares',
  'Espacial':'espacial', 
  'Fantasía':'fantasia',
  'Harem':'harem', 
  'Histórico':'historico',
  'Infantil':'infantil', 
  'Josei':'josei',
  'Juegos':'juegos', 
  'Magia':'magia',
  'Mecha':'mecha', 
  'Militar':'militar',
  'Misterio':'misterio', 
  'Música':'musica',
  'Parodia':'parodia', 
  'Policía':'policia',
  'Psicológico':'psicologico', 
  'Recuentos de la vida':'recuentos-de-la-vida',
  'Romance':'romance', 
  'Samurai':'samurai',
  'Seinen':'seinen', 
  'Shoujo':'shoujo',
  'Shounen':'shounen', 
  'Sobrenatural':'sobrenatural',
  'Superpoderes':'superpoderes', 
  'Suspenso':'suspenso',
  'Terror':'terror', 
  'Vampiros':'vampiros',
  'Yaoi':'yaoi', 
  'Yuri':'yuri'
}

export const animeTypes = {
  'Tv':'tv', 
  'Ova':'ova', 
  'Especial':'special', 
  'Película':'movie'
}

export const animeStatus = {
  'Finalizado':'finished',
  'En emisión':'broadcast',
  "Próximamente":'coming-soon'
}