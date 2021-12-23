import { Link } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Cards from "./Cards";

function Home() {
  return (
    <>
      <Nav />
      <Cards />
      <Link to="/">Return to landing page</Link>
    </>
  );
}

export default Home;
