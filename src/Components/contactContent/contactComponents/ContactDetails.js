import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiMessage3Fill} from 'react-icons/ri'

const ContactDetails = () => {
    return (
        <div className='col-md-5 col-12  contact-text mt-4 p-5 d-flex flex-column align-items-start justify-content-start'>
            <h3>Get in touch With us</h3>
            <div className='d-flex mt-4'>
                <AiFillHome className='me-2 h5' />
                <p>No. 212 october , elmotamez , 12 Egypt</p>
            </div>
            <div className='d-flex mt-4'>
                <BsFillTelephoneFill className='me-2 h5' />
                <div className='d-flex'>
                <p className='me-2'>(+20)1021761272</p>,
                <p className='ms-2'>(+20)1212061116</p>
                </div>
            </div>
           
            <div className='d-flex mt-4'>
                <RiMessage3Fill className='me-2 h5' />
                <p>localhub@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactDetails