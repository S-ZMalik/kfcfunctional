import React, { useContext, useEffect, useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import { delivery, logo, pickup } from '../assets/index'
import Login from './Login.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx';
import { NavLink } from 'react-router-dom';
import { ExploreContext } from '../context/ExplorMenuContext.jsx';

function Header() {
   const {disp, setDisplay} = useContext(SidebarContext);
      // disp && overflow();
      const {addItemsData, setAddItemsData, addIncrement, decreamentFunc, deleteObject, addItemsFunc, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, gst} = useContext(ExploreContext);
   
     function overflow() {
       let html = document.getElementsByTagName('html')[0];
       html.style.overflow = 'hidden';
     }

   function func() {
      setDisplay(!disp);
      overflow();
   }
   
  return (
    <header>
        <nav className='container home-nav'>
        <div className="left-side">
           <button className="menu-icon">
            <RiMenu2Line onClick={func}/>
           </button>
           <figure className="logo">
              <NavLink to={'/home'}><img src={logo} alt="logo" /></NavLink>
           </figure>
           <div className="nav-btn-div">
           <button className="delivery">
            <img src={delivery} alt="logo-button" />
            <strong>DELIVERY</strong>
           </button>
           <button className='picup'>
            <img src={pickup} alt="navimg" />
            <strong>PICKUP</strong>
           </button>
           </div>
        </div>

        <div className="right-side">
           <NavLink to={'/bucket'}>
           <button className="card-cup">
            <strong>{totalQuantity}</strong>
           </button>
           </NavLink>
           <Login to={'/login'}/>
        </div>
        </nav>
    </header>
  )
}

export default Header