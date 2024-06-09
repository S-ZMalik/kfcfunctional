import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function TopHeading({heading}) {
  return (
    <div className="about-header container">
          <NavLink to="/explore-menu"><IoIosArrowBack className="about-icon"/></NavLink>
          <h4 className="about-heading">{heading && heading}</h4>
        </div>
  )
}

export default TopHeading