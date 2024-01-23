import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './Components/index'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
