import React, { Component, useState, useEffect } from 'react'
import cn from "classnames";
import styles from "../styles/card.css"




    // render() {
     


const Card = (props) => {
  
    // render() {
        return (

          <div className=" eventCardContainer">
            <div className="eventCardShadow">
            <div className="eventPart">
              <img src = {props.img}/>
              
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
                  <p className="eventTitle">NFT Name {props.name}</p>
                
                    <p className="smallText">
                       @creatornaem <br />
                    </p>
              
                </div>
                <div className="detailItem">
                  <div>
                <p className="smallText allCaps">
                       List price <br />
                    </p>
                <p className="price">7 Eth</p>
                </div>
                    
                    <p className="smallText"> Created Mar 7th</p> 
                      
                 </div>
                 </div>
            </div>
              </div>
            </div>
        )
    // }
}

export default Card;