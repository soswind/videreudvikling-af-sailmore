import React from 'react';
import footerimage from '../images/hvid-sailmore-logo.svg'

export default function NavbarBottom() {
    return (
        <><div className="footer-container">
            <div className="footer-logo">
                <img src={footerimage} className="footer-img"></img>
            </div>
            <div className="footer-text">
                <div className="footer-info">
                    <ul>
                        <h3>Contact</h3>
                        <li>Phone: 0045 66 66 66 66</li>
                        <li>E-mail: sailmore@mail.dk</li>
                        <li>CVR: 456789</li>
                    </ul>
                </div>
                <div className="footer-address">
                    <ul>
                        <h3>Address</h3>
                        <li>Sailvej 67</li>
                        <li>8000 Aarhus C</li>
                        <li>Denmark</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <h3>Important links</h3>
                        <li><a href="/signup">Create Profile</a></li>
                        <li><a href="/signin">Login</a></li>
                        <li><a href="/seafares">All seafares</a></li>
                    </ul>
                </div>
            </div>
        </div><div className="footer-bottom">
                <p>2023 | SailMore</p>
            </div></>
    )
}