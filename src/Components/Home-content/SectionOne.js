import React from 'react'
import AlternateBanner from './sectionOneContent/AlternateBanner'
import Banners from './sectionOneContent/Banners'

const SectionOne = () => {
    return (
        <>
            <section className='sectionOne container-xxl  pb-5 pt-5'>
                <div className='contaianer'>
                    <div className='banners row   '>
                        <div className=' main-banner col-12 col-sm-6 position-relative'>
                            <Banners />
                            <div className='main-banner-content position-absolute'>
                                <h5 className='text-danger'>specialprice for pros</h5>
                                <h4 className='fs-1'>Special Sale</h4>
                                <p className='lh-lg'>From $99.00 to $999.00. <br /> for All kind. -_-*</p>
                                <button className='btn btn-secondary btn-outline-secondar'>BUY NOW</button>
                            </div>
                        </div>  
                        <div className='alternate-banners col-12 col-sm-6  d-flex justify-content-around algin-items-center'>
                            <AlternateBanner offer='BEST SALE' title='Men clothes' firstLine='From $19.00 to' secondLine=' $99.99 .' imageSrc='https://res.cloudinary.com/dhlgqavcx/image/upload/v1702820807/pexels-mart-production-9558577_nkxnx0.jpg'   />
                            <AlternateBanner offer='15% off' title='For shoes' firstLine='shop the latest piece' secondLine='styles and colors' imageSrc='https://res.cloudinary.com/dhlgqavcx/image/upload/v1702821125/pexels-arthur-ogleznev-1102777_1_pg93uk.jpg'  />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne