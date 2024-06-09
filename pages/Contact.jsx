import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import TopHeading from '../components/TopHeading.jsx'
import { contactData, contactSecondData } from '../api/Data.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx';
import SideBar from '../components/SideBar.jsx';

function Contact() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);

  return (
    <>
    {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    <TopHeading/>
    <div className="container contact-container">
    <div className="contact grid grid-three">
      {
        contactData.map((data) => (
          <div className="contact-info" key={data.id}>
        <div className="contact-header">
          <h4 className='contact-heading'>
            <i>{data.phone}</i>
            <span>{data.heading}</span>
          </h4>
          <p>{data.num}</p>
        </div>
        <div className="contact-body">
         <h4 className='contact-heading'>
            <i>{data.location}</i>
            <span>{data.locate}</span>
          </h4>
          <p className='address'>
            {data.address}
          </p>
        </div>
      </div>
        )
      )
      }
    </div>
    <div className="grid grid-two contact-second">
      {
        contactSecondData.map((data) => (
          <div className="second-contact-grid contact-header" key={data.id}>
          <h4 className='contact-heading'>
            <i>{data.icon}</i>
            <span>{data.heading}</span>
          </h4>
          <p className='address'>{data.uan}</p>
        </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Contact