
export interface searchInputProps {

  searchingState: [
    searching: boolean,
    setSearching: React.Dispatch<React.SetStateAction<boolean>>
  ];

  setQueryItems: React.Dispatch<React.SetStateAction<AnimeSearch>>

}