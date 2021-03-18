import React, { Component } from 'react'
import cn from "classnames";
import styles from "../styles/card.css"


export default class Card extends Component {
    render() {
        return (
            <div className="eventCard">
            <div className="eventPart eventPartHalf">
              {/* <img className={styles.ctaIcon} src={calender} /> */}
              <h3 className="eventTitle">Jewish Center</h3>
              <div className="detailContainer">
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={location} /> */}
                  <a
                    href={''}
                    className="smallFont"
                  >
                    131 W 86th St
                  </a>
                </div>
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <p>
                    <p>
                      <b>Tuesdays 5:30-7pm</b>
                      <br />
                      April 13 - May 18, 2021
                      <br /> 12-16 year olds <br /> $300
                    </p>
                  </p>
                </div>
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <div>
                    <p>
                      <b>Wednesdays 5:30-7pm Advanced</b>
                      <br />
                    </p>
                    <p>
                      April 14 - May 19, 2021
                      <br />
                      Advanced 12-16 year olds <br /> $300
                    </p>
                  </div>
                </div>
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <div>
                    <p>
                      <b>Sundays 2-4pm</b>
                      <br />
                    </p>
                    <p>
                      April 11 - May 23, 2021
                      <br />
                      Advanced 12-16 year olds <br /> $325
                    </p>
                  </div>
                </div>
                <div className="detailItem location">
                  {/* <img className={styles.locationIcon} src={daysIcon} /> */}
                  <div>
                    <p>
                      <b>Sundays 4 - 6pm</b>
                      <br />
                    </p>
                    <p>
                      April 11 - May 23, 2021
                      <br />
                      12-16 year olds <br /> $325
                    </p>
                  </div>
                </div>
                {/* <div className={(styles.detailItem, styles.date)}></div> */}
              </div>
            </div>
            </div>
        )
    }
}
