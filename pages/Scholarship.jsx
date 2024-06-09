import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import Figure from '../components/Figure.jsx'
import { scholarship, scholarship1 } from '../assets/index.js'
import Figure2 from '../components/Figure2.jsx'
import EducationCart from '../components/EducationCart.jsx'
import ApplyButton from '../components/ApplyButton.jsx'
import Cup from '../components/Cup.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx'
import SideBar from '../components/SideBar.jsx'

function Scholarship() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);

  return (
    <div className='scholar-extra
    '>
    {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    <Figure img={scholarship}/>
    <div className="scholarship-main container">
    <Figure2 img={scholarship1}/>
    <h1>
    KFC PAKISTANS MITAO BHOOK PLATFORM IS PROVIDING 120+ HIGHER EDUCATION SCHOLARSHIPS TO DESERVING STUDENTS ACROSS ALL HEC RECOGNISED INSTITUTES IN PAKISTAN. THIS IS DONE IN COLLABORATION WITH THE ORANGE TREE FOUNDATION, AN EDUCATION ADVOCATE WORKING TO FURTHER EDUCATION IN THE COUNTRY.
    </h1>
    <h1>
    HIGHER EDUCATION GIVES YOU, THE PAKISTANI YOUTH, AN OPPORTUNITY TO SUCCEED IN TODAY’S GLOBAL ECONOMY AND KFC PAKISTAN IS EXCITED TO ENABLE THE DREAMS OF HUNDREDS OF PAKISTANI SCHOLARS EMBARKING ON THIS JOURNEY.
    </h1>
    <EducationCart/>
    </div>

    <section className="bhook-cup">
        <Cup/>
        <ApplyButton/>
      </section>

      <div className="together-div margin-bhook">
        <h1 className="scholarship-heading container">
        ELIGIBILITY CRITERIA
        </h1>
      </div>

      <ul className="scholar container">
        <li>
          Applicant must be a resident of Pakistan.
        </li>
        <li>
        Students need to compete for securing admission at the participating institution as per admission policy of the institution and be enrolled in undergraduate (4 years) programs.
        </li>
        <li>
        Students in financial need who are already enrolled in participating institutions are also eligible to apply.
        </li>
        <li>
        Students in financial need who are already enrolled in participating institutions are also eligible to apply.
        </li>
      </ul>


      <div className="together-div margin-bhook red">
        <h1 className="scholarship-red container">
        FIELDS SUPPORTED FOR THE SCHOLARSHIP
        </h1>
      </div>

      <ul className="scholar container">
        <li>
        Business, Engineering, Medical, IT, Mathematics, Physical Sciences, Education and More
        </li>
        <li>
        Please note these scholarships are provided yearly and renewal for existing students will be contingent on the academic committee’s discretion every year.
        </li>
        <li>
        Complete policy document available here.
        </li>
      </ul>

      <ApplyButton/>
    </div>
  )
}

export default Scholarship