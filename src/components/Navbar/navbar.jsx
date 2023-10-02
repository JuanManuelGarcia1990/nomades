import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import logo from "../../assets/Logo/logo.jpg";

const Navbar = () => {
  const activeStyle = {
    color: "#5eab81",
  };
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.menu}>
        <NavLink
          to="/inicio"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/nacionales"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Nacionales
        </NavLink>
        <NavLink
          to="/internacionales"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Internacionales
        </NavLink>
        <NavLink
          to="/contacto"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contacto
        </NavLink>
      </div>
    </nav>

    
  );
};

export default Navbar;
