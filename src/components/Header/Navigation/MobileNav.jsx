import React from "react";
import hamburger from "../../../assets/core/nav-hamburger.svg";
import styles from "./mobileNav.module.scss";

const MobileNav = () => {
  return (
    <div className={styles.nav}>
      <img src={hamburger} alt="nav" width={50} height={50} />
    </div>
  );
};

export default MobileNav;
