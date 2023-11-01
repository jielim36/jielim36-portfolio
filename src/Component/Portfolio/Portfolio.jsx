import React, { useState } from 'react'
import './Portfolio.css';
import Menu from './Menu';

const Portfolio = () => {

  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterItem = (categoryItem) =>{
    if(categoryItem === null){
      setItems(Menu)
    }else{
      const updatedItems = Menu.filter((curElement)=>{
        return curElement.category === categoryItem;
      });
      setItems(updatedItems);
    }

    setActiveFilter(categoryItem);
  }

  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filters">
        <span
          className={`work__item ${activeFilter === null ? 'active' : ''}`}
          onClick={() => filterItem(null)}
        >
          All
        </span>
        <span
          className={`work__item ${activeFilter === "Personal Project" ? 'active' : ''}`}
          onClick={() => filterItem("Personal Project")}
        >
          Personal Project
        </span>
        <span
          className={`work__item ${activeFilter === "Assignment" ? 'active' : ''}`}
          onClick={() => filterItem("Assignment")}
        >
          Assignments
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem)=>{
          const {id,title,image,category,desc,githubLink} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <span className='work__description'>{desc}</span>
              <a href={githubLink} className='work__button' target='_blank'>
                <i className="icon-social-github work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio