import React from 'react'
import Navbar from '../../componenets/Navbar'
import Footer from '../../componenets/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
      <Footer />
    </>
  )
}

export default Layout