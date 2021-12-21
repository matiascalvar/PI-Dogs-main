import { Link } from "react-router-dom";
import Nav from "./Nav";
import Cards from "./Cards";

function Home() {
  return (
    <>
      <Nav />
      <h1>It is {new Date().toLocaleTimeString()} HS</h1>
      <Cards />
      <Link to="/">Return to landing page</Link>
    </>
  );
}

export default Home;
