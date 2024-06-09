import React from 'react'
import { kfcbiglogo } from '../assets'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="error-container container">
    <div className="error-extra-div">
      <figure className="error-logo">
        <img src={kfcbiglogo} alt="big logo image kfc" />
      </figure>
      <h4 className="error-heading white-space">
      PAGE NOT FOUND
      </h4>
      
      <div className="error-btn">
        <NavLink to={'explore-menu'}>
        <button>
          Back To Menu
        </button>
        </NavLink>
      </div>
      <p className="error-para">
      Looks like we wandered off a little bit, click on the button above to see our menu
      </p>
      </div>
    </div>
  )
}

export default Error