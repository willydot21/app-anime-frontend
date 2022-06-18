
import './carousel.css';
import carousel_items from './carousel-items.json';

const HomeCarousel = () => {

  return(
    <div id="my-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {
          carousel_items.map(el => {
            return (
              <div className={"carousel-item " + el.display_} key={el.name} >
                <a href="/">
                  <img src={el.image_src} alt="loading"
                    className="d-block w-100" />
                </a>
                <div className="carousel-item-shadow">
                  <h1> {el.name} </h1>
                </div>
              </div>
            );
          }) // end map callback.
        }
      </div>
    </div>
  );

}

export default HomeCarousel;