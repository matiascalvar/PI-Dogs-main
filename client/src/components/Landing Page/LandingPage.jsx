import React from "react";
import { Link } from "react-router-dom";
// import image from '../../../source.gif'
function LandingPage() {
  return (
    <div>
      <h1>Welcome to Dogs!</h1>
      <div>
        <img src="https://i.imgur.com/mOiSapI.png" alt="" width="500" />
      </div>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default LandingPage;
