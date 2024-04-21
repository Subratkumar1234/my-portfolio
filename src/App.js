import "./App.css";
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./pages/home/Navbar";
import Home from "./pages/home/homescreen";



import Contactme from "./pages/home/Contactme";
import Myportfolio from "./pages/home/Myportfolio";
import Herosection from "./pages/home/Herosection";
import Aboutme from "./pages/home/Aboutme";
import Testimonial from "./pages/home/Testimonial";





function PortfolioApp() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        
        <Route path="myportfolio" element={<Myportfolio />}></Route>
        <Route path="contactme" element={<Contactme />}></Route>
        <Route path="aboutme" element={<Aboutme />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route>
        
        
        <Route path="herosection" element={<Herosection />}></Route>
        
        <Route  path="contact" element={<Contactme />}></Route>
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default PortfolioApp;
