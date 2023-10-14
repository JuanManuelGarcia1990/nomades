import styles from "./inicio.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import universo from "../../assets/ImgsCarousel/universo.png";
import explora from "../../assets/ImgsCarousel/explora.png";
import fitzroy from "../../assets/ImgsCarousel/fitzroy.png";
import glaciar from "../../assets/ImgsCarousel/glaciar.png";
import lagosarg from "../../assets/ImgsCarousel/lagosarg.png";

import Card from "../Card/card";
//1366 x768
const Inicio = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
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
          <img
            className={styles.destinos}
            src={universo}
            alt="Un universo esperándote"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={explora}
            alt="Explora y descubrí"
          />
        </div>

        <div className={styles.card}>
          <img className={styles.destinos} src={fitzroy} alt="Fitzroy" />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={glaciar}
            alt="Glaciar Perito Moreno"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.destinos}
            src={lagosarg}
            alt="Lagos Argentinos"
          />
        </div>
      </Carousel>
      <Card />
    </div>
  );
};

export default Inicio;
