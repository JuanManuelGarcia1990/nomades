import styles from "./inicio.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Button/button";
import cataratas from "../../assets/Destinos/cataratas.jpg";
import cordoba from "../../assets/Destinos/cordoba.jpg";
import costa from "../../assets/Destinos/costa.jpg";
import mendoza from "../../assets/Destinos/mendoza.jpg";
import machuPichu from "../../assets/Destinos/internacionales/machuPichu.jpg";
import egipto from "../../assets/Destinos/internacionales/egipto.jpg"


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
          <img className={styles.destinos} src={cordoba} alt="cordoba" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={costa} alt="costa" />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={mendoza} alt="mendoza" />
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




      </Carousel>
      <div className={styles.buttonContainer}>
        <Button texto="Ver Más" />
      </div>
    </div>
  );
};

export default Inicio;
