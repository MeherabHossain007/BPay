import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from './Footer'
import Hero from './Hero'

function Layout() {
    return (
        <div className="layout">
            <Navbar/>
            <Hero/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
