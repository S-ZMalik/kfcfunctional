import React from 'react'

function BhookCards({img, heading, para}) {
  return (
    <div className="margin-bhook">
   <div className="container grid grid-two bhook-edu-card">
    <div className="bhook-img">
        <img src={img} alt={para} />
    </div>
    <div className="bhook-text">
        <h1 className="card-heading">{heading}</h1>
        <p className="bhook-para">{para}</p>
        </div>
   </div>
   </div>
  )
}

export default BhookCards