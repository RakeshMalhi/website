import {  Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
          <Route  path="About" element={<About />} />
          <Route  path="services" element={<Services />} />
          <Route  path="contact" element={<Contact />} />
          <Route  path="*" element={<NoPage />} />

      </Routes>
      <Footer />
      </>
  );
}
