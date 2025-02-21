import React from "react";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import resume from "../../../src/assets/docs/shams.pdf"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
// import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="binding">
        <div className="container home-content">
          {/* <Fade right> */}
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React native developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          {/* </Fade> */}
          {/* <Fade bottom> */}
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=1234567890"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          {/* </Fade> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;