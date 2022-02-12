import React, { Component } from "react";
// import Radium from "radium";
import styles from "./Searchbox.module.css";
import styled from "styled-components";

const MyTag = styled.p`
  color: ${(props) => (props.status ? "red" : "yellow")};
`;

const MyButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  &:hover {
    background-color: gray;
  }
`;

class Searchbox extends Component {
  constructor() {
    super();
    this.state = {
      status: 1,
    };
  }
  chgStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <p>Search What You Want :)</p>
        <input
          className={styles.search}
          type="search"
          placeholder="Type to search..."
        />
        <MyTag status={this.state.status}>aaaa</MyTag>
        <MyButton onClick={this.chgStatus}>Go</MyButton>
      </div>
    );
  }
}

export default Searchbox;
