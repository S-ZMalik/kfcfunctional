import React from 'react'
import { bhookData } from '../api/data'

function EducationCart() {
  return (
    <div className="grid grid-three bhook-three">
    {bhookData.map((bhook, index) => (
      <div className="img-card" key={index}>
        <img src={bhook} alt="img-bhook" />
      </div>
    ))}
  </div>
  )
}

export default EducationCart