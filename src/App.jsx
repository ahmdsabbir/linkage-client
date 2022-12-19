import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/about-us";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import Register from "./components/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
