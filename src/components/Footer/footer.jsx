import styles from "./footer.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
        <h5>Redes Sociales</h5>
        <div className={styles.icons}>
        <NavLink to="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </NavLink>
        <NavLink to="https://www.twitter.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </NavLink>
      </div>
      <div>
        <p>Sta fe 1813 1B</p>
      </div>
    </footer>
  );
};

library.add(faInstagram, faFacebook);
export default Footer;
