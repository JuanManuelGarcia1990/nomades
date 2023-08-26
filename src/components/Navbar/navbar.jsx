import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/inicio">Inicio</Link>
      <Link to="/nacionales">Nacionales</Link>
      <Link to="/internacionales">Internacionales</Link>
    </nav>
  );
};

export default Navbar;
