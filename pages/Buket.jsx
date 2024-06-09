import React, { useContext, useState } from "react";
import Header from "../components/Header.jsx";
import { SidebarContext } from "../context/SidebarContext.jsx";
import SideBar from "../components/SideBar.jsx";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDroprightCircle } from "react-icons/io";
import { bucketPageImg, sharing1 } from "../assets/index.js";
import { bucketData } from "../api/data.js";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import MainMenuFixedBar from "../components/MainMenuFixedBar.jsx";
import { ExploreContext } from "../context/ExplorMenuContext.jsx";

function Buket() {
  const {addItemsData, setAddItemsData, addIncrement, decreamentFunc, deleteObject, addItemsFunc, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, gst} = useContext(ExploreContext);

  const { active, setActive, disp, setDisplay, diplayChange } =
    useContext(SidebarContext);

  // const [price, setPrice] = useState(0);
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
      <Header
        disp={disp}
        setDisplay={setDisplay}
        active={active}
        setActive={setActive}
      />

      <div className="container bucket-container">
        <div className="buket-left-container">
            <div className="bucket-items-container">
              <h4 className="bucket-header-heading">
                <NavLink to="/explore-menu" className="main-link">
                  <IoIosArrowBack className="header-icon"/>
                </NavLink>
                Items From Your Cart
              </h4>

{!addItemsData.length ?      
       <div className="bucket-body-empty-div">
              <div className="bucket-body">
              <figure className="bucket-page-img">
                <img src={bucketPageImg} alt="buket main img" />
              </figure>
              <h5 className="buket-body-heading">
                You haven’t added any items in bucket yet
              </h5>
              <NavLink to={"/explore-menu"} className="main-link">
                <div className="bucket-main-btn">
                  <button style={{cursor: "pointer"}}>EXPLORE MENU</button>
                </div>
              </NavLink>
            </div>
            </div>
:
              addItemsData.map((item) => (
                <div className="bucket-bar-items body-items" key={item.id}>
                <div className="bucket-items-left">
                  <figure>
                    <img src={item.img} alt="product-img" />
                  </figure>
                  <div className="bucket-items-text">
                    <h5 className="bucket-items-title">
                      <span className="bucket-title">{item.title}</span>
                      <span className="bucket-title-2">({item.title})</span>
                    </h5>

                    <div className="bucket-btns">
                      {item.quantity === 1 ?
                        addItemsData.length === 1 ? 
                        <NavLink to={"/explore-menu"} className="main-link">
                          <RiDeleteBin6Line className="bucket-btn-icon" onClick={() => deleteObject(item.id)}/>
                        </NavLink> : 
                        <RiDeleteBin6Line className="bucket-btn-icon" onClick={() => deleteObject(item.id)} />
                      :<FaMinus  className="bucket-btn-icon" onClick={() => decreamentFunc(item.id)}/>
                      }
                      <span className="bucket-quantity">{item.quantity}</span>
                      <FaPlus className="bucket-btn-icon" onClick={() => addIncrement(item.id)}/>
                    </div>
                  </div>
                </div>

                <div className="bucket-item-price white-space">Rs {item.price}</div>
              </div>
              ))
}              
            </div>

          <div className="bucket-small-items-cart-container">
            <h4 className="bucket-like-heading">You may also like</h4>
            <div className="bucket-more-items-container">
            {bucketData.map((data) => (
              <div className="bucket-small-cart" key={data.id}>
                <figure className="bucket-cart-img-div">
                <img
                  src={data.img}
                  alt={data.title}
                  className="small-cart-img"
                />
                </figure>
                <h6 className="small-cart-title">{data.title}</h6>
                <div className="small-price-bucket">
                  <span className="small-price">RS. {data.price}</span>
                  <button onClick={() => addItemsFunc(data)}>+ ADD TO BUCKET</button>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

{/* right div=================================== */}
{/* <div className="bucket-right-div class">
<div className="bucekt-right-extra-div
">
        <div className="bucket-right-section">
        <div className="explore-component-sticky-div">
      <div className="sticky-container">
        <div className="sticky-header">
          <h4 className="sticky-heading">Order Details</h4>
        </div>

        
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

        </div> */}


        {/* </div> */}



        {/* right div=================================== */}

        <div className="bucket-right-section">
        <div className="explore-component-sticky-div">
      <div className="bucket-right-container">
        <div className="sticky-header">
          <h4 className="sticky-heading">Order Details</h4>
        </div>
        {/*  body of bucket right container ============= */}
        <div className="total-main">
            <div className="textarea">
              <div className="total-main-header">
              <h5 className="total-main-small-heading">
                Special Instructions (Optional)
              </h5>
              <form action="" className="bucket-textarea">
                <textarea rows={4}
                  name="instruction"
                  id="instruction"
                  placeholder="Add Cooknk Delivery Instructions (Optional)"
                ></textarea>
              </form>
              </div>
            </div>
            <div className="total-total-area">
              <table>
                <thead className="total-area-heading">
                  <tr className="thead">
                    <th>Your Order</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sub Total:</td>
                    <td>Rs {totalPrice}</td>
                  </tr>
                  <tr>
                    <td>GST (16%):</td>
                    <td>Rs {gst}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>RS {totalPrice}</td>
                  </tr>
                </tfoot>
              </table>
            </div>


            <div className="bucket-wala-footer">
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

          </div>

        
      </div>
        

     
    </div>

        </div>


        </div>


         
      
      {/* </div> */}
    </>
  );
}

export default Buket;
