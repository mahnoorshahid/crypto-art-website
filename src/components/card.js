import React, { Component } from 'react'
import cn from "classnames";
import styles from "../styles/card.css"


export default class Card extends Component {
    render() {
        return (
          <div>
            <div className="eventCard">
            <div className="eventPart noBorder">
              {/* <img className={styles.ctaIcon} src={calender} /> */}
              <h3 className="eventTitle">NFT nMW</h3>
              <div className="detailContainer">
           
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <p>
                    <p>
                      <b>7 Eth</b>
                      <br />
                      Created Mar 7th
                      <br /> @creatornaem <br />
                    </p>
                  </p>
                </div>
  
                {/* <div className={(styles.detailItem, styles.date)}></div> */}
              </div>
            </div>
            </div>
            <div className="eventCard bottom">
            <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <h3 className="eventTitle">NFT Name</h3>
                  <p>
                    <p>
                       @creatornaem <br />
                    </p>
                  </p>
                </div>
                <div className="detailItem location">
                <b>7 Eth</b>
                      <br />
                      Created Mar 7th
                      <br />
                 </div>
            </div>
            </div>
        )
    }
}
