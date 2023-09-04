import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const activeStyle = {
    color: "red",
  };
  return (
    <nav className={styles.container}>
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
    </nav>
  );
};

export default Navbar;
