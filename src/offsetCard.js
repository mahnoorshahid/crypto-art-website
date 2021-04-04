import React, { Component, useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom';

import cn from "classnames";
import Card from './components/card';
import styles from "./styles/card.css"

const OffsetCard = (show) => {

        const [assets, setAssets] = useState([]);
        const [title, setTitle] = useState('default title');
        const [count, setCount] = useState(1);

        const showHideClassName = show == true ? "modal display-block" : "whiteBtn";



        // useEffect(() => {
        //    getAssets();
        // }, []);
        console.log("offset props", show);

        return (
         
            <>
        <div className="maxWidth flexCommon">
         <div className="left">
         
            <div className="eventCardShadowInput">
                <article className="cardBorderPadding">
                    <form className="form">
                        <div className="inputContainer">
                            <label className="commonTxtPadding carbonOffset" htmlFor="carbonOffset">Carbon Offset Required</label>
                            <div className="inputBtn">
                            <input 
                            type="text" 
                            pattern="[0-9]*"    
                            value={count}
                            />  
                            {count}
                     
                            <button  className="whiteBtn">
                                up
                            </button>
                            <button className="whiteBtn">
                                down
                            </button>
                                {show !== false && 
                             <button className={showHideClassName}>
                                offsss
                            </button>
                                }
                            </div>
                        </div>
                    </form>
                    <Link>
                    <p className="commonTxtPadding">
                    How Carbon Offsets work <span>&rarr;</span>
                    </p>
                    
                    </Link>
                </article>
            </div>
           </div>
   
         </div>
        </>
        )
  };
export default OffsetCard;
