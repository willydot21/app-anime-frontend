
export interface AnimeInfo {
  name: string;
  malId: string;
  anime_id: string;
  chapters: number;
  poster: string;
  season: string;
  banner: string;
  synopsis: string;
  genres: string[];
  year: string;
  status: string;
  type: string;
  releated: AnimeReleated[];
}

export interface AnimeReleated {
  name: string;
  id: string;
  image: string;
  type: string;
  year: string;
}

export interface chapterLinks {
  watch_links: {
    fembed?: string[];
    mega?: string[];
    amus?: string[];
    okru?: string[];
    mepu?: string[];
    yourupload?: string[];
    netu?: string[];
    maru?: string[];
    [other_server:string]: string[];
  }
  download_links: {
    Mediafire?: string[];
    Mega?: string[];
    Zippyshare?: string[];
    [other_server:string]: string[];
  }
}

export interface AnimeLinks {
  links: chapterLinks;
  id: string;
  chapter: number;
}

export interface ArticleItem {
  name: string;
  id: string;
  poster: string;
}

export interface SectionItem {
  name: string;
  id: string;
  poster: string;
  genres: string[];
  type: string;
  description: string;
}

export interface AnimeAllLatest {
  movies: SectionItem[];
  ovas: SectionItem[];
  specials: SectionItem[];
  animes: ArticleItem[];
  chapters: ArticleItem[];
}

export interface AnimeSearch {
  anime_results: ArticleItem[];
  page: number;
  total_pages: number;  
}

export interface AnimeProgrammingItem {
  name: string;
  id: string;
  image: string;
  chapter: string;
  status: string;
}

export interface AnimeProgramming {
  monday: AnimeProgrammingItem[];
  tuesday: AnimeProgrammingItem[];
  wednesday: AnimeProgrammingItem[];
  thursday: AnimeProgrammingItem[];
  friday: AnimeProgrammingItem[];
  saturday: AnimeProgrammingItem[];
  sunday: AnimeProgrammingItem[];
}

export interface Filters {
  types?: string[];
  genres?: string[];
  years?: string[];
  status?: string;
  sort?: string;
  page?: number;
}

export interface FiltersResult {
  url: string;
  page: number;
  total_pages: number;
  results: ArticleItem[];
}

export interface QueryParamsObject {
  name: string;
  value: string;
}

export interface ApiError {
  message: string;
  [extraParameter:string]: string;
}
