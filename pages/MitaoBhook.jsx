import React, { useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {
  bhook1,
  bhook2,
  bhookcup,
  bhookedu,
  bhookedu2,
  bhookedu3,
} from "../assets/index.js";
import { bhookData } from "../api/data.js";
import BhookCards from "../components/BhookCards.jsx";
import Figure from "../components/Figure.jsx";
import Figure2 from "../components/Figure2.jsx";
import EducationCart from "../components/EducationCart.jsx";
import Cup from "../components/Cup.jsx";
import SideBar from "../components/SideBar.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";

function MitaoBhook() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);

  return (
    <>
      {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
      <Figure img={bhook1}/>

      <section className="bhook-card-imgs container">
        <Figure2 img={bhook2}/>
        <h2 className="bhook-heading">
          MITAO BHOOK FOCUSES ON THREE KEY PILLARS TO CREATE SUSTAINABLE
          POSITIVE ECOSYSTEM IN <span>PAKISTAN</span>
        </h2>
       <EducationCart/>
      </section>

      <section className="bhook-cup">
        <Cup/>
        <h3 className="cup-heading">
          KFC DONATES RS 50 FROM THE SALES OF EVERY VALUE BUCKET TO MITAO
          BHOOKAND HAS SPENT OVER <span>$2 MILLION</span> TOWARDS SOCIAL EFFROTS
          IN THE COUNTRY TOGETHER, WE’RE CREATING
        </h3>
      </section>

      <div className="together-div margin-bhook">
        <h1 className="together-heading container">
          TOGETHER, WE’RE CREATING IMPACT AND CHANGING LIVES
        </h1>
      </div>

      <BhookCards
        img={bhookedu}
        heading={"EDUCATION"}
        para={
          "With a commitment to learning, KFC Mitao Bhook has supported the education of 6313 students, fostering academic growth and development."
        }
      />

      <div className="container grid grid-two second-grid">
        <div className="bhook-text">
        <h1 className="card-heading">DIVERSITY</h1>
        <p className="bhook-para">
        Promoting gender equality, KFC Mitao Bhook boasts a remarkable 62% female ratio in its educational initiatives, creating an inclusive and diverse learning environment.
        </p>
        </div>
        <div className="bhook-img">
          <img src={bhookedu2} alt="title"/>
        </div>
      </div>

      <BhookCards
        img={bhookedu3}
        heading={"INCLUSION"}
        para={
          "KFC Mitao Bhook is dedicated to educating 2015 persons with disabilities, empowering them with knowledge and skills."
        }
      />

      <div className="bhook-childs margin-bhook">
        <div className="child-text container grid grid-one">
           <h3 className="child-heading">
           KFC SCORE A SCHOLARSHIP PROGRAM READY TO FULFIL YOUR EDUCATION DREAMS!
           </h3>
           <h6 className="child-small-heading">
           KFC Pakistan’s Mitao Bhook Platform is providing 200+ higher education scholarships to deserving students across all HEC recognized institutes in Pakistan. This is done in collaboration with The Orange Tree foundation, an education advocate working to further education in the country. Higher education gives you, the Pakistani youth, an opportunity to succeed in today’s global economy and KFC Pakistan is excited to enable the dreams of hundreds of Pakistani scholars embarking on this journey.
           </h6>
        </div>

      </div>
      <h4 className="child-main-txt">
        Higher education gives you, the Pakistani Youth, an opportunity to succeed in today’s global economy and KFC Pakistan is excited to enable the dreams of hundreds of Pakistani scholars embarking on this journey.
        </h4>
      <Footer />
    </>
  );
}

export default MitaoBhook;
