import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardList from '../AdminDashboard/DashboardList'

const AdminLayout = () => {
  return (
    <div className="dashContainer d-flex">
      <DashboardList />
      <div className=" dashContent col-md-10 col-sm-10 col-12">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
