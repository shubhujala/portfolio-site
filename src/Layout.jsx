import React from 'react'
import {GridBackgroundDemo} from "./Components/background/GridBackgorund"
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from './Components/Footer/footer'
function Layout() {
  return (
      <>
        <div className="fixed inset-0 -z-10">
          <GridBackgroundDemo />
        </div>
        <div className='mt-10 '>
        <Navbar/></div>
        <main className="relative z-10 pt-[100px] px-4 mt-10 ">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </>

  )
}

export default Layout
