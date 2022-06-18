
import './home-navbar.css';

const HomeNavbar = () => {

  return (
    <div className="home-navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbm482dmjDlh84YeqKuNGYrcpPhb4320pwV6WyNRAIJS-v8M1ZEGdrzo17ZgGDpH0YpHo&usqp=CAU" className="home-navbar-icon"/>
      <div className="home-navbar-links">
        <a href="/movie">Movies</a>
        <a href="/serie">Series</a>
      </div>
    </div>
  );

};

export default HomeNavbar;