
import { AnimeSearch } from "../../../services/api/api-types";

export interface SearchWrapperStates {
  queryItemsState: [AnimeSearch, React.Dispatch<React.SetStateAction<AnimeSearch>>];
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export interface SearchWrapperProps {
  queryItemsState: [AnimeSearch, React.Dispatch<React.SetStateAction<AnimeSearch>>];
  searching: boolean;
}