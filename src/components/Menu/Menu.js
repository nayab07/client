import React from "react";
import "./Menu.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="../IMG-20250116-WA0012[1].jpg" alt="progile_pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome /> Home
              </div>
              <div className="nav-link">
                <FcAbout /> About
              </div>
              <div className="nav-link">
                <FaLaptopCode /> Work Experience
              </div>
              <div className="nav-link">
                <MdOutlineDeveloperMode /> Tech Stack
              </div>
              <div className="nav-link">
                <FaUserGraduate /> Education
              </div>
              <div className="nav-link">
                <GrProjects /> Projects
              </div>
              <div className="nav-link">
                <FaUser /> Testimonial
              </div>
              <div className="nav-link">
                <GrContact /> Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome title="Home"/>
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FaLaptopCode title="Work Experience" />
              </div>
              <div className="nav-link">
                <MdOutlineDeveloperMode title=" Tech Stack"/>
              </div>
              <div className="nav-link">
                <FaUserGraduate title="Education" /> 
              </div>
              <div className="nav-link">
                <GrProjects title="Projects" /> 
              </div>
              <div className="nav-link">
                <FaUser title="Testimonial" />
              </div>
              <div className="nav-link">
                <GrContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
