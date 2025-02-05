import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import Experience from "./pages/Work-Experience/Experience";
import ContactUs from "./pages/Contact/ContactUs";
import ScrollToTop from "react-scroll-to-top";
import "./index.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/Loader";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";

function App() {
  const [theme] = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate a 3-second delay
  }, []);

  return (
    <>
      <div className="app">
        {isLoading ? (
          <Loading />
        ) : (
          <div id={theme}>
            <ToastContainer />
            <MobileNav />
            <Layout />
            <div className="main-wrapper">
              <About />
              <Education />
              <TechStack />
              <Project />
              <Experience />
              <ContactUs />
              <ScrollToTop
                smooth
                color="#f29f67"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  zIndex: 9999, // Ensure it's on top
                  backgroundColor: "#1e1e2c",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
