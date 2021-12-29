import Nav from "../Nav/Nav.jsx";
import Cards from "../Cards/Cards.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <div style={{ backgroundColor: "#fcebdb" }}>
      {/* <Header /> */}
      <Nav />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
