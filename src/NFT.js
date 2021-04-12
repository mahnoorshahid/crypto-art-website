import React, { Component, useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom';

import cn from "classnames";
import Card from './components/card';
import OffsetCard from './offsetCard';
import styles from "./styles/card.css"

const options = {method: 'GET'};

//const url = 'https://api.github.com/users';

const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
//const url = 'https://api.opensea.io/api/v1/bundles?limit=2&offset=0';


const NFT = () => {
        const id = useParams();
        const [assets, setAssets] = useState([]);
        const [title, setTitle] = useState('default title');
        const [user, setUser] = useState('default User')
        const [count, setCount] = useState(1);
        const [regexp, setRegexp] = useState("/^[0-9\b]+$/");
        const [bid, setBid] = useState(2);
        const [show, setShowModal] = useState(false);
        const [hide, setHideModal] = useState(true);

        const [showFinal, setShowFinalModal] = useState(false);
        const [hideFinal, setHideFinalModal] = useState(true);

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();
        const result = assets.assets;
         const selectedNFTAbove = result.map((nft)=> nft.id);
         const findNFTID = selectedNFTAbove.find((item) => item.id === parseInt(id));

      console.log("assets", assets);
      console.log("selectedNFTAbove",selectedNFTAbove );
      ///wirjubg
      console.log("resutl nft",result[0].id );
          console.log("result nft2", selectedNFTAbove);
          console.log("finding the id", findNFTID);
          const selected = assets.assets[3];

         setAssets(selected);
          setTitle(selected.collection.name);
          const isUsername= selected.creator.user ? selected.creator.user.username : null; 
          setUser(isUsername);
          console.log("selected", selected);
        };

        // const changeNum = () => {
        //     setCount(count + 1)
        // }
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


    //    let change = (e) => {
    //        value = e.target.value;
    //    }

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
                {/* @{assets && assets.owner && assets.owner.user && assets.owner.user.username} */}
                @{user}
                </p>
                </div>
             </div>
            }
                <div className="flexCommonPrice">
                    <div>
                        <p className="smallText allCaps">Asking Price</p>
                        <p className="price">0.3 Eth</p>
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
                                  &uarr;
                            </button>
                            <button onClick={decreaseNum} className="whiteBtn arrowBtn">
                                 &darr;
                            </button>
                            </div>
                            <span>
                                OFF
                            </span>
                            </div>
                     </div>
                    <div className="cardBorderPadding lessPadding">
                    {/* <Link to="/about" target="_blank">
                        <p className="commonTxtPadding">
                        What are carbon offsets? <span>&rarr;</span>
                        </p>
                    </Link> */}
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
                                  &uarr;
                            </button>
                            <button onClick={decreaseNum} className="whiteBtn arrowBtn">
                                 &darr;
                            </button>
                            </div>
                            {/* {count} */}
                            {/* <button onClick= {showModal} className="whiteBtn">
                                offs
                            </button> */}
                            </div>
                        </div>
                    </form>
                       <button onClick= {showModal} className="blackBtn">
                           Place a bid
                     </button>
                     {/* <button onClick= {openMetaMask} className="blackBtn">
                                connect wallet
                     </button> */}
                    <Link to="/about" target="_blank">
                        <p className="commonTxtPadding">
                        How Carbon Offsets work <span>&rarr;</span>
                        </p>
                    </Link>
                        
                </article>
                {/* <OffsetCard show={show}/> */}
            </div>
           </div>

             {/* bid MODAL SHOWN */}
             <div className={hideFinal == true ? "modal displayNone" : "modal display bidModal"}>
                <div className="modalContainer">
             
                  <div className="eventCardShadowInput modalInputContainer">
                  <div className="">
                         <p className="smallText noPadding">Your Bid</p>
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
                        <p className="smallText allCaps">Your Bid</p>
                        <h2 className="noPadding"> {bid + (count * 0.006 )} ETH</h2>
                        {/* <p className="price"> {bid + (count * 0.006 )} ETH</p> */}
                       
                        <p className="smallText allCaps">You're Winning!</p>
                     </div>
                     <div className="left">
                        <p className="ecoPrice smallText allCaps">Your Offsets</p>
                        <p className="price"> {count} OFF</p>
                     </div>
                </div>
                   <p>
                   Bids with the highest price and highest Carbon Offset Credits will win.
                    </p>
                    <div className="inputContainer">
                        <p className="commonTxtPadding carbonOffset">
                            Auction ends in: 2 days
                        </p>
                            <label className="commonTxtPadding carbonOffset" htmlFor="carbonOffset">Your Bidding Amount</label>
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
                                 Total</p>
                             <p className="summaryTxt">
                                {bid + (count * 0.006 )} ETH
                             </p>
                         </div>
                     </div>
                     <div className="buttonRow recieptRow">
                     <button className="whiteBtn" onClick = {hideFinalModal}>
                      View Artwork
                     </button>
                     <button  className="blackBtn" onClick = {hideFinalModal}>
                      Claim Artwork
                     </button>
                     </div>
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
         
            {/* {assets  && assets.length > 0 && assets.map((item)=>{
                console.log("item", item);
                
                  const { image_preview_url, collection, token_id, id, top_bid} = item;
                    
                    return <div>
                        <h1> array
                            {item.collection.name}
                            param id
                            {id}
                        </h1>
                        </div>
                })} */}
     
            
         </div>
        </>
        )
  };



export default NFT;
