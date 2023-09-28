import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Inicio from "./components/Inicio/inicio";
import Nacionales from "./components/Nacionales/nacionales";
import Internacionales from "./components/Internacionales/internacionales";
import Contacto from "./components/Contacto/contacto";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/nacionales" element={<Nacionales />} />
        <Route path="/internacionales" element={<Internacionales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
