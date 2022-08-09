
import { useEffect, useState, useRef } from "react";
import AppCarousel from "../../components/carousel/home-carousel";
import BottomNavbar from "../../components/navbar/bottom-navbar/bottom-navbar";
import HomeNavbar from "../../components/navbar/home-navbar/home-navbar";
import { changeNavbarBg } from "../../components/navbar/home-navbar/home-navbar.utils";
import AnimeLatest from "../../components/section/anime-latest/anime-latest";
import AnimeScrollEpisodes from "../../components/section/anime-scroll-episodes/anime-scroll-episodes";
import ScrollAnimeSection from "../../components/section/anime-scroll-section/anime-scroll-section";
import { AnimeAllLatest } from "../../services/api/tioanime/api-types";
import { fetchLatest } from "./home.utils";
import { latestInitialState } from "./home.utils";

const AppHome = ({ logged }: { logged: boolean }) => {

  const [latest, setLatest] = useState<AnimeAllLatest>(latestInitialState);

  const carousel = useRef(null);

  const navbar = useRef(null);

  useEffect(() => {

    fetchLatest(setLatest);

    window.onscroll = function () {
      if (navbar.current && carousel.current) {
        changeNavbarBg(
          navbar.current,
          carousel.current
        );
      }
    }

  }, []);

  return (
    <div className="app-home">

      <HomeNavbar navbarRef={navbar} />

      <AppCarousel carouselRef={carousel} />

      <AnimeScrollEpisodes items={latest.chapters} />

      <ScrollAnimeSection
        section="Últimos Animes"
        items={latest.animes}
      />

      <AnimeLatest latestItems={latest} />

      <BottomNavbar logged={logged} />

    </div>
  );

}

export default AppHome;