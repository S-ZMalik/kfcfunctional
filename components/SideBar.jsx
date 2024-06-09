import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import { sideBarList, sidebarTop } from '../api/data'
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

// {disp, setDisplay, active, setActive}
function SideBar() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  
  function handleNight() {
    setActive(true);
    document.documentElement.classList.remove('dark');
  }
  
  function handleDay() {
    setActive(false);
    document.documentElement.classList.add('dark');
  }

  function overflow() {
    setDisplay(!disp)
    // setActive(!active);
    let html = document.getElementsByTagName('html')[0];
    html.style.overflow = 'scroll';
  }
  
  return (
    <div className="side-bg" onClick={overflow}>
    <section className='sidebar-section' onClick={e => e.stopPropagation()}>
      <div className="sidebar-relative">
        <div className="header-side">
        <Login login={overflow} to={'/login'}/>
        <div className="theme-button">
          <button className={`${active && 'day active'}`} onClick={handleNight}>
          Night </button>
          <button className={`${active || 'night active'}`} onClick={handleDay}>
            Day
          </button>
        </div>
        </div>

        <ul className="first-list">
          {sidebarTop.map((list) => (
             <NavLink className="main-link" to={list.href} onClick={overflow} key={list.id}>
            <li className="side-list">
              <div><img src={list.img} alt={list.text} /></div>
             {list.list}
            </li>
             </NavLink>
          ))}
        </ul>

        <ul className="first-list">
          {sideBarList.map((list) => (
            <NavLink to={list.href} onClick={overflow} key={list.id}>
            <li className="side-list">
              <p>{list.list}</p>
            </li>
              </NavLink>
          ))}
        </ul>
        </div>

    </section>
    </div>
  )
}

export default SideBar