import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='logo'>Student Record</div>
            <div className="menuItem">
                <Link to ="/" className='link'>Home</Link>
                <Link to ="/course" className='link'>Course</Link>
                <Link to ="/about" className='link'>About</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar