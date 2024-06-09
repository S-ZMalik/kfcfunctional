import React, { useContext, useState } from "react";
import Header from "../components/Header.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";
import SideBar from "../components/SideBar.jsx";
import exploreMainData, { beveragesData, boxesData, comboData, everdayData, midnightData, promotionData, sharingData } from "../api/exploreData.js";
import ItemCart from "../components/ItemCart.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsDatabaseExclamation } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { bucketPageImg } from "../assets/index.js";
import MainMenuFixedBar from "../components/MainMenuFixedBar.jsx";
import ExploreMenuMain from "../components/ExploreMenuMain.jsx";
import ExploreHeader from "../components/ExploreHeader.jsx";
import { ExploreContext } from "../context/ExplorMenuContext.jsx";
import MainModel from "../components/MainModel.jsx";
import ModelContext from "../context/ModelContext.jsx";

function ExploreMenu() {
  const { active, setActive, disp, setDisplay, diplayChange } =
    useContext(SidebarContext);

  const [exploreItems, setExploreItems] = useState(everdayData);
  const [comboItems, setcomboItems] = useState(comboData);
  const [promotionItems, setPromotionItems] = useState(promotionData);
  const [boxesItems, setBoxesItems] = useState(boxesData);
  const [sharingItems, setSharingItems] = useState(sharingData);
  const [beveragesItems, setBeveragesItems] = useState(beveragesData);
  const [midnightItems, setmidnightItems] = useState(midnightData);


  //  add items array data
  const {addItemsData, setAddItemsData} = useContext(ExploreContext);
  const  {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);

    const currentHour = new Date().getHours();
   

  function wishFunc(id) {
    const updatedData = exploreItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setExploreItems(updatedData);
  }

  function wishFunc1(id) {
    const updatedData = comboItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setcomboItems(updatedData);
  }

  function wishFunc2(id) {
    const updatedData = promotionItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setPromotionItems(updatedData);
  }

  function wishFunc3(id) {
    const updatedData = boxesItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setBoxesItems(updatedData);
  }

  function wishFunc4(id) {
    const updatedData = sharingItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setSharingItems(updatedData);
  }

  function wishFunc5(id) {
    const updatedData = beveragesItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setBeveragesItems(updatedData);
  }

  function wishFunc6(id) {
    const updatedData = midnightItems.map((data) =>
      data.id === id ? { ...data, addWish: !data.addWish } : data
    );
    setmidnightItems(updatedData);
  }

  


  return (
    <>
      {disp || (
        <SideBar
          disp={disp}
          setDisplay={setDisplay}
          diplayChange={diplayChange}
          active={active}
          setActive={setActive}
        />
      )}
{/* ======================modal======== */}
      {close && <MainModel/>}
      
      <Header
        disp={disp}
        setDisplay={setDisplay}
        active={active}
        setActive={setActive}
      />

      <ExploreHeader/>

      <div className="explore-component container">

        <div className="explore-menu-div">
        <ExploreMenuMain exploreItems={exploreItems} wishFunc={wishFunc} heading={"EVERYDAY VALUE"} id={"section1"}  addItemsData={addItemsData} setAddItemsData={setAddItemsData}/>
        <ExploreMenuMain exploreItems={comboItems} wishFunc={wishFunc1} heading={"ALA-CARTE-&-COMBOS"} id={"section2"}/>
        <ExploreMenuMain exploreItems={promotionItems} wishFunc={wishFunc2} heading={"PROMOTION"} id={"section3"}/>
        <ExploreMenuMain exploreItems={boxesItems} wishFunc={wishFunc3} heading={"SIGNATURE-BOXES"} id={"section4"}/>
        <ExploreMenuMain exploreItems={sharingItems} wishFunc={wishFunc4} heading={"SHARING"} id={"section5"}/>
        <ExploreMenuMain exploreItems={beveragesItems} wishFunc={wishFunc5} heading={"SNACKS-&-BEVERAGES"} id={"section6"}/>
        <ExploreMenuMain exploreItems={midnightItems} wishFunc={wishFunc6} heading={"MIDNIGHT (START AT 12 AM)"} className={`${currentHour > 6 && currentHour < 18 && "midnight-opacity"}`} id={"section7"}/>
        </div>


        <MainMenuFixedBar addItemsData={addItemsData} setAddItemsData={setAddItemsData}/>
      </div>
    </>
  );
}

//     <div className="top-deals-card">
//     <div className="card-header">
//     <div className="red-border">
//          <span></span>
//          <span></span>
//          <span></span>
//      </div>
//      <div className="heart-shape">
//         <span onClick={() => wishFunc(data.id)}> {data.addWish ? <FaRegHeart/> : <FaHeart/>}</span>
//      </div>
//     </div>
//     <div className="card-main">
//     <img src={data.img} alt={data.title} />
//     <h4 className="deal-heading">
//       {data.heading}
//     </h4>
//     <p className="deal-title">
//      {data.title.slice(0, 100)}...
//     </p>
//     </div>
//     <div className="card-footer">
//      <h5 className="deal-price">
//          <small>Rs</small> {data.price}
//      </h5>
//      <button className="deal-btn">
//          <span><HiPlus/></span>
//          <span>ADD TO BUCKET</span>
//      </button>
//     </div>
//  </div>
export default ExploreMenu;
