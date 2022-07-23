import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__check-icon" />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Animated UI</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Design technology consulting.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Ready To Code UI.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Website Design.</p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__check-icon" />
              <p>Blog / News Management</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Booking / Reservations / Availability System</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Responsive Websites</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Portfolio Showcase</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Testimonials</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Personal Websites</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Website Testing</p>
            </li>
          </ul>
        </article>
        {/* end web development*/}
        {/* <article className="service">
          <div className="service__head">
            <h3>Website Testing</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__check-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <FiCheck className="service__check-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
        {/* end content creation */}
      </div>
    </section>
  );
};

export default Services;
