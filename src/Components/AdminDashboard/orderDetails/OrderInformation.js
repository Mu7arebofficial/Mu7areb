import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const OrderInformation = () => {
  const { id } = useParams('id')
  const token = useSelector(state => state.cart.token)
  const { data, isLoading } = useFetch(`orders/${id}`, 'GET', null, token)
  return (
    <div className="productsOrder p-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Client Name</th>
            <th scope="col">email</th>
            <th scope="col">postCode</th>
            <th scope="col">street</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading ? (
            <tr className="dash-product">
              <td>{data?.data?.choosenOrder?.information?.name}</td>
              <td>{data?.data?.choosenOrder?.information?.email}</td>
              <td>{data?.data?.choosenOrder?.information?.postcode}</td>
              <td>{data?.data?.choosenOrder?.information?.street}</td>
            </tr>
          ) : (
            'Loading'
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrderInformation
