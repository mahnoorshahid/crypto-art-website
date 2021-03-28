import React, { Component, useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';

import cn from "classnames";
import Card from './card';
import styles from "../styles/card.css"
import NFT from '../NFT';

const options = {method: 'GET'};

//const url = 'https://api.github.com/users';

//const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
const url = 'https://api.opensea.io/api/v1/bundles?limit=5&offset=0';
//const url = "https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/556324/";

// fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
//   .then(response => console.log("response",response))
//   .catch(err => console.error(err));






const CardRow = () => {
    // render() {
        const [assets, setAssets] = useState([]);

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();
          setAssets(assets);
        };

        useEffect(() => {
           getAssets();
        }, []);
        
    //    const sendData = ((nft)=>{
    //       return nft;
           
    //     })
   
        return (
        // {/* <>       */}
        <div className="cardRowContainer">
            <h1>hello</h1>
            {/* assets={assets} */}

         {assets && assets.bundles && assets.bundles.length > 0 && assets.bundles.map((item)=>{
                console.log("in map", item);
                {/* const {id, asset_contract, image_original_url, image_thumbnail_url} = item; */}
                return <li  className="flexLeft" key={item.id}>
                    {/* <h1>hellp {item.description}</h1> */}
                    {item && item.assets.length > 0 && item.assets.map((nft) =>{
                        console.log("nft", nft);
                        const { image_preview_url, collection, token_id, id} = nft;
                     return (
                        <div>
                            <Link className="eventCardShadow" to={`/${id}`}>
                            <Card id = {id} img = {image_preview_url} name={collection.name} />
                            </Link>
                        </div>
                        )
                    })}
                </li>
         })}
         </div>
        )
};
export default CardRow;
