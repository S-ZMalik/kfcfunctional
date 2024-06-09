import React, { useState } from 'react'
import { exploreData } from '../api/data'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function ExploreData() {
  const [scrollVal, setScrollVal] = useState(0);
  const [boolean, setBoolean] = useState(true);
  
  function scrollIncrFucn() {
    setScrollVal(scrollVal + 500);
    const scroll = document.querySelector(".explore-home");
    scroll.scroll(scrollVal, 0)
   
  }
  
  function scrollDecFucn() {
    setScrollVal(scrollVal - 500);
    const scroll = document.querySelector(".explore-home");
    scroll.scroll(scrollVal, 0)
  }



  return (
    <div className='container'>
    <h2 className='main-heading'>Explore home</h2>
    <section className="home-explore-section ">
    <button className='next-left-arrow' onClick={scrollIncrFucn}><IoIosArrowDropleftCircle className='icon'/></button>

    <div className='explore-home'>
    {exploreData.map((explore) => (
        <div className="home-explore-card" key={explore.id}>
                <NavLink to={explore.link}><img src={explore.img} alt={explore.title} /></NavLink>
                <h5>{explore.title}</h5>
            <h6 className='border-bottom'></h6>
            <span></span>
        </div>
    ))}
    </div>

    <button className='next-right-arrow' onClick={scrollDecFucn}><IoIosArrowDroprightCircle className='icon'/></button>
    </section>
    </div>
  )
}

export default ExploreData