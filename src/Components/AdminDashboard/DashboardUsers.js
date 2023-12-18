import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'

const DashboardUsers = () => {
    const token = useSelector(state => state.cart.token)
    const [numberPage , setNumberPage] = useState(1)
    const {data , isLoading} = useFetch(`users?page=${numberPage}&limit=10` , "GET" , null ,token)
    return (
        <div className='dashboardUsers'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >Client Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Role</th>
                        <th scope='col'>options</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading ?
                    data?.data?.users.map((ele) => {
                        return  <tr key={ele?._id} className='dash-product'>
                            <td>{`${ele?.firstName} ${ele?.lastName}`}</td>
                            <td>{ele?.email}</td>
                            <td><img src={ele?.avatar} alt='' /></td>
                            <td className={`${ele.role ==='ADMIN' ? 'text-danger' : 'text-primary'} bold`}>{ele?.role}</td>
                            <td>
                                {ele.role === "USER" &&<button className='btn btn-danger me-3'>Delete</button>}
                                {ele.role === "USER" &&<button className='btn btn-primary me-3'>update Role</button>}
                            </td>
                            </tr>
                    }) : 'Loading'  }            
                </tbody>
            </table>
            <div className='dash-buttons d-flex justify-content-center align-items-center mb-4'>
                <button type="button" disabled={numberPage === 1 ? true : false} className="btn btn-danger me-2" onClick={() => setNumberPage(numberPage - 1)}>Prievius</button>
                <button type="button" disabled={numberPage === 2 ? true : false} className="btn btn-primary"onClick={() => setNumberPage(numberPage + 1)}>Next</button>
            </div>
        </div>
    )
}

export default DashboardUsers