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



const CardRow = () => {
    // render() {
        const [assets, setAssets] = useState([]);

        const getAssets = async() => {
         const response = await fetch(url);
         const assets = await response.json();
          console.log("bundle", assets);
         // const base = assets.bundles.assets[0];
          //console.log("base", base);
          setAssets(assets);
        };

        useEffect(() => {
           getAssets();
        }, []);

       
        return (
        // {/* <>       */}
        <div className="cardRowContainer">
            <div className="cardRowContainer">
            <h1>hello</h1>
            {/* assets={assets} */}
            {/* <Card img={first.img} name = {first.nftName}  price ={first.price} dollarValue={first.dollarValue} owner = {first.owner} assets={assets}/> */}
            {/* <Card/> */}
            {/* <Card/> */}
            </div>
           

         {assets && assets.bundles && assets.bundles.length > 0 && assets.bundles.map((item)=>{
                console.log("in map", item);
                {/* const {id, asset_contract, image_original_url, image_thumbnail_url} = item; */}
                return <li  className="eventCard" key={item.id}>
                    <h1>hellp {item.description}</h1>
                    {item && item.assets.length > 0 && item.assets.map((index) =>{
                        console.log("index", index);
                     return (
                        <div>
                   
                        {/* <img src={index.image_preview_url}></img> */}
                        <Card img = {index.image_preview_url}/>
                        </div>
                        )
                    })}
                    {/* <img src={item.assets.image_original_url}></img> */}

                    {/* <img src={first.img}></img> */}
                    {/* <div>
                        <h4>
                            {item.id}
                        </h4>
                        <a href = {item.asset_contract}>profile</a>
                    </div> */}
                </li>
         })}
         </div>
        //  {/* </> */}
        )
    // }
};
export default CardRow;
