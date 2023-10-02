import styles from "./card.module.scss";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";
import caribe from "../../assets/Destinos/internacionales/caribe.jpg";

const Card = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardContainer}>
        <img src={caribe} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={caribe} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={caribe} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={caribe} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={caribe} />
        <h1>Destino</h1>
        <div className={styles.buttonContainer}>
          <NavLink to="/nacionales">
            <Button texto="Ver Más" />
          </NavLink>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <img src={caribe} />
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
