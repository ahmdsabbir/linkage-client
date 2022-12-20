import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/authrizaton-authentication/Login";
import Register from "./components/authrizaton-authentication/register";
import Navbar from "./components/navbar";
import AboutUs from "./components/Pages/about-us";
import Contact from "./components/Pages/contact";
import Home from "./components/Pages/home";
import ReleventTerm from "./components/relevent-term";
import TestForm from "./components/reusable-component/form/test-form";
import TestLogin from "./components/reusable-component/form/test-login";
import Suggestions from "./components/suggestions";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <TestForm />
        <TestLogin />

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
