
import './tags-wrapper.css';

const TagsWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ul className="tags-wrapper-container">
      { children }
    </ul>
  );
}

export default TagsWrapper;