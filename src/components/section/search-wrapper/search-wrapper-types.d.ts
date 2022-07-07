
import { AnimeSearch, FiltersResult } from "../../../services/api/api-types";

type ValidSetItems = React.Dispatch<React.SetStateAction<AnimeSearch>> | React.Dispatch<React.SetStateAction<FiltersResult>>;

export interface SearchWrapperStates {
  queryItemsState: [AnimeSearch|FiltersResult, ValidSetItems];
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export interface SearchWrapperProps {
  queryItemsState: [AnimeSearch|FiltersResult, ValidSetItems];
  searching: boolean;
  callbackLoadMore: () => Promise<void>;
}