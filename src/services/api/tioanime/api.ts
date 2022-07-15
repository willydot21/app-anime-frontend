
import { 
  AnimeAllLatest, 
  AnimeInfo, 
  AnimeLinks, 
  AnimeProgramming, 
  AnimeSearch, 
  ApiError, 
  ArticleItem, 
  FiltersResult, 
  QueryParamsObject, 
  SectionItem 
} from "./api-types";
import { apiRoutes } from "./api.utils";

class TioanimeApi {

  public static async fetchItems(
    route:string
  ): Promise<ApiError | any>  {

    const url = apiRoutes.api+route;

    try {

      const req = await fetch(url);

      const res_json = await req.json();

      return res_json;


    } catch (error) { return { message: `Fetch is failed.` } }

  }

  public static async getLatest(
    article:string
  ): Promise<ApiError | ArticleItem[] | SectionItem[] | AnimeAllLatest> {
    return (
      await this.fetchItems( apiRoutes.latest(article) )
    );   
  }

  public static async getAnime(id:string): Promise<AnimeInfo | ApiError> {
    return (
      await this.fetchItems( apiRoutes.anime(id) )
    );
  }

  public static async getByQuery(queryParams:QueryParamsObject[]): Promise<AnimeSearch | ApiError> {
    return (
      await this.fetchItems(
        apiRoutes.search(queryParams)
      )
    );
  }

  public static async getProgramming(): Promise<AnimeProgramming | ApiError> {
    return ( await this.fetchItems( apiRoutes.programming ) );
  }

  public static async getAnimeChapter(id:string, chapter:string|number): Promise<ApiError | AnimeLinks> {
    return await this.fetchItems( apiRoutes.chapter(id, chapter) );
  }

  public static async getCategory(category:string, queryParams:QueryParamsObject[]): Promise<ApiError | FiltersResult> {
    const route = apiRoutes.category(category, queryParams);
    return ( await this.fetchItems(route) );
  }

  public static async getByFilters(queryParams:QueryParamsObject[]): Promise<FiltersResult | ApiError> {
    const route = apiRoutes.filters(queryParams);
    return ( await this.fetchItems(route) );
  }

}

export default TioanimeApi;