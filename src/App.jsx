import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/about-us";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import Register from "./components/register";
import ReleventTerm from "./components/relevent-term";
import InputField from "./components/reusable-component/input-fields";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />

        {/* route path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />\{/* user routes */}
          <Route path="relevent" element={<ReleventTerm />} />
          {/* user authentication */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
      {/* reusable component */}
      <h1 className="text-5xl mt-40">reusable component trial</h1>
      <InputField
        title={"Search More Suggenstions"}
        action={"Generate Suggenstion Again"}
        placeholder={"post title here"}
        btnStyle={"bg-accent-light"}
      />
    </>
  );
}

export default App;
