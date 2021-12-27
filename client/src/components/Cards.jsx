import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getBreeds } from "../actions/index";

function Cards() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const breeds = useSelector((state) =>
    state.breeds.slice(currentPage, currentPage + 8)
  );

  const nextPag = () => {
    if (breeds.length >= 8) setCurrentPage(currentPage + 8);
  };
  const prevPag = () => {
    currentPage > 0
      ? setCurrentPage(currentPage - 8)
      : setCurrentPage(currentPage);
  };
  // useEffect se ejecuta cuando se termina de renderizar el componente
  // useDispatch despacha una action al store
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  return (
    <>
      <div>
        <button onClick={prevPag}>◄</button>
        <button> Page {currentPage / 8 + 1} </button>
        <button onClick={nextPag}>►</button>
      </div>

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
