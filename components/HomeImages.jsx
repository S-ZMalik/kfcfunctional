import React from 'react'
import { big1, big2, big3, big4 } from '../assets'
import { NavLink } from 'react-router-dom'

function HomeImages() {
  return (
    <section className="big-images container grid grid-two">
      <div className="home-img">
        <img src={big1} alt="big1" />
      </div>
      <div className="home-img">
        <img src={big2} alt="big1" />
      </div>
      <div className="home-img">
        <img src={big3} alt="big1" />
      </div>
      <div className="extra-img">
        <div className="img-div">
        <img src={big4} alt="big1" />
        </div>
        <p className="home-img-title">
        Adding 11 herbs and spices, Explore our menu and add items to your cart.
        </p>
        <div className="home-img-btn">
            <NavLink to={'/explore-menu'}>
            <button style={{cursor: 'pointer'}}>
            Explore Menu
            </button>
            </NavLink>
        </div>
      </div>
    </section>
  )
}

export default HomeImages