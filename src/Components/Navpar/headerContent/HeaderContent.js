import React, { useState } from 'react'
import {AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import HeaderLinks from './HeaderLinks'
import { useSelector } from 'react-redux'
import logo from '../../../images/x logog.png'
const HeaderContent = () => {
    const navigate = useNavigate()
    const [viewCart , setViewCart] = useState(false)
    const products = useSelector(state => state.cart.items)

    const searchInputHandler = (e) => {
        navigate(`/store/search/${e.target.value}`)
        
    }
    const totalPrice = () => {
        let total = 0
        products.forEach(e => {
            total += e?.price * e?.amount
        });;
        return total.toFixed();
    }
    return (
        <>
        <div className='container pt-3'>
            <div className='row'>
                <div className=' header-title col-lg-4 col-md-4  col-xl-2 col-4 text-center'>
                    <h2 className='text-white'><Link to='/' className='text-white'><img src={logo} alt='logo' /></Link></h2>
                </div>
                <div  className=' header-search col-lg-7 col-md-7 col-7 col-xl-4 text-start position-relative '>
                    <input className='p-3 w-100' placeholder='Search Product Here' name='search' type='text' onChange={searchInputHandler} />
                    <div className='rounded-start position-absolute end-0 top-40 p-2 ps-3 pe-3 bg-warning h-100 d-flex justify-content-center align-items-center rounded '>
                        <AiOutlineSearch  className='text-black fs-3 fw-bold  '/>
                    </div>
                </div>
                <div style={{cursor: 'pointer'}} className=' header-upper-links col-lg-12 col-md-12 col-xl-5  d-flex justify-content-around align-items-center'>
                    <HeaderLinks />

                    <div className='d-flex flex-row  align-items-center gap-10 text-white  ' onClick={() => setViewCart(!viewCart)} style={{cursor: 'pointer'}}>
                            <AiOutlineShoppingCart className='text-white fs-1 fw-bold me-2'   />
                            <div className=' cart-price d-flex  flex-end '>
                                <span className='bg-white text-black text-center fw-bold rounded '>{products.length}</span>   
                                <p className='m-0'>{totalPrice()}$</p>
                            </div>                        
                        </div>
                </div>
            </div>
        </div>  
        <Cart class={viewCart ? 'viewCart' : null} setViewCart={setViewCart}  />     
        </>

    )
}

export default HeaderContent