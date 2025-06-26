import { ToastContainer, toast } from 'react-toastify'
import useFetch from '../hooks/useFetch'
import Card from '../card/Card'

const SectionFour = () => {
  const { data, isLoading, err } = useFetch('products/trending', 'GET')

  return (
    <>
      <div className="sectionFour container pb-5">
        <h2 className="text-center pb-5">Trending Products</h2>
        <div className="trending-clothes-content row d-flex flex-wrap justify-content-around ">
          {err && 'somthing went wrong'}
          {isLoading
            ? 'Loading...'
            : data?.data?.products.map(product => {
                return (
                  <Card
                    onClick={() => toast.success('adding item successfully')}
                    key={product._id}
                    item={product}
                    class=" col-5 col-sm-5  col-md-5 col-lg-3 col-xl-3  pt-2 "
                  />
                )
              })}
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

export default SectionFour
