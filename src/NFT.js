import React, { Component, useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom';

import cn from "classnames";
import Card from './components/card';
import OffsetCard from './offsetCard';
import styles from "./styles/card.css"

const options = {method: 'GET'};

const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
const up = "/imgs/up.svg";
const down = "/imgs/down.svg";

const NFT = () => {
        const id = useParams();
        const [assets, setAssets] = useState([]);
        const [title, setTitle] = useState('default title');
        const [user, setUser] = useState('default User')
        const [count, setCount] = useState(1);
        const [bid, setBid] = useState(2);
        const [show, setShowModal] = useState(false);
        const [hide, setHideModal] = useState(true);

        const [showFinal, setShowFinalModal] = useState(false);
        const [hideFinal, setHideFinalModal] = useState(true);

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json().catch(err => {
            err.text().then( errorMessage => {
              alert("error");
            })});
         const selected = assets.assets[0];

         setAssets(selected);
          setTitle(selected.collection.name);
          const isUsername= selected.creator ? selected.creator.user : selected.owner.user.username; 
        //   const isOwner = selected.owner.user? selected.owner.user
          const checkUsername = isUsername ? selected.creator.user.username : selected.owner.user.username;
          setUser(checkUsername);
          console.log("selected", selected);
        };

        const changeNum = (e) => {
            e.preventDefault();
            setCount(count + 1);
       }

       const decreaseNum = (e) => {
        e.preventDefault();
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
   }

       const showModal = (e) => {
           e.preventDefault();
           setShowModal(true);
           setHideModal(false);
       }

       const hideModal = (e) => {
           e.preventDefault();
           setShowModal(false);
           setHideModal(true);
       }

       const showFinalModal = (e) => {
        e.preventDefault();
        setShowFinalModal(true);
        setHideModal(true);
        setHideFinalModal(false);
    }

    const hideFinalModal = (e) => {
        e.preventDefault();
        setShowFinalModal(false);
        
        setHideModal(true);
        setHideFinalModal(true);
    }

    const bidAgain = (e) => {
        setShowFinalModal(false);
        
        setHideModal(false);
        setHideFinalModal(true);
        setShowModal(true);
    }

       if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else if (typeof window.ethereum !== 'undefined'){
          alert("connect to a meta mask")
      }
       const classNameHide = hide ? "displayNone" : "display";

        useEffect(() =>{
            getAssets();

        }, []);
        console.log("PARAMS",useParams(assets)); //assets prev
      
        console.log("assets id", assets);
        const isDescription = assets && assets.collection && assets.collection.description !== "" ? true : false;

        return (
            <>
        <div className="maxWidth flexCommon">
         <div className="left">
            <h1>
             {title}
            </h1>
            {assets && assets.owner && 
                    <div className="ownerDiv">
                    <img src={assets && assets.owner && assets.owner.user && assets.owner.profile_img_url}></img>
                    <div>
                    <p className="smallText allCaps">owner</p>
                    <p className="username">
                @{user}
                </p>
                </div>
             </div>
            }
                <div className="flexCommonPrice">
                    <div>
                        <p className="smallText allCaps">Asking Price</p>
                        <p className="price">5 Eth</p>
                        <p className="">$539</p>
                     </div>
                     <div className="left">
                        <p className="ecoPrice smallText allCaps">Eco Price</p>
                        <p className="">195 KgCO2</p>
                        <p className="">223 kWh</p>
                     </div>
                </div>
              {/* MODAL SHOWN */}
               <div className={hide == true ? "modal displayNone" : "modal display"}>
                <div className="modalContainer">
                  <div className="eventCardShadowInput modalInputContainer">
                      <h1>
                      {title}
                      </h1>
                    <p>
                        You are bidding for {title} by {user}
                    </p>
                    <div className="inputContainer">
                            <label className="commonTxtPadding carbonOffset" htmlFor="carbonOffset">Your Bidding Amount</label>
                            <div className="inputBtn">
                            <input 
                            className="outlineEnd"
                            type="text" 
                            pattern="[0-9]*" 
                            value = {bid}  
                            /> 
                            <span>
                                ETH
                            </span>

                        </div>
                     </div>

                     <div className="inputContainer">
                            <label className="commonTxtPadding carbonOffset" htmlFor="carbonOffset">Your Carbon Offset Amount</label>
                            <div className="inputBtn">
                            <input 
                            className="outlineEnd"
                            type="text" 
                            pattern="[0-9]*"    
                            value={count}           
                            /> 
                            <div className="arrowBtnFlex">
                            <button onClick={changeNum} className="whiteBtn arrowBtn">
                                  <img src={up} className="upArrow"/>
                            </button>
                            <button onClick={decreaseNum} className="whiteBtn arrowBtn">
                            <img src={down} className="upArrow"/>
                            </button>
                            </div>
                            <span>
                                OFF
                            </span>
                            </div>
                     </div>
                    <div className="cardBorderPadding lessPadding">
                    </div>
                     
                     <div className="recieptGridContainer">
                         <div className="recieptRow">
                             <p className="summaryTxt">
                                 Your Balance</p>
                             <p className="summaryTxt">
                                 12.00 ETH
                             </p>
                         </div>
                         <div className="recieptRow">
                             <p className="summaryTxt">
                                 TOTAL Offsets</p>
                             <p className="summaryTxt">
                                 {count} OFF
                             </p>
                         </div>
                         <div className="recieptRow">
                             <p className="summaryTxt">
                                 Your Bid</p>
                             <p className="summaryTxt">
                                {bid} ETH
                             </p>
                         </div>
                         <div className="recieptRow">
                             <p className="summaryTxt">
                                 Total</p>
                             <p className="summaryTxt">
                                {bid + (count * 0.006 )} ETH
                             </p>
                         </div>
                     </div>
                     <div className="buttonRow recieptRow">
                     <button className="whiteBtn" onClick = {hideModal}>
                      Cancel
                     </button>
                     <button  className="blackBtn" onClick = {showFinalModal}>
                      Place bid
                     </button>
                     </div>
                 </div>
                </div>
             </div>
{/* modal end */}
            <div className="eventCardShadowInput">
                <article className="cardBorderPadding">
                    <form className="form">
                        <div className="inputContainer">
                            <label className="commonTxtPadding carbonOffset" htmlFor="carbonOffset">Carbon Offset Required</label>
                            <div className="inputBtn">
                            <input 
                            type="text" 
                            pattern="[0-9]*"    
                            value={count}
                            />  
                            <div className="arrowBtnFlex">
                            <button onClick={changeNum} className="whiteBtn arrowBtn">
                            <img src={up} className="upArrow"/>
                            </button>
                            <button onClick={decreaseNum} className="whiteBtn arrowBtn">
                            <img src={down} className="upArrow"/>
                            </button>
                            </div>
                            </div>
                        </div>
                    </form>
                       <button onClick= {showModal} className="blackBtn">
                           Place a bid
                     </button>
     
                    <Link to="/about">
                        <p className="commonTxtPadding">
                        How Carbon Offsets work <span>&rarr;</span>
                        </p>
                    </Link>
                        
                </article>
            </div>
           </div>

             {/* bid MODAL SHOWN */}
             <div className={hideFinal == true ? "modal displayNone" : "modal display bidModal"}>
                <div className="modalContainer">
             
                  <div className="eventCardShadowInput modalInputContainer">
                  <div className="">
                         {/* <p className="smallText noPadding">Your Bid</p> */}
                   </div>
                      <h1>
                      {title}
                      </h1>
                      {assets && assets.owner && 
                        <div className="ownerDiv">
                        <img src={assets && assets.owner && assets.owner.user && assets.owner.profile_img_url}></img>
                        <div>
                        <p className="smallText allCaps">owner</p>
                        <p className="username">
                    @{user}
                    </p>
                    </div>
                </div>
                }
                <div className="flexCommonPrice">
                    <div>
                        <p className="smallText commonHeading">Your Bid</p>
                        <h2 className="noPadding"> {bid + (count * 0.006 )} ETH</h2>
                        {/* <p className="price"> {bid + (count * 0.006 )} ETH</p> */}
                       
                        <p className="smallText  winning">You're Winning!</p>
                     </div>
                     <div className="left">
                        <p className="ecoPrice smallText commonHeading">Your Offsets</p>
                        <p className="price"> {count} OFF</p>
                        <p className="smallText">Will offset {count} tonnes of carbon emissions equivalent</p>
                     </div>
                </div>
                        <p className="smallText allCaps">
                        Auction Ends:
                        </p>
                        <p className="carbonOffset noPadding smallText commonHeading mdText">
                            2 days
                        </p>
                       
                     <div className="recieptGridContainer">
                     <p className="commonHeading greyText smallText noPadding">
                         Bids with the highest price and highest Carbon Offset Credits will win.
                    </p>
                    </div>
                     <div className="buttonRow recieptRow">
                     <Link to="/marketplace" target="_blank" className="whiteBtn whiteBtnContainer">
                     <button className="whiteBtn">
                      Go to Marketplace
                     </button>
                     </Link>
                     <button  className="blackBtn" onClick = {bidAgain}>
                      Bid Again
                     </button>
                     </div>
                     <Link to="/about" target="_blank">
                        <p className="commonTxtPadding carbonOffsetLink">
                        How Carbon Offsets work <span>&rarr;</span>
                        </p>
                    </Link>
                 </div>
                </div>
             </div>

         
           <div className="right">

            <div className="nftContainer">
                <div className="nftWrapper">
                  <img src={assets.image_preview_url}></img>
                </div>
            </div>
           
           {isDescription &&
           <p className="description">
            {assets && assets.collection && assets.collection.description}
           </p>
          }
    </div>
               
         </div>
        </>
        )
  };



export default NFT;
