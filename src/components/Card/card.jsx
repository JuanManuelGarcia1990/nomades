import styles from "./card.module.scss";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";
import destino1 from "../../assets/ImgsDestacados/destino1.jpg";
import destino2 from "../../assets/ImgsDestacados/destino2.jpg";
import destino3 from "../../assets/ImgsDestacados/destino3.jpg";
import destino4 from "../../assets/ImgsDestacados/destino4.jpg";
import destino5 from "../../assets/ImgsDestacados/destino5.jpg";
import destino6 from "../../assets/ImgsDestacados/destino6.jpg";

const Card = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardContainer}>
        <img src={destino1} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={destino2} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={destino3} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={destino4} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={destino5} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={destino6} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Card;
