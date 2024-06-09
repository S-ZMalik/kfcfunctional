import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import ExploreData from '../components/ExploreData.jsx'
import BestSeler from '../components/BestSeler.jsx'
import TopDeals from '../components/TopDeals.jsx'
import HomeImages from '../components/HomeImages.jsx'
import Footer from '../components/Footer.jsx'
import SideBar from '../components/SideBar.jsx'
import Header from '../components/Header.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx'
import MainModel from '../components/MainModel.jsx'
import ModelContext from '../context/ModelContext.jsx'

function Home() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  const {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);
  
  
  

  // const [active, setActive] = useState(true);
  // const [disp, setDisplay] = useState(true);

  // function diplayChange(e) {
  //   if(e.target === e.currentTarget){
  //  setDisplay(!disp);
  //   }
  // }

  return (
    <>
    {close && <MainModel/>}
    {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    <Hero/>
    <ExploreData />
    <BestSeler/>
    <TopDeals/>
    <HomeImages/>
    <Footer/>
    </>
  )
}

export default Home