
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLogin from './components/form/registration/login';
import AppRegister from './components/form/registration/register';
import AppNotFound from './pages/404';
import AppHome from './pages/home/home';
import AppAnime from './pages/anime/anime';
import AppProgramming from './pages/programming/programming';
import AppSearch from './pages/search/search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppNotFound/>} />
          <Route path="/register" element={<AppRegister/>} />
          <Route path="/login" element={<AppLogin/>} />
          <Route path="/" element={<AppHome/>} />
          <Route path="/anime/:id" element={<AppAnime/>} />
          <Route path="/search" element={<AppSearch/>} />
          <Route path="/programming" element={<AppProgramming />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
