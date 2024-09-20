import React from "react";
import styles from "./localBanners.module.scss";
import { getImageUrl } from "../../utils/image-util";
import CodereBtn from "../CodereBtn/index.jsx";

const LocalBanners = () => {
  const banners = [
    {
      title: "CASA DE APUESTAS OFICIAL",
      btnTitle: "APOSTA EN VIVO",
      text: "¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.",
      image: "LA-CASA-DE-APUESTAS-OFICIAL-MAS-BACANA.jpg",
    },
    {
      title: "CASINO EN VIVO",
      btnTitle: "VER MAS",
      text: "¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.",
      image: "EL-MEJOR-CASINO-EN-VIVO.jpg",
    },
    {
      title: "TODOS LOS DEPORTES",
      btnTitle: "VER MAS",
      text: "¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.",
      image: "TODA-LA-EMOCION-DEL-DEPORTE.jpg",
    },
  ];

  const imagesSubFolder = "localBanners";

  return (
    <div className={styles.localBannersContainer}>
      {banners.map((banner) => {
        return (
          <div key={banner.title} className={styles.localBannerCard}>
            <div className={styles.localBannerText}>
              <div>
                <h1 className={styles.bannerTitle}>{banner.title}</h1>
                <div className={styles.mobileDots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>

              <div className={styles.bannerParagraph}>{banner.text}</div>

              <div className={styles.btn}>{`${banner.btnTitle} >`}</div>
            </div>
            <img
              src={getImageUrl(banner.image, imagesSubFolder)}
              className={styles.localBannerImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LocalBanners;
