import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
const StatusOrder = () => {
  const [status, setStatus] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const statusHandler = e => {
    setStatus(e.target.id)
  }
  const token = useSelector(state => state.cart.token)
  const updateStatusFun = async () => {
    if (status) {
      await axios.post(
        `https://e-commerce-hh3m.onrender.com/api/orders/updateStatus/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      )
      navigate('/admin/orders')
    } else {
      return
    }
  }
  return (
    <div className="statusMsg">
      <div className="statusMsgContent p-4 ">
        <h4>Status Update</h4>
        <div className="mt-5">
          <div className="d-flex justify-content-start align-items-baseline bold text-success">
            <input type="radio" onChange={statusHandler} className="me-2 ms-2" name="cat" id="open" />
            <label className=" mt-2" htmlFor="open">
              open
            </label>
            <br />
          </div>
          <div className="d-flex justify-content-start align-items-baseline text-warning bold">
            <input type="radio" onChange={statusHandler} className="me-2 ms-2" name="cat" id="pending" />
            <label className=" mt-2" htmlFor="pending">
              pending
            </label>
            <br />
          </div>
          <div className="d-flex justify-content-start align-items-baseline text-danger bold">
            <input type="radio" onChange={statusHandler} className="me-2 ms-2" name="cat" id="closed" />
            <label className=" mt-2" htmlFor="closed">
              closed
            </label>
            <br />
          </div>
        </div>
        <button className="btn btn-primary statusButton" onClick={updateStatusFun}>
          Send
        </button>
      </div>
    </div>
  )
}

export default StatusOrder
