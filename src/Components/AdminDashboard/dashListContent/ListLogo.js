import React from 'react'
import { RiAdminFill } from 'react-icons/ri'

const ListLogo = () => {
  return (
    <div className="dashboard-logo bg-primary d-flex flex-column justify-content-center align-items-center">
      <div className="dashboard-icon">
        <RiAdminFill className="text-primary" />
      </div>
      <p className="text-center mt-3 h4 text-white">Settings</p>
    </div>
  )
}

export default ListLogo
