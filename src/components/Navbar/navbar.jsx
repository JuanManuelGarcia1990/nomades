import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <ul>
            <li>INICIO</li>
            <li>NACIONALES</li>
            <li>INTERNACIONALES</li>
            <li>CONTACTO</li>
        </ul>
        <h1>NOMADES TURISMO</h1>
    </nav>
  )
}

export default Navbar