import React, { useState } from 'react'
import ProductDetailsCombonent from '../Components/productDetailsComponent/ProductDetailsComponenet'
import useFetch from '../Components/hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loaders/Loader'
const ProductDetails = () => {
        const [image , setImage] = useState(0)
        const params = useParams()
        const {data , isLoading  } = useFetch(`products/${params.id}`, "GET")
    return (
        <>
        { !isLoading ? 
        <div className='productDetails m-0 pb-5 pt-5 row gap-20'>
            <div className='left col-lg-6 col-12  row '>
                <div className='imagesContainer  col-2 d-flex flex-column '>
                    <img loading='lazy' src={`${data?.data?.choosenProduct?.images[0]?.url}`} alt='product_Image1' onClick={() => setImage(0)} />
                    <img loading='lazy' src={`${data?.data?.choosenProduct?.images[1]?.url}`} alt='product_Image2'onClick={() => setImage(1)} />
                </div>
                <div className='productImage col-10'>
                    <img loading='lazy' src={`${data?.data?.choosenProduct?.images[image]?.url}`} alt='Product_Image' />
                </div>
            </div>
            <ProductDetailsCombonent item={data?.data?.choosenProduct}   />
        </div>
        : <Loader />
        }
        </>
    )
}

export default ProductDetails