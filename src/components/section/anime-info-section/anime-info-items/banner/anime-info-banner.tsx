
import './anime-info-banner.css';
import { handleLoadImage } from './anime-banner.utils';
import { useEffect, useState } from 'react';

const notFoundImage = 'https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-qdojr7-866008-Preview.webp';

const AnimeInfoBanner = (
  { banner, poster }: { banner: string, poster: string, animeid: string }
) => {

  const [image, setImage] = useState(poster || notFoundImage);

  useEffect(() => {

    handleLoadImage(banner, setImage);

  }, [banner]); // load image each time wich banner change.

  return (
    <div className="anime-info-banner">
      <img src={image} alt="" />
      <span className="banner-shadow" />
    </div>
  );

}

export default AnimeInfoBanner;