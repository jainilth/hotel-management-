import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row my-1'>
          <Navbar />
        </div>
        <div className='row my-1'>
          <div className='col d-flex justify-content-center'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout
