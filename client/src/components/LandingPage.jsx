import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <h1>Welcome to Dogs PI!</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </>
  );
}

export default LandingPage;
