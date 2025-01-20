import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import Experience from "./pages/Work-Experience/Experience";
import ContactForm from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import './index.css';
import Loader from "./components/loader/Loader";
import React, { useState, useEffect } from 'react';
// import "./App.css";
// import Home from "./pages/home/Home";
import { useTheme } from "./context/ThemeContext";
function App() {
  const [loading, setLoading] = useState(true);
  const [theme]=useTheme()
  useEffect(() => {
    // Simulate a delay (e.g., fetching data)
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
     <div className="App">
     {loading ? (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
        />
      ) : (
        <p>Content loaded!</p>
      )}
    </div>
    <div id={theme}>
      <Layout />
      <div className="main-wrapper">
        {/* <Home /> */}
        <About />
        <TechStack />
        <Project />
        <Education />
        <Experience />
        <ContactForm />
        <Footer />
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
