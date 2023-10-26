import React from 'react'
import './Home.css';
import Me from '../../Assets/avatar.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Lim Yee Jie</h1>
        <span className="home__education">I'm a Back-end Developer</span>
        <HeaderSocials />
        <a href="https://wa.me/601116540123" target='_blank' className="btn">Contact Me</a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home