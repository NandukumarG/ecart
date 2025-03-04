import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-section">
      <div className="left">
        <h3>MYNTRA</h3>
      </div>

      <div className="centre">
        <ul>
          <li><Link to="/Collections">Men</Link></li>
          <li><Link to="/Womencollection">Women</Link></li>
          <li><Link to="/Kidscollection">Kids</Link></li>
          <li><Link to="/beauty">Beauty</Link></li>
        </ul>
      </div>


              <div className="search">
                 <input type="text" placeholder="Search..."/>
                  </div>

             <div className="right">
                 <div className="cart">Wishlist</div>
                 <div className="profile">Profile</div>
                 </div>
                 </div>

        )
    }
export default Header;

