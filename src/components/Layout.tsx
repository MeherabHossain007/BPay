import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from './Footer'
import Hero from './Hero'
import HomeCard from './HomeCard'
import { HStack } from '@chakra-ui/layout'

function Layout() {
    return (
        <div className="layout">
            <Navbar/>
            <Hero/>
            <HStack spacing={3} justify="center">
               <HomeCard/>
               <HomeCard/>
               <HomeCard/>
               <HomeCard/> 
            </HStack>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
