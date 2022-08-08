
export interface AnimeEpisodesProps {
  poster: string;
  episodes: number;
  id: string;
  name: string;
  animePoster: string;
}

export type ServerEpisodeState = [
  { id: string, episode: number },
  React.Dispatch<React.SetStateAction<{ id: string, episode: number }>>
];

export interface AnimeEpisodeActions {
  addEpisodeToHistory: (episode: string) => void;
  removeEpisodeFromHistory: (episode: string) => void;
}

export interface HandleServerEpisodeProps {
  watched: boolean;
  setWatched: React.Dispatch<React.SetStateAction<boolean>>;
  episode: string;
  animeEpisodeActions: AnimeEpisodeActions;
}