
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppLogin from './components/form/registration/login';
import AppRegister from './components/form/registration/register';
import AppNotFound from './pages/404';
import AppHome from './pages/home/home';
import AppAnime from './pages/anime/anime';
import AppSearch from './pages/search/search';
import { useEffect, useState } from 'react';
import AppDirectory from './pages/directory/directory';
import { removeFuckModals } from './app.utils';
import EpisodePlayer from './pages/episode-player/episode-player';
import AppSettings from './pages/settings/settings';
import { getCurrentSession } from './services/database/registration/utils';

function App() {

  const [logged, setLogged] = useState(false);

  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

    if (document.body.style.overflow === 'hidden') document.body.style.overflow = 'auto';
    // set body scroll if was changed previously.

    removeFuckModals();

  },[location.pathname]);

  useEffect(() => {
    
    const data = getCurrentSession(setLogged);

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<AppNotFound />} />
        <Route path="/register" element={<AppRegister loginState={[logged, setLogged]}/>} />
        <Route path="/login" element={<AppLogin loginState={[logged, setLogged]}/>} />
        <Route path="/" element={<AppHome />} />
        <Route path="/anime/:id" element={<AppAnime />} />
        <Route path="/anime/:id/episode/:episode" element={<EpisodePlayer />} />
        <Route path="/search" element={<AppSearch />} />
        <Route path="/directory" element={<AppDirectory />} />
        <Route path="/settings" element={<AppSettings appLoginState={[logged, setLogged]} />} />
      </Routes>
    </div>
  );

}

export default App;
