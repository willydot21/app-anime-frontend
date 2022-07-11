
import './anime-info-genres.css';
import TagsWrapper from "../../../../container/tags-wrap/tags-wrapper";

const AnimeInfoGenres = ({ genres }:{ genres:string[] }) => {
  
  return (
    <TagsWrapper>{
      genres.map(genre => (
        <li className="anime-info-genre">
          <span className="material-icons mt-icn-checked">
            radio_button_checked
          </span> {genre}
        </li>
      ))
    }</TagsWrapper>
  );

}

export default AnimeInfoGenres;