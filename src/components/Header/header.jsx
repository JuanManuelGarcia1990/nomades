import styles from "./header.module.scss";
import logo from "../../assets/Logo/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import InstagramIcon from '@mui/icons-material/Instagram';




const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <p>Santa Fe 1208 8A Rosario,Santa Fe, Argentina</p>
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
      <button
           endicon= {<InstagramIcon />}>
      </button>

      </div>
      <p>Lunes a Sabados 8 a 20hs</p></header>
  )
}

export default Header