import React, { Component } from 'react';
import styles from "./Searchbox.module.css"

class Searchbox extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Search What You Want :)</p>
                <input  className={styles.search} type="search" placeholder='Type to search...'/>
            </div>
        );
    }
}

export default Searchbox;