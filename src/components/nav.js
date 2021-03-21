import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <div className="topnav maxWidth">
            <div id="logo">

            </div>
        <div className="contentLinks">
        <a className="active" href="#home">Marketplace</a>
        <a href="#news">About</a>
        <a href="#contact">Offset</a>
        </div>
      </div>);
    }
}
 
export default NavBar;