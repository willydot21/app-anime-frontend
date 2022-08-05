
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppLogin from './components/form/registration/login';
import AppRegister from './components/form/registration/register';
import AppNotFound from './pages/404';
import AppHome from './pages/home/home';
import AppAnime from './pages/anime/anime';
import AppSearch from './pages/search/search';
import { useEffect } from 'react';
import AppDirectory from './pages/directory/directory';
import { removeFuckModals } from './app.utils';
import EpisodePlayer from './pages/episode-player/episode-player';
import AppSettings from './pages/settings/settings';
import useUser from './hooks/useUserHook/useUser';
import AppChangePassword from './pages/change-password/change-password';

function App() {

  const user = useUser();

  const [logged] = user.logged;

  const location = useLocation();

  useEffect(() => {

    user.setupUser();

  }, []);

  useEffect(() => {

    window.scrollTo(0, 0);

    if (document.body.style.overflow === 'hidden') document.body.style.overflow = 'auto';
    // set body scroll if was changed previously.

    removeFuckModals();

  }, [location.pathname]);

  return (
    <div className="App">

      <Routes>

        <Route path="*" element={<AppNotFound />} />

        <Route path="/register" element={
          <AppRegister logged={logged} register={user.register} />
        } />

        <Route path="/login" element={
          <AppLogin {...{ logged, login: user.login }} />
        } />

        <Route path="/" element={<AppHome />} />

        <Route path="/anime/:id" element={<AppAnime />} />

        <Route path="/anime/:id/episode/:episode" element={<EpisodePlayer />} />

        <Route path="/search" element={<AppSearch />} />

        <Route path="/directory" element={<AppDirectory />} />

        <Route path="/settings" element={
          <AppSettings logged={logged} userLoginHandlers={{ userLogout: user.logout }} />
        } />

        <Route path="/change-password" element={<AppChangePassword logged={logged} handleChangePassword={user.changePassword} />} />

      </Routes>

    </div>
  );

}

export default App;
