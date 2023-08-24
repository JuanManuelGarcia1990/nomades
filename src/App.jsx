import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Button from "./components/Button/button";
import Home from "./components/Home/home";

function App() {
  return (
    <div>
      <Navbar icono="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"/>
      <h1>Nomades Turismo</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
      <Button texto="home" />
      <Button texto="about" />
      <Button texto="contact" />
    </div>
  );
}

export default App;
