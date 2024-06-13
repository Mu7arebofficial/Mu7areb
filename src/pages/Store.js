import React from 'react'
import StoreContent from '../Components/StoreContent/StoreContent'
import { Link, useParams } from 'react-router-dom'

const Store = () => {
    const params = useParams()
    const key = params.search
    return (
        <>
        <div className='catNav'>
            {/* <ul className='storeCategories'>
                <Link className='text-dark' to='/products/Men'>
                    <li>Men</li>
                </Link>
                <Link className='text-dark'  to='/products/Women'>
                    <li>Women</li>
                </Link>
                <Link className='text-dark'  to='/products/Kids'>
                    <li>Kids</li>
                </Link>
            </ul>             */}
        </div>
        <StoreContent Key={key} />
        </>
        
    )
}

export default Store