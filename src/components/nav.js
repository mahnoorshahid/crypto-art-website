import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

   
    render() { 
      const ethereum = window.ethereum;
      console.log("ethereum",ethereum);
      const openMetaMask = async()=> {
        const showAccount = document.querySelector('.modal');
        ethereum.request({ method: 'eth_requestAccounts' });
         const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
         const account = accounts[0];
        // const account = window.web3.eth.defaultAccount;
  
         showAccount.innerHTML = account;
       }
        return ( <div className="topnav maxWidth">
           
           <Link to="/">
            <div id="logo">
            </div>
            </Link>
        <div className="contentLinks">
        <Link to="/marketplace" className="active" href="#home">Marketplace</Link>
        <Link to="/about" href="#news">About</Link>
        <Link to="/offsets" href="#contact">Offset</Link>
        <button onClick= {openMetaMask} className="navBar blackBtn">
            Connect Wallet
        </button>
        </div>
      </div>);
    }
}
 
export default NavBar;