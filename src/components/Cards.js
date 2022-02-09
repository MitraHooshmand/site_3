import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import espresso from "../images/espresso.jpg";
import latte from "../images/latte.jpg";
import affogato from "../images/affogato.jpeg"
import mocha from "../images/mocha.jpg"

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={espresso} name="Espresso" price="8 $" />
        <Card image={latte} name="Latte" price="10 $" />
        <Card image={affogato} name="Affogato" price="12 $" />
        <Card image={mocha} name="Mocha" price="11 $" />
      </div>
    );
  }
}
export default Cards;
