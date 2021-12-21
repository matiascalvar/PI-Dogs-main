import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <h1>Welcome to Dogs PI!</h1>
      <Link to="/home">Home</Link>
    </>
  );
}

export default LandingPage;
