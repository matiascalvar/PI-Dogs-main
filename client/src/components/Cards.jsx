import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getBreeds } from "../actions/index";

function Cards() {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);
  return (
    <>
      <h3>Main cards block. Here should render 8 breed cards per page</h3>
      {breeds.map((e) => (
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

// const mapStateToProps = (state) => ({ breeds: state.breeds });

// export default connect(mapStateToProps, { getBreeds })(Cards);

export default Cards;
