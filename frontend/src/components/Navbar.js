import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div className='navbar'>
        <div className="logo">
            <h3 className='nav-heading'>NyayaSahay</h3>
            <p className="tagline">Your Digital FIR Assistant</p>
        </div>
            <Link to="/SignIn" className='signin-button'>Sign in</Link>
        </div>
    )
}