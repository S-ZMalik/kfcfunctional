import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import ModelContext from '../context/ModelContext';
import MainModel from './MainModel';
import { ExploreContext } from '../context/ExplorMenuContext';

function ItemCart({data, wishFunc}) {
  const {addItemsData, setAddItemsData, addIncrement, decreamentFunc, deleteObject, addItemsFunc, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice , gst} = useContext(ExploreContext);
  const {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);
    
  return (
    <>
    <div className="top-deals-card">
            <div className="card-header">
            <div className="red-border">
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
             <div className="heart-shape">
                <span> {data.addWish ? <FaRegHeart onClick={() => wishFunc(data.id)}/> : <FaHeart onClick={() => wishFunc(data.id)}/>}</span>
             </div>
            </div>
            <div className="card-main" onClick={() => addInModel(data)}>
            <img src={data.img} alt={data.title} />
            <h4 className="deal-heading">
              {data.title}
            </h4>
            <p className="deal-title">
             {data.desc.slice(0, 100)}...
            </p>
            </div>
            <div className="card-footer">
             <h5 className="deal-price">
                 <small>Rs</small> {data.price}
             </h5>
             <div className="deal-btn" onClick={() => addItemsFunc(data)}>
                 {/* <span><HiPlus/></span> */}
                 <button className='home-add-btn'>+ ADD TO BUCKET</button>
             </div>
            </div>
         </div>
         </>
  )
}

export default ItemCart