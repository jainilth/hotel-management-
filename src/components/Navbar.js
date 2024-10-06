import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="nav-link fs-4 m-1" to="/">Hotel Management</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/booking" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Booking
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="booking/totalbooking">Total Booked</Link></li>
              {/* <li><Link className="dropdown-item" to="booking/yourbooking">Your Booking</Link></li> */}
              <li><Link className="dropdown-item" to="/newbooking">New Booking</Link></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link className="btn mt-0" to="/login">Log In</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
