import React from 'react';
import Link from 'next/link';


//styles

import '../../styles/footer.scss'
//images
import logo from '../../images/footer-logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png'

export default function Footer() {
    return (
        <footer>
            <div className="first-section">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>HOME</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/heritage">
                                <a>HERITAGE</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/buynow">
                                <a>BUY NOW</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>CONTACT</a>
                            </Link>
                        </li>
                     </ul>
                </div>
                <div className="socials">
                    <img src={facebook} alt="fb"/>
                    <img src={instagram} alt="insta"/>
                    <img src={linkedin} alt="linked"/>
                </div>
            </div>
            <div className="copyright">
                <p>Dawid Dao Xuan All rights reserved. </p>
            </div>

        </footer>
    )
}
