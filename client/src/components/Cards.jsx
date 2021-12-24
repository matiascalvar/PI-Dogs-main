import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getBreeds } from "../actions/index";

function Cards() {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds.slice(0, 8));

  // useEffect se ejecuta cuando se termina de renderizar el componente
  // useDispatch despacha una action al store
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);
  return (
    <>
      <h3>Main cards block. Here should render 8 breed cards per page</h3>
      <p>(We have {breeds.length} breeds in the sliced store)</p>
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

// asd
