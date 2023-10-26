import React from 'react'
import Data from './Data'
import '../Skills/Skills.css';

const Skills = () => {
  return (
    <section className="skills container section" id='TechStack'>
      <h2 className="section__title">Tech Stack</h2>
        <div className="skills__container grid">
          {Data.map((val,id)=>{
            if(val.category === 'skills'){
                return (
                  <div className='skill__item' key={id}>
                    {val.icon}
                    <span>{val.title}</span>
                  </div>
                )
              }
          })}
        </div>
    </section>
  )
}

export default Skills