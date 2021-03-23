import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <div className="topnav maxWidth">
           
           <Link to="/">
            <div id="logo">
            </div>
            </Link>
        <div className="contentLinks">
        <Link to="/" className="active" href="#home">Marketplace</Link>
        <Link to="/about" href="#news">About</Link>
        <Link to="/offsets" href="#contact">Offset</Link>
        </div>
      </div>);
    }
}
 
export default NavBar;