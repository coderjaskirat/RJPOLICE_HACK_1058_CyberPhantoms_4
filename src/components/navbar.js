import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav(){
    return(
        <div className='navbar'>
            <nav className='nav-column'>
                <h3 className='nav-heading'>RAJASTHAN POLICE</h3>
            </nav>
            <Link to="/SignIn" className="remove-underline">
            <div className='button-signup'>
                SignIn
            </div>
        </Link>
        </div>
    )
}