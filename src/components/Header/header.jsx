import styles from "./header.module.scss";
import logo from "../../assets/Logo/logo.jpg"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} /></header>
  )
}

export default Header