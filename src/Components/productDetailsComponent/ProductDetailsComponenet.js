import React, { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add } from '../RTK/Slices/CartSlice'
import { ToastContainer , toast } from 'react-toastify'


const ProductDetailsCombonent = ({item }) => {
    const [quantaty , setQuantaty] = useState(1)
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(Add({...item , amount: quantaty , quantaty: quantaty }))
        toast.success('Adding Items successfully')
    }
    const [activeSize , setActiveSize] = useState()
    console.log(item)
    return (
        <>
            <div className='right col-lg-6 col-12'>
                <div className='details'>
                    <h2 className='mb-3'>{item?.name} ({item?.kind})</h2>
                    <span className='productPrice text-primary bold fs-2 d-block  mb-3'>{item?.price}$</span>
                    {/* <div className='bold h2 mb-3'> Brand: <span className='text-primary'>{item?.kind}</span></div> */}
                    <h3>Description</h3>
                    <p>{item?.description}</p>
                </div>
                <div className='sizesButtons mb-3 d-flex'>
                    <button disabled={item?.sizes[0]?.XXL < 1} onClick={() => setActiveSize("XXL")} className={`me-2 ${activeSize === "XXL" && "active"}`}>XXL</button>
                    <button disabled={item?.sizes[0]?.XL  < 1} onClick={() => setActiveSize("XL")} className={`me-2 ${activeSize === "XL" && "active"}`}>XL</button>
                    <button disabled={item?.sizes[0]?.L  < 1} onClick={() => setActiveSize("L")} className={`me-2 ${activeSize === "L" && "active"}`}>L</button>
                    <button disabled={item?.sizes[0]?.M  < 1} onClick={() => setActiveSize("M")} className={`me-2 ${activeSize === "M" && "active"}`}>M</button>
                    <button disabled={item?.sizes[0]?.S < 1} onClick={() => setActiveSize("S")} className={`me-2 ${activeSize === "S" && "active"}`}>S</button>
                </div>
                <div className='controlButtons mb-4'>
                    <button className='btn btn-outline-secondary' onClick={() => setQuantaty(quantaty === 1 ? 1 : quantaty - 1)}>-</button>
                    <span className='p-3'>{quantaty}</span>
                    <button className='btn btn-outline-secondary' onClick={() => setQuantaty(quantaty + 1)}>+</button>
                </div>
                <button onClick={addToCartHandler} className='btn btn-dark mb-3 btn-lg '><MdAddShoppingCart className='me-2 fs-4'  />Add to CART</button>
                
                <div className='mb-3'><Link className='fs-5 text-dark'><AiOutlineHeart className='me-2' />Add to wishlist</Link></div>
                <hr />
                <div className=' headersDescription text-secondary'>
                    <h5>Description</h5>
                    <h5>ADDITIONAL INFORMATION</h5>
                    <h5>FAQ</h5>                    
                </div>
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

export default ProductDetailsCombonent