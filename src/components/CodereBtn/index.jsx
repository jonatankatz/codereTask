import React from "react";
import styles from "./codereBtn.module.scss";

 const CodereBtn = (props = { title: "acceder" }) => {
    
  return <div className={styles.btn}>{props.title}</div>;
};

export  default CodereBtn