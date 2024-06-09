import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ExploreContext } from "../context/ExplorMenuContext";
import ModelContext from "../context/ModelContext";

function ExploreMenuMain({
  exploreItems,
  wishFunc,
  heading,
  className,
  id
}) {
  const {addItemsData, setAddItemsData, addItemsFunc} = useContext(ExploreContext);
  const {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);
  
  return (
    <div className={`everyday-value ${className && className}`}>
      <div className="explore-component-main-heading" id={id}>
        <h2 className="explore-component-heading">{heading}</h2>
        <div className="border-div"></div>
      </div>

      <div className="explore-menu-items">
        {exploreItems.map((data) => (
          <div className="explore-container" key={data.id}>
            <div
              className="exlore-container-header"
              onClick={() => wishFunc(data.id)}
            >
              {data.addWish ? (
                <FaRegHeart className="icon" />
              ) : (
                <FaHeart className="red-icon" />
              )}
            </div>
            <figure className="explore-container-img" onClick={() => addInModel(data)}>
              <img src={data.img} alt={data.title} />
            </figure>
            <div className="explore-text-area">
              <h5 className="title-item">{data.title}</h5>
              <p className="desc-item">{data.desc.slice(0, 65)}...</p>
            </div>
            <div className="explore-container-footer">
              <h5 className="explore-container-price">Rs {data.price}</h5>
              <button
                className="explore-container-btn"
                onClick={() => addItemsFunc(data)}
              >
                + ADD TO BUCKET
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenuMain;
