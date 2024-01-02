import React from "react"
import sailmorelogo from "../images/sailmore-logo.svg"

export default function NavbarTop() {
    return (
        <section>
            <a href="/"><img src={sailmorelogo} className="navtop-img"></img></a>
            <p className="navtop-text">CONNECTS ADVENTUROUS CREW WITH EXPERIENCED CAPTAINS FOR LONG DISTANCE TRAVEL</p>
        </section>
    
        )

}