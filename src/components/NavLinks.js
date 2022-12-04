import React from 'react';
import { Link } from 'react-router-dom'


function NavLinks() {
    
    return(
        <nav classname = 'NavbarDiv'>
            <h3> Andover Games </h3>

            <ul className='navLinks'>
                <Link to = '/'> <li> Home </li> </Link>
                <Link to = '/ShopPage'> <li> Shop </li> </Link>
                <Link to = '/FoodPage'> <li> Food Menu </li> </Link>
                <Link to = '/EventsPage'> <li> Events </li> </Link>
                <Link to = '/ContactsPage'> <li> Contacts </li> </Link>
            </ul>

        </nav>
    );

}


export default NavLinks; 

/* This is a good reference but some of the information has been outdated with some updates.
https://www.youtube.com/watch?v=Law7wfdg_ls
*/