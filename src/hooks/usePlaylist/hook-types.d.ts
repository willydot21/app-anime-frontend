import React from "react";

export interface UsePlaylist {
  playlistState: [string, React.Dispatch<React.SetStateAction<strign>>];
  isChanged: boolean;
}