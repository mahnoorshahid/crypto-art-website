import React, { Component } from 'react'
import cn from "classnames";
import styles from "../styles/card.css"


export default class Card extends Component {
    render() {
        return (
          <div className="eventCardContainer">
            <div className="eventCard">
            <div className="eventPart noBorder">
              {/* <img className={styles.ctaIcon} src={calender} /> */}
              
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
            </div>
            <div className="eventCard bottom">
              <div className="flexContainer">
            <div className="detailItem">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <p className="eventTitle">NFT Name</p>
                
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
        )
    }
}
