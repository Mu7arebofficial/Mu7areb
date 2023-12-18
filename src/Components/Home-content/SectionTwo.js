import React from 'react'
import {AiFillCar ,AiFillPhone  ,AiFillCreditCard , AiFillGift  } from 'react-icons/ai'
import Service from './sectionTwoContent/Service'
const SectionTwo = () => {
    return (
        <>
            <section className='sectionTwo pt-5'>
                <div className='container '>
                    <div className=' services  d-flex justify-content-center align-items-center'>
                        <Service icon={<AiFillCar className='fs-1' />} title='Affordable Prices' paragraf='From all orders over $100' />
                        <Service icon={<AiFillGift  className='fs-2' />} title='Daily Surprise Offers' paragraf='Save up to 25% off' />
                        <Service icon={<AiFillPhone  className='fs-2' />} title='Support 24/7' paragraf='Shop with an expert' />
                        <Service icon={<span className='fs-2' >$</span>} title='Affordable Prices' paragraf='Get Factory direct price' />
                        <Service icon={<AiFillCreditCard className='fs-2' />} title='secure Payment' paragraf='100% Protected Payment' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default SectionTwo