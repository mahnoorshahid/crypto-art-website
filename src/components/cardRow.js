import React, { Component } from 'react'
import cn from "classnames";
import Card from './card';
import styles from "../styles/card.css"


export default class CardRow extends Component {
    render() {
        return (
          <div className="cardRowContainer">
          <Card/>
          <Card/>
          <Card/>
            </div>
        )
    }
}
