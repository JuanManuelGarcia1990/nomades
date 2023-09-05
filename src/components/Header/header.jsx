import styles from "./header.module.scss";
import logo from "../../assets/Logo/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <p>Santa Fe 1208 8A Rosario,Santa Fe, Argentina</p>
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
      {/* <FontAwesomeIcon icon={faInstagram} style={{color: "#264d74",}} /> */}
      </div>
      <p>Lunes a Sabados 8 a 20hs</p></header>
  )
}

export default Header