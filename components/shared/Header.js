import React from 'react';
import Link from 'next/link';4

//images

import logo from '../../images/logo.png'

//styles
import '../../styles/header.scss'


function Header() {
    return (
        <div className='navbar'>
            <div className="logo-holder">
                <img src={logo} alt="logo"/>
            </div>
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
    )
}

export default Header
