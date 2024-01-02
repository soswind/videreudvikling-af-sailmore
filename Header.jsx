import React, { useEffect } from "react";
import { useState } from "react";
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    
    
    return (
        <>
        <NavbarTop />
        {isMobile ? <MobileMenu /> : <Navbar />}
        </>
    )
}