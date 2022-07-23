import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Modern Responsive Website" />
          </div>
          <h3>Modern Responsive Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/modern-responsive-website" className="btn" target='_blank' rel='noreferrer' >Github</a>
            <a href="https://alifouanne.github.io/modern-responsive-website/" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="Orion UI kit - Charts templates & infographics in Figma" />
          </div>
          <h3>Responsive side bar</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/Responsive-side-bar" className="btn" target='_blank' rel='noreferrer'>Github</a>
            {/*  <a href="https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma" className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="Eclipse - Figma dashboard UI kit for data design web apps" />
          </div>
          <h3>Eclipse - Figma dashboard UI kit for data design web apps</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/modern-responsive-website" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="Maintaining tasks and tracking progress" />
          </div>
          <h3>Maintaining tasks and tracking progress</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/modern-responsive-website" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="Orion UI kit - Charts templates & infographics in Figma" />
          </div>
          <h3>Orion UI kit - Charts templates & infographics in Figma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/modern-responsive-website" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="Orion UI kit - Charts templates & infographics in Figma" />
          </div>
          <h3>Orion UI kit - Charts templates & infographics in Figma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alifouanne/modern-responsive-website" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://dribbble.com/shots/17317573-Orion-UI-kit-Charts-templates-infographics-in-Figma" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio