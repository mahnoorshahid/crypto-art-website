import React, { Component, useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch, Link, useParams} from 'react-router-dom';

import cn from "classnames";
import Card from './components/card';
import styles from "./styles/card.css"

const options = {method: 'GET'};

//const url = 'https://api.github.com/users';

const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
//const url = 'https://api.opensea.io/api/v1/bundles?limit=5&offset=0';
const base = null;



const NFT = () => {
    // render() {
       
        const [assets, setAssets] = useState([]);
        const [title, setTitle] = useState('default');

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();
          console.log("bundle nft", assets);
          setAssets(assets);
        };

        // useEffect(() => {
        //    getAssets();
        // }, []);

        const id = useParams();

        useEffect(() =>{
            getAssets();
         //   const base = assets && assets.bundles;
        // const data = base && base.map((item) => [item.assets]);
           // const result = data && data.map((item) => item.find((nftItem) => nftItem.token_id === parseInt(id)));
        //  const assetBundles = assets && assets.bundles && assets.bundles.length >= 0 && assets.bundles.map((item) => [item.assets]);

         //  const assetBundles = base && base.map((item) => item);
            // const result = assets && assets.map((item)=>item.find((nftItem) => nftItem.id === parseInt(id)));
           const selectedNFT = assets && assets.find((nftItem) => nftItem.token_id === parseInt(id));
    
            setTitle(selectedNFT);
            console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets));
      

        return (
        // {/* <>       */}
        <div className="cardRowContainer">
        
            <h1>NFT page</h1>
            <h2>{title}</h2>

         {assets && assets.bundles && assets.bundles.length > 0 && assets.bundles.map((item)=>{
                {/* console.log("in nft", item); */}
                return (
            
                <li  className="flexLeft" key={item.id}>
                    {item && item.assets.length > 0 && item.assets.map((nft) =>{
                        {/* console.log("nft2", nft); */}
                        const { image_preview_url, collection, token_id, description} = nft;
                     return (
                        <>
                        <p>{collection.name}</p>
                        {/* <Card img = {image_preview_url} name= {collection.name}/> */}
                        </>
                        )
                    })}
                </li>
         )})}
         </div>
        //  {/* </> */}
        )
    // }
};
export default NFT;
