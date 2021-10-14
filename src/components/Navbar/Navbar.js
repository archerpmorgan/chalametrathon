import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';


function Navbar() {

    const navStyleSignedIn = {
            color: "black",
            fontFamily: "Palatino",
            textDecoration: 'none',
            padding: "0.5rem 1rem"
    };

    return (
        <nav className="NavbarItems">

            <h1 className="navbar-logo">🤩DOUBLE FEATURE🤩</h1>

            <ul className={'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <Link key={index} to={`/${clean(item.title)}`} style={navStyleSignedIn}>
                            <li>
                                {item.title}
                                <i className={item.icon} ></i>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    );
}

// strip spaces and lowercase
function clean( name ) {
    return name.toLowerCase().replace(/\s/g, '')
}

export default Navbar