import React, { useEffect,useState } from "react";
import { observer, inject } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import GameCard from "./GameCard/GameCard";
import styles from "./oddsCarousel.module.scss"
//import 'swiper/css/Navigation';
//import { Navigation } from 'swiper/modules';


const OddsCarousel = inject("oddsStore")(
  observer(({ oddsStore }) => {
    // Fetch the odds data when the component is mounted
    const [slidersPerView, setSlidersPerView] = useState((window.innerWidth / 350).toFixed(2));

    useEffect(() => {
    const handleResize = () => {
      setSlidersPerView((window.innerWidth / 350).toFixed(2));
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    useEffect(() => {
        console.log(oddsStore)
      oddsStore.fetchOdds();
    }, [oddsStore]);

    // Handle sorting based on dropdown
    const handleSortChange = (event) => {
      const sortType = event.target.value;
      if (sortType === "date") {
        oddsStore.sortOddsByDate();
      } else if (sortType === "asc") {
        oddsStore.sortOddsByName("asc");
      } else if (sortType === "desc") {
        oddsStore.sortOddsByName("desc");
      }
    };

    const handleBetOnResult = (gameId,bet) =>{
        oddsStore.betOnResult(gameId,bet)
    }

    return (
      <div>
        {/* Dropdown for sorting */}
        <div className={styles.dropdown}>
          <select onChange={handleSortChange}>
            <option value="date">Sort by Date</option>
            <option value="asc">Sort by Name (A-Z)</option>
            <option value="desc">Sort by Name (Z-A)</option>
          </select>
        </div>


        {/* Display Swiper carousel */}
        <Swiper   slidesPerView={slidersPerView}
        spaceBetween={10}
        >
          {oddsStore.sortedOddsList.map((match, index) => (
            <SwiperSlide  key={index}>
              <GameCard key={match.nodeId} matchIndex={index} match={match} betOnResult={handleBetOnResult} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  })
);

export default OddsCarousel;