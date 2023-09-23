import styles from "./inicio.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Button/button";
import cataratas from "../../assets/Destinos/cataratas.jpg";
import cordoba from "../../assets/Destinos/cordoba.jpg";
import costa from "../../assets/Destinos/costa.jpg";
import mendoza from "../../assets/Destinos/mendoza.jpg";
import brasil from "../../assets/Destinos/brasil.jpg";
import caribe from "../../assets/Destinos/caribe.jpg";
import eeuu from "../../assets/Destinos/eeuu.jpg";
import peru from "../../assets/Destinos/peru.jpg";

const Inicio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        <div className="card">
          <h2>Cataratas</h2>
          <img className={styles.destinos} src={cataratas} alt="cataratas" />
        </div>

        <div className="card">
          <h2>Cordoba</h2>
          <img className={styles.destinos} src={cordoba} alt="cordoba" />
        </div>

        <div className="card">
          <h2>Costa</h2>
          <img className={styles.destinos} src={costa} alt="costa" />
        </div>

        <div className="card">
          <h2>Mendoza</h2>
          <img className={styles.destinos} src={mendoza} alt="mendoza" />
        </div>
      </Carousel>
      <div className={styles.buttonContainer}>
        <Button texto="Ver Más" />
      </div>

      <h2>Internacionales</h2>
      <Carousel responsive={responsive}>
        <div className="card">
          <img className={styles.destinos} src={brasil} alt="brasil" />
          <h2>brasil</h2>
        </div>

        <div className="card">
          <img className={styles.destinos} src={caribe} alt="caribe" />
          <h2>caribe</h2>
        </div>

        <div className="card">
          <img className={styles.destinos} src={eeuu} alt="eeuu" />
          <h2>eeuu</h2>
        </div>
        {/* "product--image" */}
        <div className="card">
          <img className={styles.destinos} src={peru} alt="peru" />
          <h2>peru</h2>
        </div>
      </Carousel>
      <div className={styles.buttonContainer}>
        <Button texto="Ver Más" />
      </div>
    </div>
  );
};

export default Inicio;
