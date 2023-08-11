import styles from "./button.module.scss";

import React from "react";

const Button = ({ texto }) => {
  return <button className={styles.btn}>{texto}</button>;
};

export default Button;
