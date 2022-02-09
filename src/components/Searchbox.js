import React, { Component } from "react";
import Radium from "radium";
import styles from "./Searchbox.module.css";

class Searchbox extends Component {
  myCss = {
    color: "white",
  };
  render() {
    return (
      <div className={styles.container}>
        <p style={this.myCss}>Search What You Want :)</p>
        <input
          className={styles.search}
          type="search"
          placeholder="Type to search..."
        />
      </div>
    );
  }
}

export default Searchbox;
