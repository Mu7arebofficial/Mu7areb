import React from 'react'
const Banners = () => {
  return (
    <div id="banners" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#banners" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#banners" data-bs-slide-to="1"></li>
      </ol>
      <div className="carousel-inner  rounded">
        <div className="carousel-item active">
          <img
            loading="eager"
            src="https://res.cloudinary.com/dhlgqavcx/image/upload/v1702818570/main-banner_aavy6v.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item ">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dhlgqavcx/image/upload/v1702818333/main-banner-1_iejits.jpg"
            alt="Second slide"
          />
        </div>
      </div>
    </div>
  )
}

export default Banners
