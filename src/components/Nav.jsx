import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div> 
        <nav>
            <ul>
                <li><Link to="/hyrahome">Home</Link></li>
                <li><Link to="/ourteachings">Our Teachings</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav