
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
import EpisodePlayer from './pages/episode-player/episode-player';

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
        <Route path="/anime/:id/episode/:episode" element={<EpisodePlayer />} />
        <Route path="/search" element={<AppSearch />} />
        <Route path="/programming" element={<AppProgramming />} />
        <Route path="/directory" element={<AppDirectory />} />
        <Route path="/test" element={ <video controls src="https://cdn62.my.mail.ru/v/74885048.mp4?slave[]=s%3Ahttp%3A%2F%2Fvideo-cephrgw1.i%3A9091%2Fvideo4%2F74885048-v&p=f&expire_at=1658397600&touch=1658339816&reg=55&sign=6fd88e3628e7761ac4b38b9e64f88e61cbacea9e" />} />
      </Routes>
    </div>
  );

}

export default App;
