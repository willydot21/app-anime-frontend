
import { SearchWrapperStates } from "./search-wrapper-types";

export const isWindowInBottom = () => {

  const windowTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  return (windowTop+windowHeight) >= (documentHeight - 50);

}

export const setupSearchWrapper = (
  states:SearchWrapperStates,
  callLoadMore:Function
) => {

  const [ loading, setLoading ] = states.loadingState;

  window.onscroll = async () => {

    if (isWindowInBottom() && !loading) {

      window.onscroll = null;

      setLoading(true);

      await callLoadMore();

      setLoading(false);

    }

  } 

}