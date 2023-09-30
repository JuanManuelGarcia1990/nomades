import styles from "./inicio.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/button";
import cataratas from "../../assets/Destinos/nacionales/cataratas.jpg";
import cerro from "../../assets/Destinos/nacionales/cerro.jpg";
import faro from "../../assets/Destinos/nacionales/faro.jpg";
import glaciar from "../../assets/Destinos/nacionales/glaciar.jpg";
import mendoza from "../../assets/Destinos/nacionales/mendoza.jpg";
import puertoMadryn from "../../assets/Destinos/nacionales/puertoMadryn.jpg";
import machuPichu from "../../assets/Destinos/internacionales/machuPichu.jpg";
import egipto from "../../assets/Destinos/internacionales/egipto.jpg";
import paris from "../../assets/Destinos/internacionales/paris.jpeg";
import roma from "../../assets/Destinos/internacionales/roma.jpg";
import rioJaneiro from "../../assets/Destinos/internacionales/rioJaneiro.jpg";
import caribe from "../../assets/Destinos/internacionales/caribe.jpg";

const Inicio = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={styles.mainContainer}>
      <Carousel
        showDots={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="all 0.9"
        infinite={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className={styles.card}>
          <img className={styles.destinos} src={cataratas} alt="cataratas" />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={cerro}
            alt="Cerro de los 7 colores"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={faro}
            alt="Faro del fin del mundo"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={glaciar}
            alt="Glaciar Perito Moreno"
          />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={mendoza} alt="Mendoza" />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={puertoMadryn}
            alt="Puerto Madryn"
          />
        </div>
      </Carousel>
      <div className={styles.buttonContainer}>
        <NavLink to="/nacionales">
          <Button texto="Ver Más" />
        </NavLink>
      </div>
    </div>
  );
};

export default Inicio;
