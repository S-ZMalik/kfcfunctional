import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx';
import SideBar from '../components/SideBar.jsx';

function StoreLocator() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  
  return (
    <>
    {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    </>
  )
}

export default StoreLocator