import React from 'react';
import { Link } from 'react-router-dom'


// import CSS Styles 
//import '../App.css'


function NavHeader() {
    
    return(
        <nav classname = 'NavbarDiv'>
            <h3> Welcome Duelists </h3>

            <ul className='navLinks'>
                <Link to = '/'> <li> Home Page </li> </Link>
                <Link to = '/TierListPage'> <li> Tier Lists </li> </Link>
                <Link to = '/GOATFormatPage'> <li> GOAT Format </li> </Link>

            </ul>

        </nav>
    );

}


export default NavHeader; 

/*

https://www.youtube.com/watch?v=Law7wfdg_ls
*/