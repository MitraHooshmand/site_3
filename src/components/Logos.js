import React, { Component } from 'react';
import styles from "./Logos.module.css"
import Microsoft from "../images/Microsoft.jpg"
import Siemens from "../images/Siemens.png"
import facebook from "../images/facebook.png"
class Logos extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Supported by </h3>
                <div className={styles.imgPlaceholder}>
                    <img src={Microsoft}/>
                    <img src={Siemens}/>
                    <img src={facebook}/>


                    </div>
            </div>
        );
    }
}

export default Logos;