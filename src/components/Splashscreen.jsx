import React from "react"
import headerimage from '../images/header-image.png'

export default function Splashscreen() {
    return (
    <section>
    <img src={headerimage} className="header-image"></img>
    <div className="content-container-header">
    <h1 className="title-header">Sail with experienced captains and adventurous crew on course for near and faraway coasts</h1>
    <p className="paragraph-header">Connects adventurous crew with experienced captains for long-distance sailing</p>
    <a className="button-link" href="/signup"><button className="header-button" type="button">Create profile</button></a>
    </div>
    </section>

    )
}