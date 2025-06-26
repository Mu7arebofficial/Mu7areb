import React from 'react'
import HeaderContent from './headerContent/HeaderContent'
import Navpar from './Navpar'
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container pt-3">
          <div className="row">
            <div className="col-7">
              <p style={{ fontStyle: 'italic' }} className=" header-title text-start text-white">
                We are here to <strong style={{ color: 'white' }}>fight</strong> not to sell
              </p>
            </div>
            <div className="col-5">
              <p style={{ fontStyle: 'italic' }} className="header-title text-end text-white">
                Hotline:{' '}
                <a className="text-w" href="tel:+201021761272">
                  +01070870800
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="text-white m-0"></hr>
        <HeaderContent />
        <Navpar />
      </header>
    </>
  )
}

export default Header
