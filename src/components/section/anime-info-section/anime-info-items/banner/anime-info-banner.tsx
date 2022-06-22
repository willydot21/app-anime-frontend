
import './anime-info-banner.css';
import { NavLink } from "react-router-dom";
import { handleLoadImage } from './anime-banner.utils';
import { useEffect, useState } from 'react';

const notFoundImage = 'https://www.observatoriorh.com/wp-content/uploads/2020/07/103260325_l-scaled.jpg';

const AnimeInfoBanner = (
  {banner}:{banner:string}
) => {

  const [ image, setImage ] = useState(notFoundImage);

  useEffect( () => {

    handleLoadImage( banner, setImage );

  }, [banner]); // load image each time wich banner change.

  return (
    <div className="anime-info-banner">
      <img src={ image } alt="" />
      <span className="material-icons banner-shadow">
        <NavLink to='./episode/1' >
          play_circle
        </NavLink>
      </span>
    </div>
  );

}

export default AnimeInfoBanner;