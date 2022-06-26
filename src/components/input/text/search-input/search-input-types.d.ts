import React from "react";

export interface searchInputProps {

  suggestionsRef: React.RefObject<HTMLDivElement>;

  searchingState: [
    searching: boolean,
    setSearching: React.Dispatch<React.SetStateAction<boolean>>
  ];

  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>

}