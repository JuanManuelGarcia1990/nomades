import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import logo from "../../assets/Logo/logo.jpg";

const Navbar = () => {
  const activeStyle = {
    color: "black",
  };
  return (
    <nav className={styles.container}>
      <img src={logo} />
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
