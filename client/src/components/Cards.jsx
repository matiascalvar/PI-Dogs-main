import Card from "./Card";
import { connect } from "react-redux";
import { getBreeds } from "../actions/index";
function Cards({ breeds }) {
  let breedsSliced = breeds.slice(0, 8);
  // console.log(breedsSliced);
  return (
    <>
      <h3>Main cards block. Here should render 8 breed cards per page</h3>
      {breedsSliced.map((e) => (
        <Card
          name={e.name}
          weight={e.weight}
          temperament={e.temperament}
          image={e.image}
          key={e.id}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({ breeds: state.breeds });

export default connect(mapStateToProps, { getBreeds })(Cards);
