import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import AboutUs from "./components/Pages/about-us";
import Contact from "./components/Pages/contact";
import Home from "./components/Pages/home";
import Register from "./components/register";
import ReleventTerm from "./components/relevent-term";
import Suggestions from "./components/suggestions";

function App() {
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
          <Route path="suggestions" element={<Suggestions />} />
          {/* user authentication */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
