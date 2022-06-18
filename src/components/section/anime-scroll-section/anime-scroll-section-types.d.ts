import { AnimeArticle } from "../../services/api/api-types";

export interface AnimeScrollSectionProps {
  section: string;
  items: Array<AnimeArticle>  
}