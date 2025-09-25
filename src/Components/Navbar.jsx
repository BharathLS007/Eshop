import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">E-Shop</div>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse"></button>
          <div className="collapse navbar-collapse" id='navbarsupportedContent'>
            <ul className='navbar-nav me auto mb-2-lg-0'>
              <li className='nav-item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/'>Contact</Link>
              </li> 
              <li className='nav-item'>
                <Link to='/'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/'>SignUp</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
