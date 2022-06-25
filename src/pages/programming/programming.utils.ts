
import TioanimeApi from "../../services/api/api";
import { AnimeProgramming, ApiError } from "../../services/api/api-types";

export const ProgrammingInitialState: AnimeProgramming = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

export const fetchProgramming = async (
  setProgramming:React.Dispatch<React.SetStateAction<AnimeProgramming>>
) => {

  const req = await TioanimeApi.getProgramming(); 
  // '*' only could return AnimeAllLatest or ApiError.

  if( (req as ApiError).message === undefined ) {

    setProgramming((req as AnimeProgramming));

  } else { console.log(req) }

}