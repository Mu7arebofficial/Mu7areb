import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductsOrder = () => {
  const { id } = useParams('id')
  const token = useSelector(state => state.cart.token)
  const { data, isLoading } = useFetch(`orders/${id}`, 'GET', null, token)
  console.log(data?.data?.choosenOrder?.order)
  return (
    <div className="productsOrder p-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Id</th>
            <th scope="col">Image</th>
            <th scope="col">Amount</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading
            ? data?.data?.choosenOrder?.order?.map(ele => {
                return (
                  <tr key={ele?._id} className="dash-product">
                    <td>{ele?.name}</td>
                    <td>{ele?._id}</td>
                    <td>
                      <img src={ele?.images[0]?.url} alt="as" />
                    </td>
                    <td>{ele?.amount}</td>
                    <td>{ele?.price}</td>
                  </tr>
                )
              })
            : 'Loading'}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsOrder
