import React from 'react'
import Category from './sectionThreeContent/Category'
const SectionThree = () => {
    return (
        <>
            <section className='sectionThree bg-white pt-5 pb-5'>
                <h2 className='text-center pb-3'>Categories</h2>
                <div className='container bg-white rounded p-4'>
                    <div className='categories'>
                        <div className='row'>
                            
                            <Category to='/products/Kids' title='Kids'  imageSrc='https://res.cloudinary.com/dhlgqavcx/image/upload/v1702819515/pexels-photo-6437836_wu58dp.jpg' isBorderRight={true} />
                            <Category to='/products/Women' title='Women'  imageSrc='https://res.cloudinary.com/dhlgqavcx/image/upload/v1702819515/pexels-photo-794062_fhukfm.webp' isBorderRight={true} />
                            <Category to='/products/Men' title='Men' imageSrc='https://res.cloudinary.com/dhlgqavcx/image/upload/v1702819516/pexels-mart-production-7668398_1_x1qmoz.jpg' isBorderRight={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree