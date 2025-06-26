import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { AiTwotoneEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const DashboardProduct = () => {
  const [numberPage, setNumberPage] = useState(1)
  let { data, isLoading } = useFetch(`products?page=${numberPage}&limit=10`, 'GET')
  const navigate = useNavigate()
  const token = useSelector(state => state.cart.token)
  return (
    <div className="dash-products">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading
            ? data?.data?.products.map(ele => {
                return (
                  <tr key={ele?._id} className="dash-product">
                    <td>{ele?.name}</td>
                    <td>
                      <img src={ele?.images[0]?.url} alt="as" />
                    </td>
                    <td>${ele?.price}</td>
                    <td>
                      <Link to={`${ele?._id}`}>
                        <AiTwotoneEdit className="me-1 text-primary h5" />
                      </Link>{' '}
                      <AiFillDelete
                        onClick={() => {
                          axios.delete(`https://e-commerce-hh3m.onrender.com/api/products/${ele?._id}`, {
                            headers: {
                              Authorization: `bearer ${token}`,
                            },
                          })
                          toast.success('deleted Item Successfully')
                          navigate('/admin/home')
                        }}
                        className="h5 text-danger"
                      />
                    </td>
                  </tr>
                )
              })
            : 'Loading'}
        </tbody>
      </table>
      <div className="dash-buttons d-flex justify-content-center align-items-center mb-4">
        <button
          type="button"
          disabled={numberPage === 1 ? true : false}
          className="btn btn-danger me-2"
          onClick={() => setNumberPage(numberPage - 1)}
        >
          Prievius
        </button>
        <button
          type="button"
          disabled={numberPage === 5 ? true : false}
          className="btn btn-primary"
          onClick={() => setNumberPage(numberPage + 1)}
        >
          Next
        </button>
      </div>
      <div className="dash-customization"></div>
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
    </div>
  )
}

export default DashboardProduct
