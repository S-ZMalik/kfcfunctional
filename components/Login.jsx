import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarContext } from '../context/SidebarContext';

function Login({className, login, to}) {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  return (
    <button className={`login ${className}`}>
      <NavLink className="main-link" to={to} onClick={login}>Login</NavLink>
    </button>
  )
}

export default Login