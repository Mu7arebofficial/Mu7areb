import axios from 'axios'
import { useEffect, useState } from 'react'


const  useFetch =  (url , method , body , token , priceFilter , priceMethod , category , kind) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await axios.request({
                    url: `https://e-commerce-hh3m.onrender.com/api/${url}`,
                    method: method, 
                    headers: {
                        "Authorization": token &&`bearer ${token}`
                    },
                    params: {
                        category: category,
                        kind: kind,
                        priceFilter: priceFilter,
                        order: priceMethod
                    },
                    body: body
                })
                setData(res.data)
                setIsLoading(false) 
            }catch(err) {
                setError(true)
            }
        }

        fetchData()
        
    }, [url , priceFilter , priceMethod , category , kind])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch