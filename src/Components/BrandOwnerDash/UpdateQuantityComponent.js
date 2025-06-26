import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

const UpdateQuantityComponent = ({ sizes, setUpdateQuantityView }) => {
  const [size, setSize] = useState('XXL')
  const [sizeQuantity, setSizeQuantity] = useState(1)
  const token = useSelector(state => state.cart.token)
  const sendQuantity = async () => {
    const res = await axios.post(
      `https://e-commerce-hh3m.onrender.com/api/brand/updateQuantity/${sizes.id}?size=${size}&quantity=${sizeQuantity}`,
      '',
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )
    console.log()
    if (res.data.status === 'success') {
      toast.success('adding Successfully')
      window.location.reload()
    }
  }
  const handleQuantity = e => {
    setSize(e.target.value)
  }
  return (
    <>
      <div className="layout" onClick={() => setUpdateQuantityView()}></div>
      <div className="updateSizes d-flex justify-content-between align-items-center p-5">
        <select onChange={handleQuantity}>
          <option selected value="XXL">
            XXL
          </option>
          <option value="XL">XL</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="S">S</option>
        </select>
        <input onChange={e => setSizeQuantity(e.target.value)} type="number" min={0} />
        <button className="saveButton" onClick={sendQuantity}>
          Save
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default UpdateQuantityComponent
