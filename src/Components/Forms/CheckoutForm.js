import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { Reset } from '../RTK/Slices/CartSlice'
const CheckoutForm = (props) => {
    const dispatch = useDispatch()
    const locationRef = useRef()
    const postCodeRef = useRef()
    const nameRef = useRef()
    const products = useSelector(state => state.cart.items)
    const [orderIsDone , setOrderIsDone] = useState(false)
    const formHandler = async (e) => {
        e.preventDefault() 
        try {
            toast.info('Sending your order')
            await axios.post("https://e-commerce-hh3m.onrender.com/api/orders" , {
                information: {
                                name: nameRef.current.value,
                                street: locationRef.current.value,
                                postcode: postCodeRef.current.value,
                                email: props?.user?.email
                            },
                            order: products
            })
            setOrderIsDone(true)
                toast.success('Succcessfully sent your order')
        }catch(err) {
            toast.error('Somthing went wrong please try again')
        }
    }
    return (
        <>
        {
            orderIsDone ? 
            <div className='checkout-msg'>
                <div className='recieptProdcuts'>
                    {products && products.map((ele) => {
                        return <div key={ele._id} className='recieptProduct d-flex justify-content-between'>
                            <p>{ele.name}</p>
                            <span className='text-danger bold'>${ele.price}</span>
                        </div>
                    })}
                </div>
                <p className='text-primary successMsg bold'>Successfully Sent your Orders we will message u soon</p> 
                <button className='btn btn-primary checkout-buttons d-flex ' onClick={()=> props.setExit(false)+  dispatch(Reset())}>Close</button>
            </div>
            
            : 
            <>
            
            <form className='checkout-form' onSubmit={formHandler}>
                <h1 className='mb-3'>CheckoutForm</h1>
                <label className='mb-3 h5'>Your Name</label>
                <input ref={nameRef} className='w-100 p-2 mb-4' type='text' />
                <label className='mb-3 h5'>Your Email</label>
                <input disabled={true} value={props?.user?.email} className='w-100 p-2 mb-4' type='email'  />
                <label className='mb-3 h5'>Your postCode</label>
                <input ref={postCodeRef} className='w-100 p-2 mb-4' type='number' required  />
                <label className='mb-3 h5'>Your Location</label>
                <textarea ref={locationRef} className='w-100 p-4 mb-4' type='text' placeholder='Your Location' required ></textarea>
                <div className='checkout-buttons d-flex '>
                    <button type='submit' className='btn btn-danger  '>Send Order</button>
                    <button onClick={() => props.setExit(false)}  className='btn btn-danger  me-3'>Close</button>
                </div>
            </form>   
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
        }

        
        </>
    )
}

export default CheckoutForm