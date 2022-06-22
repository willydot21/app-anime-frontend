
import './anime-other-info.css';
import TagsWrapper from '../../../../container/tags-wrap/tags-wrapper';
import {AnimeOtherInfoProps} from './anime-other-info-types';

const AnimeOtherInfo = ({season, type, year, status}: AnimeOtherInfoProps) => {

  return (
    <TagsWrapper>
      {
        [season, type, year, status].map( item => {
          return (
            item
            ? <li className="anime-other-info"> {item}</li>
            : <></>
          );
        })
      }
    </TagsWrapper>
  );

}

export default AnimeOtherInfo;