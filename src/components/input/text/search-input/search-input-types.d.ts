
import { AnimeSearch, FiltersResult } from "../../../../services/api/api-types";

export interface searchInputProps {

  inputRef: React.RefObject<HTMLInputElement>;

  suggestionsRef?: React.RefObject<HTMLDivElement> | undefined;

  searchingState: [
    searching: boolean,
    setSearching: React.Dispatch<React.SetStateAction<boolean>>
  ];

  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>

}