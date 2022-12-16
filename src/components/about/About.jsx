import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import Me from "../../assets/me.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            Software Engineer (Python,java, and React) with 2+ years experience
            in software development with a focus on the frontend side.{" "}
          </p>
          <a href="#contact" className="btn btn-primary ">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
