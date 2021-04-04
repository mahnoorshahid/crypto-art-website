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
        const [count, setCount] = useState(1);
        const [show, setShowModal] = useState(false);
        const [hide, setHideModal] = useState(true);

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();

        // const selectedNFTAbove = assets && assets.assets && assets.assets.length && assets.assets.find((nft) => nft.id === parseInt(id));
        //const result = assets.assets[0];
        const result = assets.assets;
        // const selectedNFTAbove = result.map((nft)=> nft.id === parseInt(id));
         const selectedNFTAbove = result.map((nft)=> nft.id);
         const findNFTID = selectedNFTAbove.find((item) => item.id === parseInt(id));

      console.log("assets", assets);
      console.log("selectedNFTAbove",selectedNFTAbove );
      ///wirjubg
      console.log("resutl nft",result[0].id );
          console.log("result nft2", selectedNFTAbove);
          console.log("finding the id", findNFTID);
          //selected array index id must match param
          const selected = assets.assets[3];

         setAssets(selected);
          setTitle(selected.collection.name);
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
   }

       const showModal = (e) => {
           e.preventDefault();
           setShowModal(true);
           setHideModal(false);
           console.log("selected show modal",  show)
       }

       const hideModal = (e) => {
           e.preventDefault();
           setShowModal(false);
            setHideModal(true);
            console.log("selected hide modal",  hide)
       }
       const classNameHide = hide ? "displayNone" : "display";

        useEffect(() =>{
            getAssets();
        
       // const selectedNFT = assets && assets.assets && assets.assets.length > 0 && assets.assets.find((nft) => nft.id === parseInt(id));
         
       //this one works
       // const selectedNFT = assets && assets.length && assets.find((nft) => nft.id === parseInt(id));
       //THIS WORKS ASSETS.ID MATCHES PARAM ID!!
   //   const selectedNFT = assets && assets.map((nft)=> nft.id === parseInt(id));

         //console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets)); //assets prev
      
        console.log("assets id", assets);
        const isDescription = assets && assets.collection && assets.collection.description !== "" ? true : false;
        const { token_id, top_bid, num_sales, owner, collection } = assets;
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
                @{assets && assets.owner && assets.owner.user && assets.owner.user.username}
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
              
            
               
                
               <div className={hide == true ? "displayNone" : "display"}>
                <div className="modalContainer">
                  <div className="eventCardShadowInput">
                 helloooo
               </div>
               <button onClick = {hideModal}>
                   hide modal
               </button>
                </div>
             </div>

           
               
                
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
                            {/* {count} */}
                            <button onClick={changeNum} className="whiteBtn">
                                up
                            </button>
                            <button onClick={decreaseNum} className="whiteBtn">
                                down
                            </button>
                            <button onClick= {showModal} className="whiteBtn">
                                offs
                            </button>
                            </div>
                        </div>
                    </form>
                    <Link>
                    <p className="commonTxtPadding">
                    How Carbon Offsets work <span>&rarr;</span>
                    </p>
                    </Link>
                </article>
                {/* <OffsetCard show={show}/> */}
            </div>
           </div>
         
           <div className="right">
           <img src ={assets.image_preview_url}></img>
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
