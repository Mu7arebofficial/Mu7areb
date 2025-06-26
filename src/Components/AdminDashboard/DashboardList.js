import React from 'react'
import DashLinks from './dashListContent/DashLinks'
import ListLogo from './dashListContent/ListLogo'

const DashboardList = () => {
  return (
    <div className="dashboard-list">
      <ListLogo />
      <DashLinks />
    </div>
  )
}

export default DashboardList
