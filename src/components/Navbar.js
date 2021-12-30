import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <h1>BPay</h1>
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>   
    )
}

export default Navbar
