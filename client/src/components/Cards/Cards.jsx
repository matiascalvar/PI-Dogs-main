import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { getBreeds } from "../../actions/index";
import styles from "./Cards.module.css";
import Loading from "../Loading/Loading.jsx";

function Cards() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const breeds = useSelector((state) =>
    state.breedsToFilter.slice(currentPage, currentPage + 8)
  );

  const totalBreedsPages = useSelector((state) =>
    Math.ceil(state.breedsToFilter.length / 8)
  );
  const nextPag = () => {
    if (breeds.length >= 8) {
      setCurrentPage(currentPage + 8);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prevPag = () => {
    currentPage > 0
      ? setCurrentPage(currentPage - 8)
      : setCurrentPage(currentPage);
  };

  if (currentPage !== 0) {
    if (currentPage / 8 + 1 > totalBreedsPages) {
      prevPag();
      console.log("No' pasamo'");
      console.log("current: ", currentPage / 8);
      console.log("totalPages: ", totalBreedsPages);
    }
  }

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  if (breeds.length) {
    return (
      <>
        <div className={styles.cardsContainer}>
          {breeds.map((e) => (
            <Card
              name={e.name}
              weight={e.weight}
              temperament={e.temperament}
              image={e.image}
              key={e.id}
              id={e.id}
            />
          ))}
        </div>
        <div>
          <button className={styles.btn} onClick={prevPag}>
            ◄
          </button>
          <span>
            {" "}
            {currentPage / 8 + 1} / {totalBreedsPages}{" "}
          </span>
          <button className={styles.btn} onClick={nextPag}>
            ►
          </button>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

// const mapStateToProps = (state) => ({ breeds: state.breeds });
// export default connect(mapStateToProps, { getBreeds })(Cards);
export default Cards;
