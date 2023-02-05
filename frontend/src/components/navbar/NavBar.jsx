import React from 'react'
import './navbar.css'
function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-container">
                <span className="logo">Akaris Booking App</span>
                <div className="btn nav-items">
                    <button className="nav-button">
                        Register
                    </button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
    
        </div>
    )
}

export default NavBar
