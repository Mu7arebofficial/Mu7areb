import { ToastContainer, toast } from 'react-toastify'
import Card from '../card/Card'
import useFetch from '../hooks/useFetch'
import Loader from '../Loaders/Loader'

const ProductsList = ({ subCategory, category, searchKey, priceFilter, priceOrder }) => {
  console.log(priceFilter, 'priceFilter')
  const { data, isLoading, err } = useFetch(
    searchKey ? `products/search/${searchKey}` : `products`,
    'GET',
    null,
    null,
    priceFilter,
    priceOrder,
    subCategory || null,
    category || null,
  )
  // const {data , isLoading , err } = useFetch(searchKey ? `products/search/${searchKey}` : `products`, "GET", null,null,priceFilter,priceOrder,category || null , subCategory || null)
  const length = data?.data?.products.length
  return (
    <>
      <div className="col-12 mt-4">
        {category && <h2 className="p-4 text-center">{category}</h2>}
        <div className="trending-clothes-content  row  d-flex justify-content-around ">
          {err && 'somthing went wrong'}
          {isLoading ? (
            <Loader />
          ) : (
            data?.data?.products?.map(item => {
              return (
                <Card
                  onClick={() => toast.success('adding Item Successfully')}
                  key={item._id}
                  class="col-6 col-md-4 col-lg-3 col-xl-2 pt-2 "
                  item={item}
                />
              )
            })
          )}
          {length === 0 && <p className="message length">There is no items with these filterations</p>}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
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

export default ProductsList
