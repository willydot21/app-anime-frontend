
import { AnimeSearch, FiltersResult } from "../../../services/api/tioanime/api-types";

type ValidSetItems = React.Dispatch<React.SetStateAction<AnimeSearch>> | React.Dispatch<React.SetStateAction<FiltersResult>>;

export interface SearchWrapperStates {
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export interface SearchWrapperProps {
  queryItemsState: [AnimeSearch|FiltersResult, ValidSetItems];
  callbackLoadMore: () => Promise<void>;
}