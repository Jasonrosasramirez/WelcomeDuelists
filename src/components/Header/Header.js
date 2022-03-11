import React, { useState, useEffect } from 'react';



function Header () {
    
    return (
        <div>
            <h1>Hello, I am a header</h1>

            <nav className='navbar'>
                <div className='navbar-container'>

                    {/* This is where the links to the menus come in */}
                    <ul>
                        <li> Home </li>
                        <li> GOAT Format </li>
                    </ul>
                    
                </div>

            </nav>
        </div>

    );

}

export default Header; 