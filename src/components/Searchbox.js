import React from "react";
import Radium from "radium";
import styles from "./Searchbox.module.css";
const Searchbox = () => {
  myCss = {
    color: "white",
  };
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
};

export default Searchbox;
