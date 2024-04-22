import {AiFillApple , AiFillFacebook , AiOutlineApple  ,AiOutlineTwitter , AiFillInstagram  ,AiFillYoutube} from 'react-icons/ai'
const SecondFooter = () => {
    return (
        <>
            <footer className='second-footer row justify-content-start  align-items-start text-white'>
                <div className='col-lg-4 col-sm-6 d-flex flex-column   '>
                    <h2 className='mb-4'>Contact Us</h2>
                    <p>Loocal hub</p>
                    <p>No. 212 october , elmotamez , 12  Egypt</p>
                    <p>+201021761272</p>
                    <p>+201212061116</p>
                    <p>localhub@gmail.com</p>
                    <ul className='social d-flex  align-items-center'>
                        <li>
                            <AiFillFacebook  />
                        </li>
                        <li>
                            <AiOutlineTwitter />
                        </li>
                        <li>
                            <AiFillInstagram />
                        </li>
                        <li>
                            <AiFillYoutube />
                        </li>
                    </ul>
                </div>
                
                
                <div className='col-lg-4 col-sm-6'>
                    <h2 className='mb-4'>Quick Links</h2>
                    <p>Accessories</p>
                    <p>Laptops</p>
                    <p>Headphones</p>
                    <p>Smart Watches</p>
                    <p>Tablets</p>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <h2 className='mb-4'>Our App</h2>
                    <p>Dowenload our app and get extra 15% Discount on <br />
                    your first Order..!</p>
                    <div className='alt-social'>
                        <div className='bg-white'>
                            <AiOutlineApple  />
                            <div>
                                <span>Get it on</span>
                                <h6>Google Play</h6>
                            </div>
                        </div>                        
                        <div className=''>
                            <AiFillApple />
                            <div>
                                <span>Dowenload on the</span>
                                <h6>App store</h6>
                            </div>
                        </div>                        
                    </div>

                </div>
                <hr className='text-white mt-5' />
            </footer>
            
        </>
    )
}

export default SecondFooter