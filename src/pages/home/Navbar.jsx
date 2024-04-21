import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

function Navbar() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    };

    const closeMenu = (e) => {
        setNavActive(false);
    };

    useEffect(() => { 
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu()
            }
        };
        window.addEventListener("resize",
            handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu( );
        }
    }, []);

    
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            
            <div className='navbar-container'>
                <img src='../../../logo image.png' height="60px" width="70px" alt='' />
            </div>

            <a 
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        </a>

                <div className={`navbar-item ${navActive ? "active" : ""}`}>
                    <ul >
                        <li>
                            <Link onClick={closeMenu} activeClass='navbar--active-content'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="herosection"
                                className='navbar--content'
                            >Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} activeClass='navbar--active-content'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="myportfolio"
                                className='navbar--content'
                            >Portfolio</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} activeClass='navbar--active-content'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="aboutme"
                                className='navbar--content'
                            >Aboutme</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} activeClass='navbar--active-content'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="testimonial"
                                className='navbar--content'
                            >Testimonial</Link>
                        </li>

                    </ul>
                </div>
                



            <Link onClick={closeMenu} activeClass='navbar--active-content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className='btn btn-outline-primary'>Contact me</Link>

        </nav>
        
    );
}

export default Navbar



