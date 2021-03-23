import React, { Component, useState, useEffect } from 'react'
import cn from "classnames";
import Card from './card';
import styles from "../styles/card.css"

const options = {method: 'GET'};

//const url = 'https://api.github.com/users';

//const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
const url = 'https://api.opensea.io/api/v1/bundles?limit=20&offset=0';
//const url = "https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/556324/";

// fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
//   .then(response => console.log("response",response))
//   .catch(err => console.error(err));
const base = null;

const first = {
    img: "https://lvivity.com/wp-content/uploads/2021/02/ar-in-interior-design.jpg",
    nftName: "Coach",
    price:"8",
    dollarValue: "$1000",
    owner: "username"

}



const CardRow = (props) => {
    // render() {
        const [assets, setAssets] = useState([]);

        const getAssets = async() => {
            const response = await fetch(url);
            const assets = await response.json();
            // setAssets(assets)
            //setAssets(assets)
            console.log("bundle", assets);
          const base = assets.bundles[3].assets[0];
          console.log("base", base);

        };
      
        useEffect(() => {
           getAssets();
        }, []);
        console.log("Assets", assets);
        
        return (
        <div>      
        <div className="cardRowContainer">
            <div className="cardRowContainer">
            {assets.map((item)=>{
                const {id, asset_contract, image_original_url, image_thumbnail_url} = item;
                return <li  className="eventCard" key={id}>
                    <h1>hellp</h1>
                    <img src={image_thumbnail_url} alt={id}>
                    </img>
                    <div>
                        <h4>
                            {id}
                        </h4>
                        <a href = {asset_contract}>profile</a>
                    </div>
                </li>
            })}

             <h1>hello</h1>

          <Card img = {first.img} name = {first.nftName} price ={first.price} dollarValue={first.dollarValue} owner = {first.owner}/>
          <Card/>
          <Card/>
            </div>
            </div>
            </div>
        )
    // }
};
export default CardRow;
