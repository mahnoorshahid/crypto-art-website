import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <div className="topnav">
            <div id="logo">

            </div>
        <div className="contentLinks">
        <a className="active" href="#home">Marketplace</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </div>
      </div>);
    }
}
 
export default NavBar;