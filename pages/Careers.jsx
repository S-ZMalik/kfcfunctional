import React, { useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import video from "../../video/video.mp4";
import { careerBlogData } from "../api/data.js";
import { FaUser } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdSignpost } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { SidebarContext } from "../context/SidebarContext.jsx";
import SideBar from "../components/SideBar.jsx";

function Careers() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  return (
    <>
      {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
      <div className="video container">
        <video src={video} controls></video>
      </div>

      <div className="careers-blog container">
        <h4 className="carees-heading">Our Values</h4>
        <div className="container grid grid-three career-gap">
          {careerBlogData.map((blog) => (
            <div className="blog-container" key={blog.id}>
              <img src={blog.img} alt={blog.heading} />
              <h5>{blog.heading}</h5>
              <p>{blog.para}</p>
            </div>
          ))}
        </div>
      </div>

      <form action="" className="container career-form">
        <h4 className="careers-heading">Careers</h4>
        <h5 className="career-form-heading">
          <FaUser />
          <span>Personal Info</span>
        </h5>

          <div className="career-form-div grid-two">
            <div className="left-row2 career-input">
              <label htmlFor="email" className="label">
                EMAIL *
              </label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="date" className="label">
                Date of Birth *
              </label>
              <input type="date" id="date" name="date" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="country" className="label">
                Country of Birth *
              </label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="city" className="label">
                City of Birth *
              </label>
              <input type="text" id="city" name="city" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="CNIC" className="label">
                CNIC *
              </label>
              <input type="number" id="CNIC" name="CNIC" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="CNIC" className="label">
                CNIC Expiry Date *
              </label>
              <input type="date" id="CNIC" name="CNIC" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="staus" className="label">
                Martial Status *
              </label>
             <select name="staus" id="staus">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="gender" className="label">
                Gender *
              </label>
              <select name="staus" id="staus">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
             </select>
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="country" className="label">
                Religion *
              </label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="city" className="label">
                Disability *
              </label>
              <input type="text" id="city" name="city" />
            </div>
          </div>

        <h5 className="career-form-heading">
          <TiLocation />
          <span>Address</span>
        </h5>
        <div className="career-form-div grid-two">
           
            <div className="number  career-input">
              <label htmlFor="number">PHONE NUMBER (3XXXXXXXXX) *</label>
              <div className="extra-num ">
                <span className="white-space">+92 |</span>
                <input max={999999999999} min={11} type="number" id="number" name="number" />
                </div>
              </div>
            
            <div className="left-row2 career-input">
              <label htmlFor="address" className="label">
                Address *
              </label>
              <input type="text" id="address" name="address" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="country" className="label">
                Country *
              </label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="State" className="label">
                State/Province *
              </label>
              <input type="text" id="State" name="State" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="City" className="label">
                City *
              </label>
              <input type="text" id="City" name="City" />
            </div>
           
          </div>
          
        <h5 className="career-form-heading">
          <MdSignpost />
          <span>Job Posting</span>
        </h5>
        <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="related" className="label">
              How were you refered to us? *
              </label>
              <input type="text" id="related" name="related" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="City" className="label">
              City Applying For *
              </label>
              <input type="text" id="City" name="City" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="jobPosition" className="label">
              Position You are Applying For *
              </label>
              <input type="text" id="jobPosition" name="jobPosition" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="type" className="label">
            Type of Shift (Only for instore) *
              </label>
              <input type="text" id="type" name="type" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="employement" className="label">
              Type of Employement (Only for instore) *
              </label>
              <input type="text" id="employement" name="employement" />
            </div>
          </div>

 
         <h5 className="career-form-heading">
          <span>Qualification</span>
        </h5>
        <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="degree" className="label">
              Degree *
              </label>
              <input type="text" id="degree" name="degree" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="majors" className="label">
              Majors *
              </label>
              <input type="text" id="majors" name="majors" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="qualification" className="label">
              Qualification Year *
              </label>
              <input type="text" id="qualification" name="qualification" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="tutionPlace" className="label">
              Place of Tution *
              </label>
              <input type="text" id="tutionPlace" name="tutionPlace" />
            </div>
          </div>
       
        <h5 className="career-form-heading">
          <BiStar />
          <span>Experience</span>
        </h5>
        <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="degree" className="label">
              Total Years of Experience *
              </label>
              <input type="text" id="experience" name="experience" />
            </div>
            <div className="left-row2 career-input">
              <label htmlFor="position" className="label">
Recent Position *
              </label>
              <input type="text" id="position" name="position" />
            </div>
          </div>
          <div className="career-form-div">
            <div className="left-row2 career-input">
              <label htmlFor="company" className="label">
              Recent Company *
              </label>
              <input type="text" id="company" name="company" />
            </div>
            </div>

      <div className="container para-form career-form ">
        <h4 className="careers-heading">Applicant agreement</h4>
        <p className="agreement">
        I certify that all information provided in this application is true and complete. I understand that any false information or omission may disqualify me from further consideration for employment and may result in my dismissal If discovered at a later date. I authorize and agree to cooperate in a thorough investigation of all statements made herein and other matters relating to my background and qualification. I understand that any investigation conducted may include a request for employment, educational and criminal history. I authorize any person, school, current and former employer, consumer reporting agency and any other organization or agency to provide information relevant to such investigation and I hereby release all persons and corporations requesting or supplying information pursuant to such investigation from all liability or responsibility to me for doing so. I understand that I have the right to make a written request within a reasonable period of time for complete disclosure of the nature and scope of any investigation. I further authorize any physician or hospital to release any information which may be necessary to determine my ability to perform the job for which I am being considered or any future job in the event that I am hired. I UNDERSTAND THAT THIS APPLICATION OR SUBSEQUENT EMPLOYMENT DOES NOT CREATE A CONTRACT OF EMPLOYMENT NOR GUARANTEE EMPLOYMENT FOR ANY DEFINITE PERIOD OF TIME.
        </p>
        <p className="checkbox">
          <input type="checkbox" />
          <span>
          Sign up now to avail exclusive rewards & discounts
          </span>
        </p>
        <div className="career-btn">
        <button type="submit">
          APPLY
        </button>
        </div>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default Careers;
