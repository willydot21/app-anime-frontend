import { AnimeArticle, AnimeFollowingItem } from "../../../hooks/other/general-types";
import DefaultContainerItem from "../../container/default-container-item/default-container-item";
import DefaultContainer from "../../container/default-container/default-container";
import NoElements from "../no-elements/no-elements";
import { animeFollowingToAnimeArticle } from "./utils";

const FollowingList = ({ followingList, active = false, section_name }: {
  followingList: AnimeFollowingItem[] | AnimeArticle[],
  active?: boolean,
  section_name: string
}) => {
  const activeClass = active ? 'navigation-hidden navigation-active-section' : 'navigation-hidden'
  return (
    <div className={activeClass} section-name={section_name}>{
      followingList.length
        ? <DefaultContainer>{
          followingList.map((anime, index) => (
            <DefaultContainerItem item={animeFollowingToAnimeArticle(anime)} link={`/anime/${anime.id}`} index={index} />
          ))
        }</DefaultContainer>
        : <NoElements />
    }</div>
  );
}

export default FollowingList;