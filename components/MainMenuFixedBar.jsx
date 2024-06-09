import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { bucketPageImg, sharing1 } from "../assets";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ExploreContext } from "../context/ExplorMenuContext";

function MainMenuFixedBar({ addItemsData , setAddItemsData}) {

  // const [totalQuantity, setTotalQuantity] = useState(0);
  const {addIncrement, decreamentFunc, deleteObject, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice} = useContext(ExploreContext);

  useEffect(() => {
    const total = addItemsData.reduce((acc, item) => item.quantity + acc, 0);
    setTotalQuantity(total);
  }, [addItemsData]);


  return (
    <div className="explore-component-sticky-div">
      <div className="sticky-container">
        <div className="sticky-header">
          <h4 className="sticky-heading">{!addItemsData.length ? 'Order Details' : `${totalQuantity} Item Added`}</h4>
        </div>

        {!addItemsData.length ? (
          <div className="sticky-body">
            <figure className="sicky-img">
              <img src={bucketPageImg} alt="" />
            </figure>
            <h5 className="sticky-body-heading">
              You haven't added any items in bucket yet
            </h5>
          </div>
        ) : (
          addItemsData.map((item) => (
            <div className="explore-sticky-bar-items body-items" key={item.id}>
              <div className="left-exlore-text">
                <figure>
                  <img src={item.img} alt="product-img" />
                </figure>
                <div className="sticky-exlore-text">
                  <h5 className="title-sticky">{item.title}</h5>
                  <p className="title-2">({item.title})</p>
                  <div className="sticky-btns">
                   {
                    item.quantity === 1 ? <RiDeleteBin6Line className="sticky-btn-icon" onClick={() => deleteObject(item.id)}/> 
                    : <FaMinus className="sticky-btn-icon" onClick={() => decreamentFunc(item.id, item.price)}/>
                   }
                    
                    <span className="quantity">{item.quantity}</span>
                    <FaPlus className="sticky-btn-icon" onClick={() => addIncrement(item.id, item)}/>
                  </div>
                </div>
              </div>

              <div className="price-explore-sticky">Rs {item.price}</div>
            </div>
          ))
        )}
      </div>

      <NavLink to={"/bucket"} className="sticky-footer main-link">
        <div className="left-footer">
          <h5 className="item sticky-footer-heading">
            <span>{totalQuantity} Item</span>|
            <span className="footer-price sticky-footer-heading">Rs {totalPrice}</span>
          </h5>
        </div>

        <div className="right-footer">
          <h5 className="sticky-footer-heading">
            <span>View Bucket</span>
            <i>
              <IoIosArrowDroprightCircle />
            </i>
          </h5>
        </div>
      </NavLink>
    </div>
  );
}

export default MainMenuFixedBar;
