
import React from 'react';
import { NavLink } from 'react-router-dom';
import './home-navbar.css';

const HomeNavbar = ({navbarRef}:{navbarRef:React.MutableRefObject<null>}) => {

  return (
    <div className="home-navbar" ref={navbarRef} >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbm482dmjDlh84YeqKuNGYrcpPhb4320pwV6WyNRAIJS-v8M1ZEGdrzo17ZgGDpH0YpHo&usqp=CAU" className="home-navbar-icon"/>
      <div className="home-navbar-links">
        <NavLink to="/directory?type=tv">
          Series
        </NavLink>
        <NavLink to="/directory?type=movie"> 
          Peliculas
        </NavLink>
      </div>
    </div>
  );

};

export default HomeNavbar;