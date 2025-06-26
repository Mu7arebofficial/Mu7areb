import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsCart4, BsFillCartCheckFill } from 'react-icons/bs'

const InfoBox = props => {
  return (
    <div className="col-3 dash-box p-2">
      <p className="h4">{props.title}</p>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="h5">${props.value}</span>
        {props.title === 'Earning' && <AiFillDollarCircle className="h3 dash-icon1" />}
        {props.title === 'Products' && <BsCart4 className="h3 dash-icon2" />}
        {props.title === 'Orders' && <BsFillCartCheckFill className="h3 dash-icon3" />}
      </div>
    </div>
  )
}

export default InfoBox
