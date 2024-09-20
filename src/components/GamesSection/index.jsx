import React from "react";
import { getImageUrl } from "../../utils/image-util";
import styles from "./gamesSection.module.scss";

const GamesSection = () => {
  const imagesSubFolder = "games";
  const gamesImages = [
    "PRPAviator_Square.jpg",
    "PTLiveQuantumRoulette_Square.jpg",
    "PTPharaohsDaughter_Square.jpg",
    "PTPremiumBlackjack_Square.jpg",
  ];
  const title = "MEJOR JUEGOS DE CASINO";
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.gamesSectionContainer}>
        {gamesImages.map((game, index) => {
          return (
            <img
              className={styles.gameCard}
              key={game}
              src={getImageUrl(game, imagesSubFolder)}
              alt={`Game-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GamesSection;
