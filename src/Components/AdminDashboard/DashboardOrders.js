import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const DashboardOrders = () => {
    const token = useSelector(state => state.cart.token)
    const [numberPage , setNumberPage] = useState(1)
    const {data , isLoading} = useFetch(`orders?page=${numberPage}&limit=10` , "GET" , null, token)
    const totalPrice = (array) => {
        let result = 0
        array.map((ele) => {
            return result += ele.price
        })
        return result
    }
    return (
    <>
        <div>
        <table className="table">
        <thead>
            <tr>
                <th scope="col" >Client Name</th>
                <th scope="col">Email</th>
                <th scope="col" className='text-center'>Status</th>
                <th scope="col" className='text-center'>Options</th>
                <th scope='col'>Details</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {!isLoading ?
            data?.data?.orders.map((ele) => {
                return  <tr key={ele?._id} className='dash-product'>
                    <td>{ele?.information?.name}</td>
                    <td>{ele?.information?.email}</td>
                    <td className={`text-center bold ${ele?.status === "pending" && "text-warning" } ${ele?.status === "closed" ? "text-danger" : "text-success"}`}>{ele?.status}</td>
                    <td className='d-flex justify-content-center align-items-center'>
                        <Link to={`products/${ele._id}`}><button className='btn btn-primary me-2'>show products</button></Link>
                        <Link to={`${ele._id}`}><button className='btn btn-danger'>update status</button></Link>
                    </td>
                    <td>
                        <Link to={`information/${ele._id}`}>
                            <button className='btn btn-dark'>details</button>
                        </Link>
                    </td>
                    <td>${totalPrice(ele.order)}</td>
                    </tr>
            }) : 'Loading'  }            
        </tbody>
        </table>
        <div className='dash-buttons d-flex justify-content-center align-items-center mb-4'>
                <button type="button" disabled={numberPage === 1 ? true : false} className="btn btn-danger me-2" onClick={() => setNumberPage(numberPage - 1)}>Prievius</button>
                <button type="button" disabled={numberPage === 1 ? true : false} className="btn btn-primary"onClick={() => setNumberPage(numberPage + 1)}>Next</button>
            </div>
        </div>
    </>
    )
}

export default DashboardOrders