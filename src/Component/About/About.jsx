import React from 'react'
import './About.css';
import Me from '../../Assets/avatar.jpeg';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Me} alt="" className='about__img'/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Lim Yee Jie, I am a Software Engineer from Malaysia! I graduate in September 2024 have solid experience in back-end development, 
            </p>
            <a href="" className="btn">Download Resume</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-end Development</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-end Development</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CI/CD</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cicd"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About;