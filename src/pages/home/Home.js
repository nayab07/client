import { React } from "react";
import Resume from '../../assets/docs/shams.pdf'
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <div style={{ marginBottom: "30px" }}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#e0b50f",
                  fontWeight: 100,
                  fontSize: "1em",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  "Mern Stack Developer!",
                  "Full Stack Developer!",
                  "React Developer!",
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
              />
            </div>
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="shams.pdf">My Resume</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
