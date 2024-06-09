import React, { useContext, useState } from 'react'
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { everyday1, snacks1 } from '../assets'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { RiDrinks2Fill } from 'react-icons/ri'
import { beveragesData, drinkData } from '../api/exploreData'
import ModelContext from '../context/ModelContext'
import { ExploreContext } from '../context/ExplorMenuContext'

function MainModel() {
    const {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);

    const {addItemsData, setAddItemsData, addIncrement, decreamentFunc, deleteObject, addItemsFunc, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice , gst} = useContext(ExploreContext);

    const [boolean1, setboolean1] = useState(true);
    const [boolean2, setboolean2] = useState(false);
    const [boolean3, setboolean3] = useState(false);

    

    function booleanFunc1() {
        setboolean1(!boolean1);
        setboolean2(false);
        setboolean3(false);
    }
    function booleanFunc2() {
        setboolean1(false);
        setboolean2(!boolean2);
        setboolean3(false);
    }
    function booleanFunc3() {
        setboolean1(false);
        setboolean2(false);
        setboolean3(!boolean3);
    }
    

    function modelClose() {
        const html = document.querySelectorAll('html')[0];
        html.style.overflow = 'scroll';
        setClose(false);
    } 


    function addModelItemFunc(item) {
        addItemsFunc(item);
        modelClose();
    }

    function increModelItem() {
        setModelItem(
            (prev) => ({...prev, quantity: prev.quantity + 1})
        );
    }
    function decreModelItem() {
        setModelItem(
           prev => modelItem.quantity === 1 ? ({...prev, quantity: prev.quantity}) :
           ({...prev, quantity: prev.quantity - 1 })
        )
    } 

    
  return (
    <div className="main-model-bg">
        <div className="main-model">
            <div className="main-three-borders">
               <span></span>
               <span></span>
               <span></span>
            </div>
            <div className="main-model-header" onClick={modelClose}>
            <IoCloseOutline/>
            </div>
            <div className="grid-wala-div">
                <div className="additional-items">
                  <div className="option-item">
                     <div className="additional-item-item-header" onClick={booleanFunc1}>
                        <h5 className="addtional-item-heading">
                            <span>
                            Choose an option
                            </span>
                            <i>
                            <MdOutlineArrowDropDown className='addtional-icon'/> 
                            {/* <MdArrowDropUp/> */}
                            </i>
                        </h5>
                     </div>

                     { boolean1 && <div className="add-pd additional-item-body">
                        <h6 className="item-check">
                            <div className="item-check-left">
                                <input type="radio" />
                                <span>
                                    {modelItem.title} 
                                    {/* item name */}
                                </span>
                            </div>
                            <div className="item-check-right">
                                +Rs: {modelItem.price}
                                {/* item price */}
                            </div>
                        </h6>
                     </div>}

                  </div>

                  <div className="drinks option-item">
                  <div className="additional-item-item-header" onClick={booleanFunc2}>
                  <h5 className="addtional-item-heading">
                            <span>
                            Drink
                            </span>
                            <i>
                            <span className='optional-class'>
                               <span className='optional-span'>
                                (Optional)
                                </span> 
                              <span>
                             <MdOutlineArrowDropDown className='addtional-icon'/> 
                             </span>
                             </span>
                             </i>
                            {/* <MdArrowDropUp/> */}
                        </h5>
                     </div>

                     {boolean2 &&
                        drinkData.map((item) => (
                            <div className="drinks-item-body additional-item-body" key={item.id}>
                      <div className="add-item-option-left">
                        <figure className="option-img">
                            <img src={item.img} alt="choti image" />
                        </figure>
                        <h6 className="text-option">
                            <span className="text-top-option">
                                {item.title}
                            </span>
                            <span className="text-option-price">
                                (+ {item.price})
                            </span>
                        </h6>
                      </div>
                      <div className="add-item-option-right">
                        <button className='option-right-btn' onClick={() => addItemsFunc(item)}>
                            ADD
                        </button>
                      </div>
                     </div>
                        ))
                     }

                  </div>
                  
                  <div className="add-ones option-item">
                     <div className="additional-item-item-header" onClick={booleanFunc3}>
                        <h5 className="addtional-item-heading">
                            <span>
                            ADD ONS
                            </span>
                                <i>
                            <span>
                            <span className='optional-span'>
                                (Optional)
                            </span> 
                            <span>
                             <MdOutlineArrowDropDown className='addtional-icon'/> 
                             </span>
                             </span>
                            {/* <MdArrowDropUp/> */}
                            </i>
                        </h5>
                     </div>

                     {boolean3 && 
                        beveragesData.map((item) => (
                            <div className="drinks-item-body additional-item-body" key={item.id}>
                      <div className="add-item-option-left">
                        <figure className="option-img">
                            <img src={item.img} alt="choti image" />
                        </figure>
                        <h6 className="text-option">
                            <span className="text-top-option">
                                {item.title}
                            </span>
                            <span className="text-option-price">
                                (+ {item.price})
                            </span>
                        </h6>
                      </div>
                      <div className="add-item-option-right">
                        <button className='option-right-btn' onClick={() => addItemsFunc(item)}>
                            ADD
                        </button>
                      </div>
                     </div>
                        ))
                     }

                  </div>
                </div>



                <div className="additional-main-item">
                    <figure className="add-main-img">
                        <img src={modelItem.img} alt="image of modal item" />
                    </figure>
                    <div className="add-main-text-detail">
                        <h3 className="add-main-heading">
                            {modelItem.title}
                        </h3>
                        <p className="add-main-para">
                        {modelItem.desc}
                        </p>
                        <div className="incre-decre-btn">
                            <span>
                                <FaMinus className='bucket-btn-icon' onClick={() => decreModelItem(modelItem)}/>
                            </span>
                            <span className='modal-num'>{modelItem.quantity}</span>
                            <span><FaPlus className='bucket-btn-icon' onClick={() => increModelItem(modelItem)}/></span>
                        </div>
                        <div className="add-main-btn" onClick={() => addModelItemFunc(modelItem)}>
                            <span className="add-main-price">
                                Rs {modelItem.price}
                            </span>
                            <span className="add-text">
                                ADD TO BUCKET
                            </span>
                            <i>
                            <IoIosArrowDroprightCircle/>
                            </i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MainModel