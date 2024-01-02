import React from "react"


export default function Navbar() {
    return (
        <nav className="desktop-nav">
            <ul className="nav-links">
                <li><a href="/seafares">All Seafares</a></li>
                <li><a href="#">About</a></li>
                <li><a href="/info">Good To Know</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
            <a className="login-button" href="/signin">Login</a>
        </nav>
    
    )
}

