import React from 'react';
import { Link } from 'react-router-dom'


function NavHeader() {
    
    return(
        <nav classname = 'NavbarDiv'>
            <h3> Welcome Duelists </h3>

            <ul className='navLinks'>
                <Link to = '/'> <li> Home Page </li> </Link>
                <Link to = '/BanListPage'> <li> BanList </li> </Link>
                <Link to = '/FormatGalleryPage'> <li> Format Gallery </li> </Link>

            </ul>

        </nav>
    );

}


export default NavHeader; 

/*

https://www.youtube.com/watch?v=Law7wfdg_ls
*/