import { Link } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Cards from "./Cards";

function Home() {
  return (
    <>
      <Link to="/">Return to landing page</Link>
      <Nav />
      <Cards />
    </>
  );
}

export default Home;
