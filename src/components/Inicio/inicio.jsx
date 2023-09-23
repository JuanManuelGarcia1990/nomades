import styles from "./inicio.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Button/button";
import cataratas from "../../assets/Destinos/nacionales/cataratas.jpg"
import cerro from "../../assets/Destinos/nacionales/cerro.jpg"
import faro from "../../assets/Destinos/nacionales/faro.jpg"
import glaciar from "../../assets/Destinos/nacionales/glaciar.jpg"
import mendoza from "../../assets/Destinos/nacionales/mendoza.jpg"
import puertoMadryn from "../../assets/Destinos/nacionales/puertoMadryn.jpg"

import machuPichu from "../../assets/Destinos/internacionales/machuPichu.jpg";
import egipto from "../../assets/Destinos/internacionales/egipto.jpg"
import paris from "../../assets/Destinos/internacionales/paris.jpeg"
import roma from "../../assets/Destinos/internacionales/roma.jpg"
import rioJaneiro from "../../assets/Destinos/internacionales/rioJaneiro.jpg"
import caribe from "../../assets/Destinos/internacionales/caribe.jpg"




const Inicio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.mainContainer}>
      <h2>Nacionales</h2>
      <Carousel responsive={responsive}>
        <div className={styles.card}>
          <img className={styles.destinos} src={cataratas} alt="cataratas" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={cerro} alt="Cerro de los 7 colores" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={faro} alt="Faro del fin del mundo" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={glaciar} alt="Glaciar Perito Moreno" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={mendoza} alt="Mendoza" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={puertoMadryn} alt="Puerto Madryn" />
        </div>

      </Carousel>
      <div className={styles.buttonContainer}>
        <Button texto="Ver Más" />
      </div>

      <h2>Internacionales</h2>
      <Carousel responsive={responsive}>
        <div className={styles.card}>
          <img className={styles.destinos} src={egipto} alt="egipto" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={machuPichu} alt="Machu Pichu" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={paris} alt="Paris" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={rioJaneiro} alt="Rio de janeiro" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={roma} alt="Roma" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={caribe} alt="Caribe" />
        </div>

      </Carousel>
      <div className={styles.buttonContainer}>
        <Button texto="Ver Más" />
      </div>
    </div>
  );
};

export default Inicio;
