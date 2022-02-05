import React from "react";
import styles from "./banner.module.css";
import logo from "../images/coffee-beans.jpg"
const Banner = () => {
 return (
   <div className={styles.container}>
     <img className={styles.banner} src={logo} alt="banner-coffe" />
     <div className={styles.textContainer}>
       <h1>Drink your dreams...</h1>
       <p>
         Pure <span>Coffee ☕</span>
       </p>
     </div>
   </div>
 );
}
 export default Banner;