import React from 'react'
import './Resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className="resume container sectioin" id='resume'>
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
      </div>
    </section>
  )
}

export default Resume