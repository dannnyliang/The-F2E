import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Topbar.css';

const Topbar = () => (
  <nav className="navbar navbar-expand container-fluid">
    <Link to="/week3" className="navbar-brand">Shoptime</Link>
    <div className="navbar-collapse offset-1">
      <Link to="/week3" className="nav-item">HOME</Link>
      <Link to="/week3/order" className="nav-item">ORDER</Link>
      <Link to="/week3/product" className="nav-item">PRODUCT</Link>
      <div className="ml-auto mr-5">ADMIN</div>
    </div>
  </nav>
);


export default Topbar;
