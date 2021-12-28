import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { getBreeds } from "../../actions/index";
import { Link } from "react-router-dom";

function Cards() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const breeds = useSelector((state) =>
    state.breedsToFilter.slice(currentPage, currentPage + 8)
  );

  const nextPag = () => {
    if (breeds.length >= 8) {
      setCurrentPage(currentPage + 8);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prevPag = () => {
    currentPage > 0
      ? setCurrentPage(currentPage - 8)
      : setCurrentPage(currentPage);
  };

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  if (breeds.length) {
    return (
      <>
        <div>
          <button onClick={prevPag}>◄</button>
          <button> Page {currentPage / 8 + 1} </button>
          <button onClick={nextPag}>►</button>
        </div>

        {breeds.map((e) => (
          <Link to={`/detail/${e.id}`} key={e.id}>
            <Card
              name={e.name}
              weight={e.weight}
              temperament={e.temperament}
              image={e.image}
              key={e.id}
            />
          </Link>
        ))}
      </>
    );
  } else {
    return <h2>CARGANDO</h2>;
  }
}

// const mapStateToProps = (state) => ({ breeds: state.breeds });
// export default connect(mapStateToProps, { getBreeds })(Cards);
export default Cards;
