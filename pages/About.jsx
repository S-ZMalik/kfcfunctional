import React, { useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { about1, kfcbiglogo, rightarrow } from "../assets/index.js";
import { aboutColData, aboutFact, basketData } from "../api/data.js";
import TopHeading from "../components/TopHeading.jsx";
import SideBar from "../components/SideBar.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";

function About() {
  const {active, setActive, disp, setDisplay, diplayChange} = useContext(SidebarContext);
  
  return (
    <>
      {disp || <SideBar disp={disp} setDisplay={setDisplay} diplayChange={diplayChange} active={active} setActive={setActive}/>}
    <Header disp={disp} setDisplay={setDisplay} active={active} setActive={setActive}/>
        <TopHeading heading={'About Us'}/>
      <div className="about-page">
        <div className="container">
        <div className="first-box grid grid-two container">
          <div className="text-col">
            <p>
            KFC entered Pakistan in 1997 and since then, it’s been a journey
            full of excitement and Finger Lickin’ goodness! The first KFC
            restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and
            now our Finger Lickin’ Chicken is available in 37 cities with over
            128 restaurants! Being the most loved fast food chain in Pakistan,
            KFC leaves no stone unturned to provide its customers the most
            delicious chicken and an excellent dining experience.
            </p>
          </div>
          <div className="head-text">
            <h4>
              WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
              INGREDIENTS FROM TRUSTED SUPPLIERS
            </h4>
          </div>
        </div>
        </div>

        <div className="container">
        <div className="second-box grid grid-two">
          <div className="second-box-img">
            <img src={about1} alt="kfc" />
          </div>
          <div className="second-text">
            <h4>History</h4>
            <p>
              It all started with Colonel Harland Sanders, the man who convinced
              the world by saying “We do chicken right!” Sanders took a great
              deal of time perfecting his iconic secret recipe of 11 herbs and
              spices, a legacy he’s brought to the world through KFC’s 10,000+
              restaurants. Starting from outside of his gas station in Korbin,
              Kentucky to being a globally recognized face, we owe our success
              to the Colonel’s hard work and passion for sharing his love for
              chicken with the world!
            </p>
          </div>
        </div>
        </div>

        <div className="basket-section container">
          <h4 className="basket-heading">The Story of World’s Best Chicken</h4>
          <div className="main-basket ab-m">
            {basketData.map((basket) => (
          <div className="basket-img-contain" key={basket.id}>
              <div className="about-basket">
                <span>
                  <h4>{basket.year}</h4>
                  <p>{basket.para}</p>
                </span>
              </div>
              <img src={rightarrow} alt="right-arrow" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-fact-bg ab-m">
        <div className="about-fact-extra-div container">
        <h4 className="fact-heading">Fast Facts about KFC Pakistan</h4>
          <div className="about-fact grid grid-four container">
            {aboutFact.map((fact) => (
              <div className="fact-col" key={fact.id}>
                <img src={fact.img} alt="" />
                <h4>{fact.year}</h4>
                <p>{fact.para}</p>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="bhook-container container">
          <div className="bhook-col grid grid-one ">
            <img src={kfcbiglogo} alt="biglogo" />
            <p>
            is KFC’s pledge to give back to society. Over the years we have made it our mission to spread the message of hope, bringing positive change in the lives of people and providing better living standards. Mitao Bhook strengthens the community on the pillars of Education, Inclusion & Diversity.
            </p>
          </div>
        </div>

        <div className="big-col-container grid grid-two container">
          {
            aboutColData.map((big) => (
            <div className="big-col" key={big.id}>
              <img src={big.img} alt="bigdata" />
              <p>
                {big.para}
              </p>
             </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
