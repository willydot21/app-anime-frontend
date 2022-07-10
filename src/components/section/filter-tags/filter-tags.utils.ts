
import { Filters } from "../../../services/api/api-types";
import { animeCategories } from "../../../services/api/api.utils";

export const parseSpanishNames: {[name:string]:string} = {
  'broadcast': 'En emisión',
  'finished': 'Finalizado',
  'coming-soon': 'Proximamente',
  '-recent': 'Menos recientes',
  'recent': 'Más recientes',
  'tv': 'Tv',
  'movie': 'Movie',
  'special': 'Especial',
  'ova': 'Ova'
}

Object.keys(animeCategories).forEach(category => {
  parseSpanishNames[animeCategories[category as keyof typeof animeCategories]] = category;
});
// :*)

export function getValidTags(form:Filters) {

  const individualTagsArray:string[] = [];

  ['genres', 'years', 'status', 'types', 'sort'].forEach(tagName => {

    const elements = form[ tagName as keyof Filters ];

    if (Array.isArray(elements)) {

      individualTagsArray.push(...elements);

    } else if (typeof elements === 'string') {

      individualTagsArray.push(elements);

    }

  });

  return individualTagsArray;

}