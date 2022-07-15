
import './style.css';
import { Filters } from "../../../services/api/tioanime/api-types";
import TagsWrapper from "../../container/tags-wrap/tags-wrapper"
import { getValidTags, parseSpanishNames } from "./filter-tags.utils";

const FilterTags = ({filters}:{filters:Filters}) => {

  return (
    <TagsWrapper>
      {
        getValidTags(filters).map( tag => (
          tag &&
          <li className="filters-tags">
            {parseSpanishNames[tag as keyof typeof parseSpanishNames] || tag}
          </li>
        ) )
      }
    </TagsWrapper>
  );
  
}

export default FilterTags;