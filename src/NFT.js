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

         const result = assets.assets[0];
          console.log("assets", assets);
          console.log("result", result);
          setAssets(assets);
          setTitle(result.id);
        };

        // useEffect(() => {
        //    getAssets();
        // }, []);

        

        useEffect(() =>{
            getAssets();

           const selectedNFT = assets && assets.assets && assets.assets.length > 0 && assets.assets.find((nft) => nft.id === parseInt(id));

            setTitle(selectedNFT);
            //returning false
            console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets));
      

        return (
            <>
        <div className="maxWidth">
        
            <h1>collection.name {assets.id}</h1>
            <h1>
             {title}
            </h1>
            {/* <h2>{props.id}</h2> */}
            {assets  && assets.length > 0 && assets.map((item)=>{
                console.log("item", item);
                {item && item.assets.length > 0 && item.assets.map((nft) =>{
                    console.log("nft", nft);
                        const { image_preview_url, collection, token_id, id} = nft;
                    
                    return <div>
                        <h1>
                            {nft.id}
                        </h1>
                        </div>
                })};
     
                 })}
         {/* {assets && assets.bundles && assets.bundles.length > 0 && assets.map((item)=>{ */}
            {assets && assets.length >= 0 && assets.map((item)=>{
                console.log('item',item);
                {/* console.log("in nft", item); */}
                return (
                    
                <li  className="flexLeft" key={item.id}>
                {/* <p>{collection.name}</p> */}
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
