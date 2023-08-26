import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Button from "./components/Button/button";


function App() {
  return (
    <div>
      <Navbar/>
      <h1>Nomades Turismo</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio"/>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nacionales" element={<Navigate to="/nacionales"/>} />
        <Route path="/internacionales" element={<Navigate to="/internacionales"/>} />
      </Routes>
      
      <Button texto="home" />
      <Button texto="about" />
      <Button texto="contact" />
    </div>
  );
}

export default App;
