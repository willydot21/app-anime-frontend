
export interface PlayerLocationState {
  name: string;
  episode: number;
  server: string;
  src: string;
}

export interface AuxVideoProperties extends HTMLVideoElement {
  msRequestFullscreen: () => void | undefined;
  webkitRequestFullscreen: () => void | undefined;
}