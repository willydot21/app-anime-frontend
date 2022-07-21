
import Plyr from 'plyr-react';
import "plyr-react/plyr.css"
import { _FEMBED_DATA_SOURCES_ } from "../../../services/api/XtractorJs/api-types";

export default function VideoPlayer ({ sources }:{ sources:_FEMBED_DATA_SOURCES_ }) {

  if (typeof sources !== 'string') {

    const labels = sources.map( ({label}) => parseInt(label as string) );
    
    const sourceOptions = sources.map(({file, label}) => {
      return {
        src:file as string, 
        size:parseInt(label as string),
        type:'video/mp4'
      }
    });

    // Mañana le hago refact :).

    /*
    return (
      <Plyr 
        className="plyr-react plyr"
        source={{sources: sourceOptions, type: 'video'}} 
        options={{quality: { default:labels[0], options:labels }}} />
    )
    */

    return <>
    </>

  }

  return <p> EMBED VIDEO </p>;

}