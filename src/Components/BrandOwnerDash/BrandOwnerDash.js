
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Loader from '../Loaders/Loader'
import {  useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import UpdateQuantityComponent from './UpdateQuantityComponent';
const customStyles = {
	rows: {
		style: {
			minHeight: '72px',
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px',
			paddingRight: '8px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px',
			paddingRight: '8px',
		},
	},
};
const BrandOwnerDash = () => {
    const brandName = useParams('brandName').brandName  
    const token = useSelector(state => state.cart.token)
    let {data , isLoading } = useFetch(`brand/${brandName}` , "GET","" , token)
    const [UpdateQuantityView , setUpdateQuantityView] = useState()
    const columns = [
        {
            name: "Id",
            selector: row => row._id,
            sortable: true,
    
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
    
        },
        {
            name: "Image",
            selector: row => <img src={row.images[0].url} alt='peoductImage' />,
            sortable: true,
    
        },
        {
            name: "XXL",
            selector: row => row.sizes[0].XXL ,
            sortable: true,
    
        },
        {
            name: "XL",
            selector: row => row.sizes[0].XL ,
            sortable: true,
    
        },
        {
            name: "L",
            selector: row => row.sizes[0].L ,
            sortable: true,
    
        },
        {
            name: "M",
            selector: row => row.sizes[0].M ,
            sortable: true,
    
        },
        {
            name: "S",
            selector: row => row.sizes[0].S ,
            sortable: true,
    
        },
       
        {
            name: "UpdateQuantity",
            selector: row => <button onClick={() => setUpdateQuantityView({
                sizes: row.sizes,
                id: row._id
            })} className='quantityButton'>Update</button>,
            sortable: true,
            style: {
                textAlign: 'center'
            }
    
        },
        
    ]
    return ( 
        <>
        <div className='dash-products brandOwnersProdutcs mt-5 mb-5 '>
             { !isLoading ? <DataTable
            columns={columns}
            data={data?.data?.products}
            pagination
            customStyles={customStyles}
            selectableRows
            >
        </DataTable> : <Loader />}
        
        <div className='dash-customization'>
        </div>
   
        </div>

                {UpdateQuantityView && <UpdateQuantityComponent setUpdateQuantityView={setUpdateQuantityView} sizes={UpdateQuantityView} />}
                </>
    )
}

export default BrandOwnerDash