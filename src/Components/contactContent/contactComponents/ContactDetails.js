import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiMessage3Fill} from 'react-icons/ri'

const ContactDetails = () => {
    return (
        <div className='col-md-5 col-12  contact-text mt-4 p-5 d-flex flex-column align-items-start justify-content-start'>
            <h3>Get in touch With us</h3>
            <div className='d-flex mt-4'>
                <AiFillHome className='me-2 h5' />
                <p>Zifta city , mohafzet elgharbia Egypt</p>
            </div>
            <div className='d-flex mt-4'>
                <BsFillTelephoneFill className='me-2 h5' />
                <p>(+20)1021761272</p>
            </div>
            <div className='d-flex mt-4'>
                <RiMessage3Fill className='me-2 h5' />
                <p>elsheta474@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactDetails