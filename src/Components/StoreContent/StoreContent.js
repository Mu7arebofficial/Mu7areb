import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductsList from './productsList'
const StoreContent = props => {
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const [priceFilter, setPriceFilter] = useState(null)
  const [priceOrder, setPriceOrder] = useState(null)
  const params = useParams()
  const { data, isLoading, err } = useFetch(`categories`, 'GET')
  const searchKey = props.Key
  const getPrice = e => {
    setPriceFilter(e.target.value)
  }
  const getPriceOrder = e => {
    setPriceOrder(e.target.value)
  }
  return (
    <div className="Products row p-0 m-0 pb-5  ">
      <div className="ProductsSettings col-3   text-start">
        <div className="filterItem">
          <h4 className="pb-2">Brands</h4>
          {err && 'somthing went wrong'}
          {isLoading
            ? 'Loading'
            : data?.data?.categories.map(item => {
                return (
                  <div className="mb-2 sub-cat" key={item._id}>
                    <input
                      name="cat"
                      id={item._id}
                      type="radio"
                      value={item.name}
                      onClick={() => setSelectedSubCategory(item.name)}
                      className="me-2"
                    />
                    <label htmlFor={item._id}>{item.name}</label>
                  </div>
                )
              })}
        </div>
        {/* <div className='filterItem'>
                        <h4 className='pt-5 pb-2'>Filter by  price</h4>
                        <span>0</span>
                        <input type='range' min='0' max='1000' step='10' onChange={getPrice}  />
                        <span>{priceFilter}</span> 
                    </div> */}
        <div className="filterItem pt-4">
          <h4 className="pb-2">Sort by</h4>
          <div className="d-flex">
            <input className="me-2" type="radio" name="ass" id="asc" value="asc" onClick={getPriceOrder} />
            <label className="w-auto" htmlFor="asc">
              Lowest
            </label>
          </div>
          <div className="mt-2 d-flex">
            <input className="me-2" type="radio" name="ass" id="desc" value="desc" onClick={getPriceOrder} />
            <label className="w-auto" htmlFor="desc">
              Highest
            </label>
          </div>
        </div>
      </div>
      <ProductsList
        searchKey={searchKey ? searchKey : ''}
        subCategory={selectedSubCategory}
        category={params.category}
        priceFilter={priceFilter}
        priceOrder={priceOrder}
      />
    </div>
  )
}

export default StoreContent
