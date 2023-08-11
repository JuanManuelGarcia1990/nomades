import styles from "./navbar.module.scss";

const Navbar = ({ icono }) => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>INICIO</li>
        <li>NACIONALES</li>
        <li>INTERNACIONALES</li>
        <li>CONTACTO</li>
      </ul>
      <img src={icono} alt="" width="40" height= "40"/>
      <h1>NOMADES TURISMO</h1>
    </nav>
  );
};

export default Navbar;
