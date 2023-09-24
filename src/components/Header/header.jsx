import styles from "./header.module.scss";
import logo from "../../assets/Logo/logo.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <p>Santa Fe 1208 8A Rosario,Santa Fe, Argentina</p>
      <div>
        <NavLink to="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </NavLink>
      </div>
      <p>Lunes a Sabados 8 a 20hs</p>
    </header>
  );
};
library.add(faInstagram);
export default Header;
