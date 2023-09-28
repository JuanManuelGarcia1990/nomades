import styles from "./footer.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className={styles.mainFooter}>      <div>
    <NavLink to="https://www.instagram.com/">
      <FontAwesomeIcon icon={faInstagram} />
    </NavLink>
  </div></div>
  )
}

library.add(faInstagram);
export default Footer