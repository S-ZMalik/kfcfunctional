import React, { useContext, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { dealData } from '../api/data';
import ItemCart from './ItemCart';
import ModelContext from '../context/ModelContext';
import { ExploreContext } from '../context/ExplorMenuContext';

function TopDeals() {
   let [topDealsData, setTopDealsData] = useState(dealData);

   const {modelItem, setModelItem, addInModel, close, setClose} = useContext(ModelContext);

    function wishFunc(id) {
     const updatedData = topDealsData.map((data) => (
        data.id === id ? {...data, addWish: !data.addWish} : data
     ));
     setTopDealsData(updatedData);
    }

  return (
    <div className='top-deals-section container'>
    <h2 className="main-heading">
    TOP DEALS    
    </h2>
    <section className="top-deals">
       {
        topDealsData.map((data) => (
            <ItemCart data={data} key={data.id} wishFunc={wishFunc}/>
        ))
       }
    </section>
    </div>
  )
}

export default TopDeals