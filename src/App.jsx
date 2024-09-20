import react from "react";
import "./App.css";
import { Header } from "./components/Header/index.jsx";
import BannerCarousel from "./components/BannerCarousel/index.jsx";
import OddsCarousel from "./components/OddsCarousel/index.jsx";
import GamesSection from "./components/GamesSection/index.jsx";
import LocalBanners from "./components/LocalBanners/index.jsx";
function App() {
  return (
    <div key={"appContainer"} className="appContainer">
      <Header />
      <BannerCarousel />
      <div key="oddsAndGames" className="oddsAndGames">
        <OddsCarousel />
        <GamesSection />
        <LocalBanners />
      </div>
    </div>
  );
}

export default App;
