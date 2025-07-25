import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { Add, Remove, Delete, Reset, ChooseSize } from '../RTK/Slices/CartSlice'
// import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CheckoutForm from '../Forms/CheckoutForm'

const Cart = props => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.items)
  const isLogin = useSelector(state => state.cart.isLogin)
  const userData = useSelector(state => state.cart.userData)
  const [payNow, setPayNow] = useState(false)
  const [activeSize, setActiveSize] = useState()

  const totalPrice = () => {
    let total = 0
    products.forEach(e => {
      total += e?.price * e?.amount
    })
    return total.toFixed(2)
  }
  const paymentHandler = () => {
    if (products.length > 0) {
      setPayNow(true)
    } else {
      toast.error('Your Cart is empty')
    }
  }
  const chooseSizeHandler = (e, item) => {
    for (let i = 0; i < 5; i++) {
      e.target.parentElement.children[i].classList.remove('active')
    }
    e.target.classList.add('active')
    dispatch(ChooseSize({ ...item, size: e.target.innerHTML }))
  }
  console.log(products)
  return (
    <div className={`cart position-absolute ${props.class} `}>
      <button className="exit btn btn-primary d-block ms-auto" onClick={() => props.setViewCart(false)}>
        x
      </button>
      <h2 className="mt-3 mb-3">Cart</h2>
      {products.length > 0 ? (
        products.map(item => {
          return (
            <>
              <div key={item?._id} className="cart-content d-flex gap-10 align-items-start">
                <img
                  className="productImageCart"
                  loading="lazy"
                  src={item?.images[0]?.url}
                  alt="productImageCart"
                />
                <div className="cart-text p-1  ">
                  <h5 className="fs-6  mb-3">{item?.name}</h5>
                  {/* <p>{item?.description}</p> */}
                  <div className="d-flex justify-content-around align-items-center text-primary ">
                    <button
                      className=" btn btn-primary text-white"
                      onClick={() => dispatch(Remove(item)) && toast.success('Removing Item successfully')}>
                      -
                    </button>
                    <div>
                      <span>{item?.amount}&nbsp;&nbsp;</span>
                      <span>x&nbsp;&nbsp;</span>
                      <span>EGP&nbsp;{item?.price}</span>
                    </div>
                    <button
                      className="btn btn-primary text-white"
                      onClick={() =>
                        dispatch(Add({ ...item, quantaty: 1 })) && toast.success('adding Item successfully')
                      }>
                      +
                    </button>
                  </div>
                  <div className="sizesButtons mt-3 ms-2 d-flex">
                    <button
                      onClick={e => {
                        chooseSizeHandler(e, item)
                      }}
                      disabled={item?.sizes[0]?.XXL < 1}
                      className={`me-2 `}>
                      XXL
                    </button>
                    <button
                      onClick={e => {
                        chooseSizeHandler(e, item)
                      }}
                      disabled={item?.sizes[0]?.XL < 1}
                      className={`me-2 `}>
                      XL
                    </button>
                    <button
                      onClick={e => {
                        chooseSizeHandler(e, item)
                      }}
                      disabled={item?.sizes[0]?.L < 1}
                      className={`me-2 `}>
                      L
                    </button>
                    <button
                      onClick={e => {
                        chooseSizeHandler(e, item)
                      }}
                      disabled={item?.sizes[0]?.M < 1}
                      className={`me-2 `}>
                      M
                    </button>
                    <button
                      onClick={e => {
                        chooseSizeHandler(e, item)
                      }}
                      disabled={item?.sizes[0]?.S < 1}
                      className={`me-2 `}>
                      S
                    </button>
                  </div>
                </div>
                <MdDelete
                  onClick={() => dispatch(Delete(item)) && toast.success('Deletting Items successfully')}
                  className=" c-pointer text-danger fs-4  "
                />
              </div>
            </>
          )
        })
      ) : (
        <p>No Items Found</p>
      )}

      <div className="totalPrice d-flex pt-2">
        <h4>SubTotal:&nbsp; &nbsp;</h4>
        <p className="fs-5 text-primary">{totalPrice()}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary  " onClick={paymentHandler}>
          PROCEED TO CHECKOUT
        </button>

        <span className="c-pointer" onClick={() => dispatch(Reset())}>
          Reset Cart
        </span>
      </div>
      {payNow && <CheckoutForm user={userData} setExit={setPayNow} totalPrice={totalPrice()} />}
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

export default Cart
