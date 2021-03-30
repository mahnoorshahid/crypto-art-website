import React, { Component, useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom';

import cn from "classnames";
import Card from './components/card';
import styles from "./styles/card.css"

const options = {method: 'GET'};

//const url = 'https://api.github.com/users';

const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';

const data = [{
        nftName: '2 Psyche',
        eth: "0.2",
        description: (
            <>
            <p>
            83m² plot title parcel on Helios, 778m from the origin, with a 8m build height, floor is at 0m elevation
            </p>
            </>
        ),
        date: "March 3rd",
        creator: 'creator',
        hasOwner: false,
        owner: 'owner name'
    },
    {
        nftName: '2 Psyche',
        eth: "0.2",
        description: (
            <>
            <p>
            83m² plot title parcel on Helios, 778m from the origin, with a 8m build height, floor is at 0m elevation
            </p>
            </>
        ),
        date: "March 3rd",
        creator: 'creator',
        hasOwner: false,
        owner: 'owner name'
    }
]

const NFT = () => {
        const id = useParams();
        const [assets, setAssets] = useState([]);
        const [title, setTitle] = useState('default title');

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();

        //const result = assets.assets[0];
        const result = assets.assets;
      

          console.log("assets", assets);
          console.log("result", result);
          //selected array index id must match param
          const selected = assets.assets[3];

         setAssets(selected);
         //result is an array
         // setAssets(result);

          setTitle(selected.collection.name);
          console.log("selected", selected);
        };

        // useEffect(() => {
        //    getAssets();
        // }, []);

        

        useEffect(() =>{
            getAssets();
            
       // const selectedNFT = assets && assets.assets && assets.assets.length > 0 && assets.assets.find((nft) => nft.id === parseInt(id));
         
       const idNFT = null;
       //this one works
       // const selectedNFT = assets && assets.length && assets.find((nft) => nft.id === parseInt(id));
       //THIS WORKS ASSETS.ID MATCHES PARAM ID!!
       
       const selectedNFT = assets.id === parseInt(id) ? idNFT=assets.id :null;

            console.log('find nft', assets.id);
         //const selectedNFT = assets && assets.length > 0 && assets.find((nft) => nft.id === parseInt(id));


        //  const selectedNFT = assets && assets.length && assets.find((nft) => nft.id === parseInt(id));
        //  console.log('ASSETS',assets);
        //  setTitle(selectedNFT);
            //returning false
         console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets)); //assets prev
      
        console.log("assets id", assets);
        const isDescription = assets && assets.collection && assets.collection.description !== "" ? true : false;
        const { token_id, top_bid, num_sales, owner, collection } = assets;
        return (
            <>
        <div className="maxWidth flexCommon">
         <div className="left">
           <p className="smallText">nft name</p>
            <h1>
             {title}
            </h1>

            <p className="smallText allCaps">owner</p>
            <p className="username">
           @{assets && assets.owner && assets.owner.user && assets.owner.user.username}
           </p>
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
            <div className="eventCardShadowInput">
                
                <article>
                    <form className="form">
                        <div className="inputContainer">
                            <label htmlFor="carbonOffset">offset:</label>
                            <input type="text"/>
                        </div>
                    </form>
                </article>
   
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
     
            {/* {assets && assets.length >= 0 && assets.map((item)=>{
                console.log('item',item);
                return (
                    
                <div  className="flexLeft" key={item.id}>
                    {item.collection.name}
                    {item && item.length > 0 && item.map((nft) =>{
                        const { image_preview_url, collection, token_id, description} = nft;
                     return (
                        <div>
                        <p>{collection.name}</p>
                        </div>
                        )
                    })}
                </div>
            )})} */}
         </div>
        </>
        )
  };
export default NFT;
