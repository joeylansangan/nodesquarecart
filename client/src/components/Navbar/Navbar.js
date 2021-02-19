import React from "react";
import { Link } from 'react-router-dom'

import './css/style.css';

function Navbar() {

    return (
        <div className="navbar" >
            <Link className="navTitle" to="/"><h3>Redux Cart</h3></Link>
            <div className="linkDiv">
              <Link className="navLink" to="/"><span>shop</span></Link>
              <Link className="navLink" to="/cart"><span>cart</span></Link>
            </div>
        </div>
    )
  }

export default Navbar; 