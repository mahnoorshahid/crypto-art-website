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
    }
]

const NFT = (nft) => {
        const id = useParams();
       const {collection, price} = nft;
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

        

        useEffect(() =>{
            getAssets();
         //   const base = assets && assets.bundles;
        // const data = base && base.map((item) => [item.assets]);
           // const result = data && data.map((item) => item.find((nftItem) => nftItem.token_id === parseInt(id)));
        //  const assetBundles = assets && assets.bundles && assets.bundles.length >= 0 && assets.bundles.map((item) => [item.assets]);

         //  const assetBundles = base && base.map((item) => item);
            // const result = assets && assets.map((item)=>item.find((nftItem) => nftItem.id === parseInt(id)));
           //const selectedNFT = assets && assets.find((nftItem) => nftItem.token_id === parseInt(id));

           //return boolean
           //const selectedNFT = assets && assets.length > 0 && assets.map((nftItem) => nftItem.id === parseInt(id));

           const selectedNFT = assets && assets.length > 0 && assets.find((nftItem) => nftItem.id === parseInt(id));


            setTitle(selectedNFT);
            //returning false
            console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets));
        console.log("props", nft);
      

        return (
            <>
        <div className="eventContainer">
        
            <h1>collection.name</h1>
            <h1>
                {collection}
            </h1>
            {/* <h2>{props.id}</h2> */}

         {assets && assets.bundles && assets.bundles.length > 0 && assets.map((item)=>{
                {/* console.log("in nft", item); */}
                return (
            
                <li  className="flexLeft" key={item.id}>
                    {item && item.assets.length > 0 && item.assets.map((nft) =>{
                        {/* console.log("nft2", nft); */}
                        const { image_preview_url, collection, token_id, description} = nft;
                     return (
                        <div>
                        <p>{collection.name}</p>
                        {/* <Card img = {image_preview_url} name= {collection.name}/> */}
                        </div>
                        )
                    })}
                </li>
         )})}
         </div>
        </>
        )
  };
export default NFT;
