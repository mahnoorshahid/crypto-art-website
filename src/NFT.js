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
          const selected = assets.assets[2];
          setAssets(selected);
          setTitle(selected.name);
        };

        // useEffect(() => {
        //    getAssets();
        // }, []);

        

        useEffect(() =>{
            getAssets();
            
       // const selectedNFT = assets && assets.assets && assets.assets.length > 0 && assets.assets.find((nft) => nft.id === parseInt(id));
         //const selectedNFT = assets && assets.length && assets.find((nft) => nft.id === parseInt(id));
         const selectedNFT = assets && assets.length > 0 && assets.find((nft) => nft.id === parseInt(id));


         setTitle(selectedNFT);
            //returning false
          console.log("selectedNFT", selectedNFT);

        }, []);
        console.log("PARAMS",useParams(assets)); //assets prev
      

        return (
            <>
        <div className="maxWidth">
        
            <h1>collection.name {assets.name}</h1>
            <h1>
                selected asset
             {title}
            </h1>
            {/* <h2>{props.id}</h2> */}
            {assets  && assets.length > 0 && assets.map((item)=>{
                console.log("item", item);
                
                  const { image_preview_url, collection, token_id, id, top_bid} = item;
                    
                    return <div>
                        <h1> one nft
                            {item.collection.name}
                            {id}
                        </h1>
                        </div>
                })}
     
                 {/* })} */}
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
