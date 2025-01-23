import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import Experience from "./pages/Work-Experience/Experience";
import ContactUs from "./pages/Contact/ContactUs";
// import Footer from "./pages/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import './index.css';
// import Loader from "./components/loader/Loader";
// import React, { useState, useEffect } from 'react';
// import "./App.css";
// import Home from "./pages/home/Home";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
function App() {
  // const [loading, setLoading] = useState(true);
  const [theme]=useTheme()
 
  return (
    <>
   
    
    <div id={theme}>
    <ToastContainer />
      <MobileNav/>
      <Layout />
      <div className="main-wrapper">
        {/* <Home /> */}
        <About />
        <Education />
        <TechStack />
        <Project />
        <Experience />
        <ContactUs/>
        
        </div>
        <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />

      </div>
    </>
  );
}

export default App;
