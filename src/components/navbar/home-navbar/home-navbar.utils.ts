
export const changeNavbarBg = (navbar:HTMLDivElement, carousel:HTMLDivElement) => {

  const carouselBottom = carousel.getBoundingClientRect().bottom;

  if ( carouselBottom <= 109 ){

    navbar.style.backgroundColor = 'black';

  } else {

    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
  }

}