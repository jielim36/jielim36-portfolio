import React from 'react'
import './Resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section __title">Education / Experience</h2>
      <div className='resume__container grid'>
        <div className="timeline grid">
          {Data.map((val,id)=>{
            if(val.category === 'education'){
              return (
                <Card 
                  key={id} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc}
                  />
              )
            }
          })}
        </div>
      <p className="githubState">
        <img src="https://github-readme-stats.vercel.app/api?username=jielim36&show_icons=true&locale=en" alt="jielim36"/>
      </p>
      </div>
    </section>
  )
}

export default Resume