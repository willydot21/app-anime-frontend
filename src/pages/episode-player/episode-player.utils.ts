
import XtractorJs from "../../services/api/XtractorJs/api";
import { _FEMBED_DATA_SOURCES_ } from "../../services/api/XtractorJs/api-types";

export const getVideoSources = async (
  url:string, 
  server:string,
  setSources:React.Dispatch<React.SetStateAction<_FEMBED_DATA_SOURCES_>>
) => {
  
  switch (server) {

    case 'fembed':

      const sources = await XtractorJs.extrackFembedSources(url);

      if (typeof sources !== 'string') {

        setSources(sources); 
        
      }

      break;

  }

}