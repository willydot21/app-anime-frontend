
import { _FEMBED_DATA_SOURCES_, _FEMBED_ } from "./api-types";

export default class XtractorJs {

  public static async extrackFembedSources (fembed:string):Promise<_FEMBED_DATA_SOURCES_> {

    try {

      const encodedUrl = encodeURIComponent(fembed);
      
      const res = await fetch(`https://xtractor-api.herokuapp.com/fembed?url=${encodedUrl}`);;

      const json:_FEMBED_ = await res.json();

      return json.data;

    } catch (error) { return '[METHOD ERROR] Internal exception is occurred'; }

  }

}