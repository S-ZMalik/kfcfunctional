import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import TopHeading from '../components/TopHeading.jsx'
import { loginImg } from '../assets/index.js'
import { BsGoogle } from 'react-icons/bs'
import { SidebarContext } from '../context/SidebarContext.jsx'
import SideBar from '../components/SideBar.jsx'

function Login() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);

  return (
    <>
    {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    <div className="form-extra-div container">
    <div className="login-form-div">
    <TopHeading/>
     <div className="login-form grid grid-two ">
      <figure className="login-img">
        <img src={loginImg} alt="login-img" />
      </figure>
      <form className="login-form-section grid">
        <h4 className="login-form-heading">
        Welcome!
        </h4>
           <div className="number">
              <label htmlFor="number">PHONE NUMBER (3XXXXXXXXX) *</label>
              <div className="extra-num">
                <span className="white-space">+92 |</span>
                <input max={999999999999} min={11} type="number" id="number" name="number" />
                </div>
              </div>
              <div className="login-form-btn">
                <button>
                  Login
                </button>
              </div>
              <div className="login-form-google-btn">
                <BsGoogle className='icon'/>
                <button>
                  Login with Google
                </button>
              </div>
      </form>
     </div>
    </div>
    </div>
    </>
  )
}

export default Login