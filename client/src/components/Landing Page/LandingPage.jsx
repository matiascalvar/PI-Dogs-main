import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Dogs!</h1>
      <div>
        <img src="https://i.imgur.com/mOiSapI.png" alt="" width="500" />
      </div>
      <Link to="/home">
        <button className={styles.button}>Enter to Dogs</button>
      </Link>
    </div>
  );
}

export default LandingPage;
