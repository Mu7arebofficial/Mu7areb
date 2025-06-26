import {
  AiFillApple,
  AiFillFacebook,
  AiOutlineApple,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai'
import logo from '../../images/logo solid.png'
import { Link } from 'react-router-dom'
import { FaTiktok } from 'react-icons/fa'

const SecondFooter = () => {
  return (
    <>
      <footer className="second-footer row justify-content-between  align-items-center text-white">
        <div className="col-lg-4 col-sm-6 d-flex flex-column   ">
          {/* <h2 className='mb-4'>Contact Us</h2> */}
          <p>
            <img src={logo} alt="logo" />
          </p>
          <p>No. 212 october , elmotamez , 12 Egypt</p>
          <p>+01070870800</p>
          <p>+01067608843</p>
          <p>hassanelrakhawy2001@gmail.com</p>
          <ul className="social d-flex  align-items-center">
            <li>
              <Link to="https://www.facebook.com/share/14GfDjX2C8c/?mibextid=wwXIfr">
                <AiFillFacebook />
              </Link>
            </li>

            <li>
              <Link to="https://www.instagram.com/mu7areb.eg?igsh=MWJsdHJqeTJweDl4dg%3D%3D&utm_source=qr">
                <AiFillInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.tiktok.com/@mu7areb.eg?_t=ZS-8xJ8CklzdXk&_r=1">
                <FaTiktok />
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-6">
          <h2 className="mb-4 " style={{ fontStyle: 'italic' }}>
            Mu7areb
          </h2>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <h2 className="mb-4">Our App</h2>
          <p>
            Dowenload our app and get extra 15% Discount on <br />
            your first Order..!
          </p>
          <div className="alt-social">
            <div className="bg-white">
              <AiOutlineApple />
              <div>
                <span>Get it on</span>
                <h6>Google Play</h6>
              </div>
            </div>
            <div className="">
              <AiFillApple />
              <div>
                <span>Dowenload on the</span>
                <h6>App store</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white mt-5" />
      </footer>
    </>
  )
}

export default SecondFooter
