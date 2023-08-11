import styles from "./button.module.scss";

import React from "react";

const Button = (props) => {
  return <button className={styles.btn}>{props.texto}</button>;
};

export default Button;
