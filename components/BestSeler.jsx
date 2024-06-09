import React from 'react'
import { sellerData } from '../api/data'

function BestSeler() {
  return (
    <div className='container seller-container'>
    <h2 className="main-heading">
        BEST SELLER
    </h2>
    <section className='seller '>
     <div className="seller-comp">
      {
        sellerData.map((sell) => (
            <div className="seller-card" key={sell.id}>
            <div className="red-border">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h5 className='seller-heading'>
                {sell.heading}
            </h5>
            <h5 className="seller-price">
                <small>Rs:</small>{sell.price}
            </h5>
            <figure className='seller-figure'>
            <img src={sell.img} alt={sell.heading} />
            </figure>
           </div>
        ))
      }
     </div>
    </section>
    </div>
  )
}

export default BestSeler