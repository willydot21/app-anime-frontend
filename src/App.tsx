
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppLogin from './components/form/registration/login';
import AppRegister from './components/form/registration/register';
import AppNotFound from './pages/404';
import AppHome from './pages/home/home';
import AppAnime from './pages/anime/anime';
import AppProgramming from './pages/programming/programming';
import AppSearch from './pages/search/search';
import { useEffect } from 'react';
import AppDirectory from './pages/directory/directory';
import { removeFuckModals } from './app.utils';

function App() {

  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

    if (document.body.style.overflow === 'hidden') document.body.style.overflow = 'auto';
    // set body scroll if was changed previously.

    removeFuckModals();

  },[location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<AppNotFound />} />
        <Route path="/register" element={<AppRegister />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/" element={<AppHome />} />
        <Route path="/anime/:id" element={<AppAnime />} />
        <Route path="/search" element={<AppSearch />} />
        <Route path="/programming" element={<AppProgramming />} />
        <Route path="/directory" element={<AppDirectory />} />
      </Routes>
    </div>
  );

}

export default App;
