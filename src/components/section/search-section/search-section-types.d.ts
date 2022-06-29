import React from "react";
import { AnimeSearch } from "../../../services/api/api-types";

export interface SearchSectionProps {
  inputRef: React.RefObject<HTMLInputElement>;
  suggestionsRef: React.RefObject<HTMLDivElement>;
  searchingState: [ boolean, React.Dispatch<React.SetStateAction<boolean>> ];
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>;
  handlerOnClick: Function;
  suggestionsRef?: React.RefObject<HTMLDivElement> | undefined;
}