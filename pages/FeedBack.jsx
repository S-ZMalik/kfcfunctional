import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import TopHeading from "../components/TopHeading.jsx";
import SideBar from "../components/SideBar.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";

function FeedBack() {
  const [click, setClick] = useState(true);
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);

  function handleClicked() {
    setClick(!click);
  }

  // useEffect(() => {
  //   handleClicked()
  // }, [click])
  return (
    <div>   
       {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
      <TopHeading heading={"Have Some Feedback To Share?"} />
      <div className="feedback-subheading-div">
      <h5 className="feedback-red-heading">
        Well, you’ve come to the right place!
      </h5>
      <p className="feedback-para">
        Fill in the sections below and we'll be in touch soon, or if you want to
        contact a specific store, visit our locations page for store contact
        details. * indicates a required answer
      </p>
      </div>

      <div className="feedback-section container">
      <div className="feedback-form-container grid grid-two">
        <form action="" className="form-left">
        <h4 className="feedback-heading">Contact Details</h4>
          <div className="left-row1">
            <div className="name-div">
            <label htmlFor="name" className='label'>FULL NAME *</label>
              <input type="text" id="name" name="name" />
            </div>
              <div className="number">
              <label htmlFor="number">PHONE NUMBER (3XXXXXXXXX) *</label>
              <div className="extra-num ">
                <span className="white-space">+92 |</span>
                <input max={999999999999} min={11} type="number" id="number" name="number" />
                </div>
              </div>
          </div>

          <div className="left-row2">
             <label htmlFor="email" className='label'>
              EMAIL *
            </label>
            <input type="email" id="email" name="email"/>
          </div>

          <div className="left-row3">
          <label htmlFor="order" className='label'>
              ORDER ID *
            </label>
            <input type="text" id="order" name="order"/>
          </div>

          <div className="left-row4">
           <label htmlFor="feedback" className='label'>
              FEEDBACK CHANNEL *
            </label>
            {/* <input type="text" id="feedback" name="feedback"/> */}
            <select name="feedback" id="feedback">
              <option value="Dine IN">
              Dine IN
              </option>
              <option value="Dine IN">
              Delivery
              </option>
              <option value="Dine IN">
              Pickup
              </option>
              <option value="Dine IN">
              Take Away
              </option>
              <option value="Dine IN">
              Drive thru
              </option>
            </select>
          </div>
        </form>

        <form action="" className="form-left">
        <h4 className="feedback-heading">Contact Details</h4>
          <div className="left-row1">
            <div className="name-div">
            <label htmlFor="name" className='label'>FULL NAME *</label>
            <select name="city" id="city">
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
                <option value="N.Nazimabad">N.Nazimabad</option>
              </select>
            </div>
              <div className="number">
              <label htmlFor="date">MM DD YY</label>
                <input type="date" id="date" name="number" />
              </div>
          </div>

          <div className="left-row2">
             <label htmlFor="email" className='label'>
              FEEDBACK TYPE
            </label>
            <select name="feedback" id="feedback">
              <option value="Dine IN">
              Dine IN
              </option>
              <option value="Dine IN">
              Delivery
              </option>
              <option value="Dine IN">
              Pickup
              </option>
              <option value="Dine IN">
              Take Away
              </option>
              <option value="Dine IN">
              Drive thru
              </option>
            </select>
          </div>

          <div className="left-row0 text-area">
            <textarea name="message" id="message" rows={12}></textarea>
          </div>
        </form>

      </div>
    </div>

    <div className="submit-btn">
      <button type="button">
        SUBMIT
      </button>
    </div>
    </div>

  );
}

export default FeedBack;
