import React from 'react'
import { Link } from 'react-router-dom'

const DashLinks = () => {
    return (
    <ul className='dashboard-links ps-0'>
            <li className='p-4 ps-3 h5'><Link to='/admin/home'>Home</Link></li>
            <li className='p-4 ps-3 h5'><Link to='/admin/products'>View Products</Link></li>
            <li className='p-4 ps-3 h5'><Link to='/admin/addProducts'>Add Product</Link></li>
            <li className='p-4 ps-3 h5'><Link to='/admin/orders'>Show Orders</Link></li>
            <li className='p-4 ps-3 h5'><Link to='/admin/orders/users'>Show Users</Link></li>
    </ul>
    )
}

export default DashLinks