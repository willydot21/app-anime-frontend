
import React from 'react';

function isBlackImage( img:HTMLImageElement ) {
  return !((img.naturalWidth > 1) && (img.naturalHeight > 1));
}

export async function handleLoadImage ( 
  image:string,
  setImage:React.Dispatch<React.SetStateAction<string>> ) 
{

  if( image ) {

    const newImage = new Image();

    newImage.src = image;

    await newImage.decode();

    if ( !isBlackImage(newImage) ) {
      setImage( image );
    }

  }

}
