import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import "./Qualification.css";


const Qualification = () => {
    return (
        <section id='qualification'>
            <h5>My personal journey</h5>
            <h2>Qualification</h2>
            <div className="container qualification__container">
                <div className="qualification__eduction">
                    <div className='qualification__head'>
                        <FaUserGraduate className='qualification__icon' />
                        <h3>Education</h3>
                    </div>
                    <div className="education__content">
                        <article className='education__detail'>
                            <div className='education__1'>
                                <GiGraduateCap className='education__icon' />

                                <h2>Bachelor In Software Engineering</h2>

                            </div>
                            <h3>Syria, Homs, Al-Baath University</h3>
                            <div className="date">
                                <BsCalendarDate className='education__date' />
                                <h4>2015 - 2021</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="qualification__cert">
                    <div className='qualification__head'>
                        <TbCertificate className='qualification__icon' />
                        <h3>Certificates</h3>
                    </div>
                    <div className="education__content">
                        <article className='education__detail'>
                            <div className='education__1'>
                                <AiFillSafetyCertificate className='education__icon' />
                                <h2>Get Started With Adobe XD</h2>
                            </div>
                            <h3>Coursera Certificate</h3>
                            <h4>BY Carmen Rojas</h4>
                        </article>
                        <article className='education__detail'>
                            <div className='education__1'>
                                <AiFillSafetyCertificate className='education__icon' />
                                <h2>Responsive Website With HTML5 CSS3 JS</h2>
                            </div>
                            <h3>Udemy Certificate</h3>
                            <h4>BY Adil Ahmed</h4>
                        </article>
                        <article className='education__detail'>
                            <div className='education__1'>
                                <AiFillSafetyCertificate className='education__icon' />
                                <h2>The Web Front End Learning Guide</h2>
                            </div>
                            <h3>Udemy Certificate</h3>
                            <h4>BY Hassan Fulaih</h4>
                        </article>
                        <article className='education__detail'>
                            <div className='education__1'>
                                <AiFillSafetyCertificate className='education__icon' />
                                <h2>React JS Tutorial</h2>
                            </div>
                            <h3>Codevolution In Youtube</h3>
                            <h4>BY Vishwas Gopinath</h4>
                        </article>
                        <article className='education__detail'>
                            <div className='education__1'>
                                <AiFillSafetyCertificate className='education__icon' />
                                <h2>SASS Tutorial</h2>
                            </div>
                            <h3>Nour Homsi In Youtube</h3>
                            <h4>BY Nour Homsi</h4>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification