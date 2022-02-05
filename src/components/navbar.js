import React from "react";
import styles from "./navbar.module.css";
import logo from "../images/logo.png"


const Navbar = () => {
    return (
      <header className={styles.container}>
        <div>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </header>
    );
}
export default Navbar;