import styles from "./header.module.scss";
import logo from "../../assets/Logo/logo.jpg"


const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <p>Santa Fe 1208 8A Rosario,Santa Fe, Argentina</p>
      <div>


      </div>
      <p>Lunes a Sabados 8 a 20hs</p></header>
  )
}

export default Header