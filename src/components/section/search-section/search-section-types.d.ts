import React from "react";
import { AnimeSearch, FiltersResult } from "../../../services/api/api-types";

export interface SearchSectionProps {
  externalInputRef?: React.RefObject<HTMLInputElement>;
  suggestionsRef: React.RefObject<HTMLDivElement>;
  searchingState: [ boolean, React.Dispatch<React.SetStateAction<boolean>> ];
  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>;
  suggestionsRef?: React.RefObject<HTMLDivElement> | undefined;
}