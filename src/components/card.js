import React, { Component, useState, useEffect } from 'react'
import cn from "classnames";
import styles from "../styles/card.css"




    // render() {
const Card = ({img, assets, name, price, first, id}) => {

    // render() {
        return (

          <div className="eventCardContainerInner">
            <div className="eventCardShadow">
            <div className="eventPart">
              <div className="picPadding">
              {/* <div className="picContainer"> */}
              <img  className="image" src = {img}/>
              </div>
              {/* </div> */}
             
              {/* {assets && assets.bundles && assets.bundles.length > 0 && assets.bundles.map((item)=>{
                console.log("in map", item);
                return <li  className="eventCard" key={item.id}>
                    <h1>hellp</h1>
                    {item.assets.map((index) =>{
                        return <img src={index.image_preview_url}></img>
                    })}
                    <img src={item.image_original_url}></img>

                    <img src={img}></img>
                    <div>
                        <h4>
                            {item.id}
                        </h4>
                        <a href = {item.asset_contract}>profile</a>
                    </div>
                </li>
         })} */}
            <div className="detailContainer">
              {/* <h3 className="eventTitle">NFT nMW</h3>
                <div className="detailItem location">
                  <p>
                    <p>
                      <b>7 Eth</b>
                      <br />
                      Created Mar 7th
                      <br /> @creatornaem <br />
                    </p>
                  </p>
                </div> */}
              </div>
            </div>
         
            <div className="eventCard bottom">
              <div className="flexContainer">
            <div className="detailItem">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <h1 className="eventTitle">{name}</h1>
                  <div>
                <p className="smallText allCaps">
                       starting price <br />
                </p>
                <p className="price">0.5 Eth</p>
                </div>
                
              
                </div>
                {/* <div className="detailItem">
                    <p className="smallText"> Created Mar 7th</p> 
                 </div> */}
                 </div>
            </div>
              </div>
            </div>
        )
    // }
}

export default Card;