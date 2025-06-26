import React from 'react'

const Verticals = () => {
  return (
    <div className="vertical rounded">
      <h2 className="mb-4">Vertical, Rounded</h2>
      <div className="progress-bar">
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
        <p className="h6">Orders</p>
      </div>
      <div className="progress-bar">
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
        <p className="h6">Processing</p>
      </div>
      <div className="progress-bar">
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
        <p className="h6">Shipped</p>
      </div>
      <div className="progress-bar">
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
        <p className="h6">Dellivered</p>
      </div>
    </div>
  )
}

export default Verticals
