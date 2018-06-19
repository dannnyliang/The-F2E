import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Topbar.css'

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link to="/week3" className="navbar-brand">SHPOTIME</Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Link to="/week3" className="nav-item nav-link">HOME</Link>
          <Link to="/week3/order" className="nav-item nav-link">ORDER</Link>
          <Link to="/week3/product" className="nav-item nav-link">PRODUCT</Link>
          <Link to="/week3" className="nav-item nav-link">ADMIN</Link>
        </div>
      </div>
    </nav>
  )
}

export default Topbar