import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx';
import SideBar from '../components/SideBar.jsx';
import TopHeading from '../components/TopHeading.jsx';

function Privacy() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  return (
    <>
     {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
    <div className="privacy-container">
    <TopHeading heading={"Privacy Policy"} />
    <div className="container privacy-main-div">
      <h4 className="privacy-heading-top">
      <span>KFC CORPORATION PRIVACY POLICY — YOUR PRIVACY RIGHTS</span>
      <span>EFFECTIVE DATE: JUNE 9, 2014</span>
      </h4>

      <div className="privacy-gap-extra-div">
      <div className="privacy-div">
        <h5 className="privacy-heading">
        THIS PRIVACY POLICY APPLIES TO THE SITES
        </h5>
        <p className="privacy-para">
        This Policy describes how we treat personal information both online and offline. This includes on our websites. It also includes in phone or email interactions you have with us.
        </p>
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        WE COLLECT INFORMATION FROM AND ABOUT YOU
        </h5>
        <ul className="privacy-ul">
          <li className="privacy-li">
          Contact information. For example, we might collect your name and street address. We might also collect your phone number or email address.
          </li>
          <li className="privacy-li">
          Payment and billing information. For example, we collect your credit card number and zip code when you buy one of our products. Information you submit or post. If you post content, apply for a job, or respond to a survey, we will collect the information you provide to us.
          </li>
          <li className="privacy-li">
          Demographic information. We may collect information about our services you like or products you buy. We might collect this as part of a survey, for example.
          </li>
          <li className="privacy-li">
          Other information. If you use our website, we may collect information about your computer location or the browser you're using. We might look at what site you came from, or what site you visit when you leave us.
          </li>
        </ul>
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
        </h5>
        <ul className="privacy-ul">
          <li className="privacy-li">
          We use information to respond to your requests or questions. For example, we might use your information to confirm your registration for a program or contest, or fulfill prizes or premiums in a promotion. We may use your friend's email address if you send them features on our site.
          </li>
          <li className="privacy-li">
          We use information to improve our products and services. We might use your information to customize your experience with us. We may use your information to make our website and products better.
          </li>
          <li className="privacy-li">
          We use information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.
          </li>
          <li className="privacy-li">
          We use information for security purposes. We may use information to protect our company, our customers, or our websites. For example, in the event of a breach, we may use your contact information to contact you about that incident.
          </li>
          <li className="privacy-li">
          We use information for marketing purposes. For example, we might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. To learn about your choices for these communications, read the choices section below.
          </li>
          <li className="privacy-li">
          We use information to send you transactional communications. For example, we might send you emails about a purchase you made with us. We might also contact you about this policy or our website terms.
          </li>
          <li className="privacy-li">
          We use information as otherwise permitted by law.
          </li>
        </ul>
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        YOU HAVE CERTAIN CHOICES ABOUT HOW WE USE YOUR INFORMATION
        </h5>
        <ul className="privacy-ul">
          <li className="privacy-li">
          You can opt out of receiving our marketing emails. To stop receiving our promotional emails, send a request to customercare@kfcpakistan.com or follow the instructions in any promotional message you get from us. It may take about ten (10) days to process your request. Don't worry! Even if you opt out of getting marketing messages, we will still be sure to send you transactional messages. For example, we may still contact you about your orders.
          </li>
          <li className="privacy-li">
          You can control if we share information with third parties for their marketing purposes. To opt out of having us share your information with third parties for their promotional purposes, click here .
          </li>
        </ul>
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        YOU CAN GET YOUR ACCOUNT INFORMATION UPDATED OR DELETED
        </h5>
        <ul className="privacy-ul">
          <li className="privacy-li">
          Any information that you want us to change or delete, for instance, your email address, can be requested by you. These requested changes will be made only after your consent, and we will update you regarding them. For any such requests you can always contact us on our support email i.e. customercare@kfcpakistan.com.
          </li>
          <li className="privacy-li">
            <span>
            If you want to delete your Facebook social login account from KFC Web & Apps, you can remove your information by following these steps:
            </span>
            <ol>
              <li>Go to your Facebook Account’s Setting & Privacy. Click “Settings”.</li>
              <li>
              Look for “Apps and Websites” and you will see all of the apps and websites you linked with your Facebook.
              </li>
              <li>
              Search and Click “KFC” in the search bar.
              </li>
              <li>
              Scroll and click “Remove”.
              </li>
              <li>
              Congratulations, you have successfully removed your app activities and data from the KFC platform.
              </li>
            </ol>
          </li>
          <li className='privacy-li'>
          Once your account has been deleted after your approval, you will lose all the information associated with that account e.g. Addresses, Past Orders.
          </li>
          </ul>  
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
        </h5>
        <ul className="privacy-ul">
          <li className="privacy-li">
          Our sites are meant for adults. We do not knowingly collect personally identifiable information from children under 13 without permission from a parent or guardian. If you are a parent or legal guardian and think your child under 13 has given us information, you can email us here . You can also write to us at the address listed at the end of this policy. Please mark your inquiries "COPPA Information Request."
          </li>
          <li className="privacy-li">
          Parents, you can also learn more about how to protect children's privacy online here .
          </li>
        </ul>
      </div>

      <div className="privacy-div">
        <h5 className="privacy-heading">
        WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
        </h5>
        <p className="privacy-para">
        From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates
        </p>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Privacy